---
# Talk landing page. Save as content/<event-slug>-<year>.md (the URL is /<slug>/).
# Unlisted: not in the menu, post lists, RSS, search or sitemap. Share by URL or QR code.
title: "{{ replace .File.ContentBaseName "-" " " | title }}"
type: talk
url: /{{ .File.ContentBaseName }}/
date: {{ .Date }}         # talk date, shown on the page
publishDate: {{ .Date }}  # keep in the past: Hugo skips future-dated pages
talk_type: talk          # talk | keynote | workshop
event: ""
time: ""                 # e.g. "15:00 to 15:45"
location: ""
description: ""
build:
  list: never
sitemap:
  disable: true

abstract: |

slides_pdf: ""           # e.g. /talks/<slug>/slides.pdf (file in static/talks/<slug>/)
slides_pending: ""       # shown while slides_pdf is empty
video_url: ""
video_pending: ""        # shown while video_url is empty

feedback_title: ""       # defaults to "Got any feedback?"
feedback_text: ""        # defaults to "Reach me on LinkedIn."

sources_note: ""
sources:
  # - group: "Group name"
  #   items:
  #     - case: "Case name"
  #       date: "Jul 2025"
  #       sources:
  #         - title: "Page title"
  #           publisher: "Publisher"
  #           date: "18 Jul 2025"
  #           url: "https://..."
  #           kind: first-party   # first-party | investigator | press (non first-party gets a tag)
---

Short thank-you paragraph shown at the top of the page.
