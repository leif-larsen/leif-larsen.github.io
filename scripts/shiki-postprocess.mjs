import fs from "node:fs/promises";
import path from "node:path";
import fg from "fast-glob";
import { load } from "cheerio";
import { createHighlighter } from "shiki";

const PUBLIC_DIR = path.resolve(process.cwd(), "public");

const LANG_ALIASES = new Map([
  ["js", "javascript"],
  ["jsx", "jsx"],
  ["ts", "typescript"],
  ["tsx", "tsx"],
  ["cs", "csharp"],
  ["c#", "csharp"],
  ["golang", "go"],
  ["shell", "bash"],
  ["sh", "bash"],
  ["zsh", "bash"],
  ["yml", "yaml"],
  ["md", "markdown"],
  ["text", "plaintext"],
  ["plain", "plaintext"],
  ["plain-text", "plaintext"],
  ["plaintext", "plaintext"],
  ["language", "plaintext"]
]);

function normalizeLanguage(raw) {
  if (!raw) return "plaintext";
  const trimmed = raw.trim().toLowerCase();
  if (!trimmed) return "plaintext";
  return LANG_ALIASES.get(trimmed) ?? trimmed;
}

function extractLanguage(pre, code) {
  const classNames = `${pre.attr("class") || ""} ${code.attr("class") || ""}`;
  const classes = classNames.split(/\s+/).filter(Boolean);
  for (const cls of classes) {
    if (cls.startsWith("language-")) {
      return cls.slice("language-".length);
    }
    if (cls.startsWith("lang-")) {
      return cls.slice("lang-".length);
    }
  }
  return "";
}

async function main() {
  try {
    await fs.access(PUBLIC_DIR);
  } catch (error) {
    console.log("Shiki: public directory not found.");
    return;
  }

  const htmlFiles = await fg(["**/*.html"], {
    cwd: PUBLIC_DIR,
    absolute: true
  });

  if (!htmlFiles.length) {
    console.log("Shiki: no HTML files found in public.");
    return;
  }

  const highlighter = await createHighlighter({
    themes: ["github-dark"],
    langs: ["plaintext"]
  });
  const loadedLanguages = new Set(["plaintext"]);

  async function ensureLanguage(lang) {
    if (!lang || lang === "plaintext") return "plaintext";
    if (loadedLanguages.has(lang)) return lang;
    try {
      await highlighter.loadLanguage(lang);
      loadedLanguages.add(lang);
      return lang;
    } catch (error) {
      return "plaintext";
    }
  }

  let updatedCount = 0;

  for (const file of htmlFiles) {
    const html = await fs.readFile(file, "utf8");
    const hasDoctype = /^\s*<!doctype html>/i.test(html);
    const $ = load(html, { decodeEntities: false });
    let changed = false;

    for (const preEl of $("pre").toArray()) {
      const pre = $(preEl);
      if (pre.hasClass("shiki")) continue;
      if (pre.closest(".codeblock").length) continue;

      const codeEl = pre.find("code").first();
      if (!codeEl.length) continue;

      const codeText = codeEl.text();
      const rawLang = extractLanguage(pre, codeEl);
      const normalizedLang = normalizeLanguage(rawLang);
      const finalLang = await ensureLanguage(normalizedLang);

      const shikiHtml = highlighter.codeToHtml(codeText, {
        lang: finalLang,
        theme: "github-dark"
      });

      const $shiki = load(shikiHtml, { decodeEntities: false }, false);
      const shikiPre = $shiki("pre").first();
      shikiPre.removeAttr("style");
      shikiPre.addClass("codeblock-pre");
      shikiPre.attr("data-language", finalLang);

      const shikiMarkup = $shiki.root().html() || "";
      const wrapper = $('<div class="codeblock" data-code-block></div>');
      wrapper.append(
        '<button class="code-copy" type="button" aria-label="Copy code" data-code-copy><span class="code-copy-label">Copy</span></button>'
      );
      wrapper.append(shikiMarkup);

      const highlightWrapper = pre.closest(".highlight, .chroma");
      if (highlightWrapper.length) {
        highlightWrapper.replaceWith(wrapper);
      } else {
        pre.replaceWith(wrapper);
      }

      changed = true;
    }

    if (changed) {
      let output = $.html();
      if (hasDoctype && !/<!doctype html>/i.test(output)) {
        output = `<!doctype html>\n${output}`;
      }
      await fs.writeFile(file, output);
      updatedCount += 1;
    }
  }

  console.log(`Shiki: processed ${updatedCount} HTML file(s).`);
}

main().catch((error) => {
  console.error("Shiki: postprocess failed.");
  console.error(error);
  process.exitCode = 1;
});
