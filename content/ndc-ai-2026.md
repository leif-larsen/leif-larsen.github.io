---
title: "Your AI Agent Is a Liability. Prove Me Wrong."
type: talk
url: /ndc-ai-2026/
date: 2026-12-09          # talk date, shown on the page
publishDate: 2026-11-16   # must not be in the future, or Hugo skips the page
talk_type: talk
event: "NDC AI 2026"
time: "15:00 to 15:45"
location: "Rebel, Oslo"
description: "Slides, sources and recording for Leif Larsen's NDC AI 2026 talk."
build:
  list: never
sitemap:
  disable: true

abstract: |
  Everyone is building AI agents. Fewer people are asking whether they should. In this session I make the case that autonomous agents are a default architectural mistake: they increase fragility, destroy debuggability, and make failures harder to reason about than the deterministic systems they replace.

  The talk lays out a framework for evaluating when agents are genuinely justified versus when a simpler architecture would serve better. It covers the distinction between chatbots and true agents, three diagnostic questions to answer before building, and examples of production failures.

# Path under static/, e.g. /talks/ndc-ai-2026/slides.pdf. Empty shows slides_pending.
slides_pdf: ""
slides_pending: "The slides will be posted here as a PDF on December 8."
# Link to the recording. Empty shows video_pending.
video_url: ""
video_pending: "The recording will be linked here once NDC publishes it."

feedback_title: "Got any feedback?"
feedback_text: "Agree, disagree, or running agents in production? Reach me on LinkedIn."

sources_note: "Each case links to the affected party's own account or an independent investigator's report where one exists. Press coverage is marked."
sources:
  - group: The incidents
    items:
    - case: Replit
      date: Jul 2025
      sources:
      - title: '@Replit goes rogue during a code freeze and shutdown and deletes our entire database'
        publisher: Jason Lemkin (X)
        date: 18 Jul 2025
        url: https://x.com/jasonlk/status/1946069562723897802
        kind: first-party
      - title: 'Incident 1152: LLM-Driven Replit Agent Reportedly Executed Unauthorized Destructive Commands During Code Freeze'
        publisher: AI Incident Database
        date: 18 Jul 2025
        url: https://incidentdatabase.ai/cite/1152/
        kind: press
    - case: PocketOS
      date: Apr 2026
      sources:
      - title: An AI Agent Just Destroyed Our Production Data. It Confessed in Writing.
        publisher: Jer Crane, PocketOS founder (X)
        date: 25 Apr 2026
        url: https://x.com/lifeofjer/status/2048103471019434248
        kind: first-party
      - title: Cursor-Opus agent snuffs out startup's production database
        publisher: The Register
        date: 27 Apr 2026
        url: https://www.theregister.com/software/2026/04/27/cursor-opus-agent-snuffs-out-startups-production-database/5224442
        kind: press
    - case: OpenAI and Hugging Face
      date: Jul 2026
      sources:
      - title: Security incident disclosure, July 2026
        publisher: Hugging Face
        date: 16 Jul 2026
        url: https://huggingface.co/blog/security-incident-july-2026
        kind: first-party
      - title: 'Anatomy of a Frontier Lab Agent Intrusion: A Technical Timeline of the July 2026 Incident'
        publisher: Hugging Face
        date: 27 Jul 2026
        url: https://huggingface.co/blog/agent-intrusion-technical-timeline
        kind: first-party
      - title: The Hugging Face incident and other third-party impact from misaligned models
        publisher: OpenAI
        date: Jul 2026
        url: https://openai.com/hugging-face-incident-and-misalignment/
        kind: first-party
      - title: Brief independent investigation of agents' behavior, reasoning and collaboration in the OpenAI / Hugging Face hacking incident
        publisher: METR
        date: 26 Aug 2026
        url: https://metr.org/blog/2026-08-26-openai-hugging-face-incident-investigation/
        kind: investigator
    - case: Anthropic evaluations
      date: Jul 2026
      sources:
      - title: Investigating three real-world incidents in our cybersecurity evaluations
        publisher: Anthropic
        date: 30 Jul 2026
        url: https://www.anthropic.com/news/investigating-incidents-cybersecurity-evals
        kind: first-party
      - title: An alignment assessment of recent cybersecurity incidents
        publisher: Anthropic
        date: 9 Sep 2026
        url: https://www.anthropic.com/research/alignment-assessment-cybersecurity-incidents
        kind: first-party
    - case: Meta
      date: Aug 2026
      sources:
      - title: Meta latest to tell world its AI agent wandered out of test pen
        publisher: The Register
        date: 6 Aug 2026
        url: https://www.theregister.com/ai-and-ml/2026/08/06/meta-latest-to-tell-world-its-ai-agent-wandered-out-of-test-pen/5283947
        kind: press
    - case: UK AISI
      date: Aug 2026
      sources:
      - title: 'Incident Report: unsanctioned agent behaviour during cyber testing'
        publisher: AI Security Institute
        date: 4 Aug 2026
        url: https://www.aisi.gov.uk/blog/incident-report-unsanctioned-agent-behaviour-during-cyber-testing
        kind: first-party
  - group: Failures and mechanisms
    items:
    - case: Amazon Kiro
      date: Dec 2025
      sources:
      - title: Correcting the Financial Times report about AWS, Kiro, and AI
        publisher: Amazon
        date: 20 Feb 2026
        url: https://www.aboutamazon.com/news/aws/aws-service-outage-ai-bot-kiro
        kind: first-party
    - case: Transcript tampering
      date: Aug 2026
      sources:
      - title: Brief independent investigation of agents' behavior, reasoning and collaboration in the OpenAI / Hugging Face hacking incident
        publisher: METR
        date: 26 Aug 2026
        url: https://metr.org/blog/2026-08-26-openai-hugging-face-incident-investigation/
        kind: investigator
    - case: Inbox deletion after compaction
      date: Feb 2026
      sources:
      - title: Post by Summer Yue
        publisher: Summer Yue (X)
        date: 23 Feb 2026
        url: https://x.com/summeryue0/status/2025774069124399363
        kind: first-party
      - title: She runs AI safety at Meta. Her AI agent still went rogue
        publisher: The San Francisco Standard
        date: 25 Feb 2026
        url: https://sfstandard.com/2026/02/25/openclaw-goes-rogue/
        kind: press
    - case: GitLost
      date: Jul 2026
      sources:
      - title: 'GitLost: How We Tricked GitHub''s AI Agent into Leaking Private Repos'
        publisher: Noma Labs
        date: 6 Jul 2026
        url: https://noma.security/noma-labs/gitlost-how-we-tricked-githubs-ai-agent-into-leaking-private-repos
        kind: first-party
  - group: What changed in 2026
    items:
    - case: Next Astra release cancelled
      date: Sep 2026
      sources:
      - title: OpenAI benches GPT-6.1 Astra for overstepping the mark
        publisher: The Register
        date: 29 Sep 2026
        url: https://www.theregister.com/ai-and-ml/2026/09/29/openai-benches-gpt-61-astra-for-overstepping-the-mark/5299743
        kind: press
      - title: OpenAI Cancels Release of GPT-6.1 Astra Because It 'Regressed' on Safety
        publisher: Gizmodo
        date: 28 Sep 2026
        url: https://gizmodo.com/openai-cancels-release-of-gpt-6-1-astra-because-it-regressed-on-safety-2000818566
        kind: press
    - case: Open letter
      date: 27 Aug 2026
      sources:
      - title: A call for collective action on cyber defense
        publisher: OpenAI and 115 co-signers
        date: 27 Aug 2026
        url: https://openai.com/collective-cyberdefense/
        kind: first-party
      - title: OpenAI, Anthropic, Google, and 100 other companies call for action to defend against rogue AI
        publisher: TechCrunch
        date: 27 Aug 2026
        url: https://techcrunch.com/2026/08/27/openai-anthropic-google-and-100-other-companies-call-for-action-to-defend-against-rogue-ai/
        kind: press
  - group: Numbers and successes
    items:
    - case: 50% and 80% time horizons
      date: 8 Sep 2026
      sources:
      - title: Time horizons
        publisher: METR
        date: 8 Sep 2026
        url: https://metr.org/time-horizons/
        kind: first-party
      - title: METR-Horizon-v1.1 benchmark results (data)
        publisher: METR
        date: 8 Sep 2026
        url: https://metr.org/assets/benchmark_results_1_1.yaml
        kind: first-party
    - case: Project Glasswing
      date: Apr to May 2026
      sources:
      - title: 'Project Glasswing: An initial update'
        publisher: Anthropic
        date: 22 May 2026
        url: https://www.anthropic.com/news/glasswing-initial-update
        kind: first-party
    - case: Stripe Minions
      date: Feb 2026
      sources:
      - title: 'Minions: Stripe''s one-shot, end-to-end coding agents'
        publisher: Stripe
        date: 9 Feb 2026
        url: https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents
        kind: first-party
      - title: 'Minions: Stripe''s one-shot, end-to-end coding agents, Part 2'
        publisher: Stripe
        date: 19 Feb 2026
        url: https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents-part-2
        kind: first-party
    - case: 39% of plans, 3% of prompts rejected
      date: 7 Aug 2026
      sources:
      - title: Auto mode is now the default in Claude Code for Pro, Max, Ultra, and Team plans
        publisher: Anthropic
        date: 7 Aug 2026
        url: https://claude.com/resources/articles/auto-mode-default-in-claude-code
        kind: first-party
    - case: Skatteetaten
      date: Aug 2023
      sources:
      - title: Maskinlæringsmodell bidrar til å finne dem som ikke rapporterer utleie
        publisher: Skatteetaten
        date: 1 Aug 2023
        url: https://www.skatteetaten.no/en/about-the-tax-administration/analytics-and-reports/the-tax-administrations-newsletter-for-analytics/maskinlaringsmodell-bidrar-til-a-finne-dem-som-ikke-rapporterer-utleie/
        kind: first-party
    - case: Agent-failure insurance, the FCA
      date: '2026'
      sources:
      - title: Armilla AI Expands Lloyd's-Backed AI Liability Limits to $25M
        publisher: Armilla AI
        date: 21 Jan 2026
        url: https://www.armilla.ai/resources/armilla-ai-expands-lloyds-backed-ai-liability-limits-to-25m
        kind: first-party
      - title: Building the future of finance in the age of AI
        publisher: Financial Conduct Authority (Jessica Rusu)
        date: 19 Oct 2026
        url: https://www.fca.org.uk/news/speeches/building-future-finance-age-ai
        kind: first-party
---

Thank you for spending part of your NDC afternoon in this room. Everything from the talk is collected here: the slides, every source behind the cases, and the recording once NDC publishes it.
