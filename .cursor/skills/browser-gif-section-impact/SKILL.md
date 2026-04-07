---
name: browser-gif-section-impact
description: Finds high-impact GIF assets with Browser tools and applies them only in the active section to improve visual appeal without breaking style consistency. Use when the user asks for GIFs to enhance a specific section.
---

# Browser GIF Section Impact

## Goal

Select and place GIFs that improve the current section's visual impact while preserving premium look and performance.

## Scope rule

Only modify the section currently being worked on unless the user explicitly asks for broader changes.

## Workflow

1. Section-first analysis
   - Identify the active section and message intent.
   - Determine suitable GIF role: proof, process preview, emotional accent, or product cue.

2. GIF sourcing via Browser
   - Gather 3-5 options max from reputable sources.
   - Prefer clean loops, no visual noise, no watermark.
   - Check usage rights and attribution requirements.

3. Fit and impact filter
   - Reject GIFs that clash with color palette or feel low quality.
   - Prefer subtle loops that support content hierarchy.
   - Keep file weight reasonable; consider converting to video/webm when needed.

4. Implement in section
   - Place GIF where it reinforces copy and CTA flow.
   - Add proper sizing, radius, and fallback styling.
   - Keep layout stable across breakpoints.

5. Verify
   - Confirm visual balance, loading behavior, and responsiveness.
   - Run lint/type checks if code changed.

## Output format

```markdown
## GIF selection
- Source: [URL]
- License note: [usage safety]
- Why this fits: [section + message]

## Placement
- Section: [file + section]
- Integration: [element + style approach]
- Asset notes: [format + size]

## Verification
- Checks run: [lint/build/manual]
- Visual impact: [brief result]
```

## Guardrails

- Do not add GIFs to unrelated sections.
- Prefer one strong GIF over multiple competing loops.
- If licensing is unclear, do not implement that asset.
