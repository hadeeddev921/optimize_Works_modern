---
name: browser-image-sourcing
description: Finds project-aligned images using Browser tools with strong style matching, licensing checks, and implementation-ready recommendations. Use when the user asks to find better images, replace visuals, or source assets that match existing UI.
---

# Browser Image Sourcing

## Goal

Source better images that align with the current project style and are ready to implement.

## When to use

Use this skill when:
- The user asks for better images, icons, or illustrations.
- A section looks visually inconsistent and needs more premium assets.
- The team needs image options with clear usage rights.

## Workflow

1. Define the visual target from current UI
   - Read relevant section copy and surrounding styles first.
   - Capture style constraints: tone (premium/minimal), color family, composition, and density.
   - Prefer images that support the message rather than decorative noise.

2. Search with Browser and short keyword batches
   - Use specific queries that include domain + style + format (for example: `operations automation illustration minimal`).
   - Explore 2-4 reputable sources per round.
   - Avoid random image scraping with unclear ownership.

3. Filter strictly
   - Keep only options that match the project's visual language.
   - Remove assets that clash with typography, spacing, or card style.
   - Remove assets with uncertain licensing.

4. Validate implementation fit
   - Prefer modern formats (`webp`, `avif`, optimized `jpg/png` if needed).
   - Favor assets that crop well at target aspect ratios.
   - Check if transparent background is needed for cards/icons.

5. Return implementation-ready shortlist
   - Provide 3-6 options max per request.
   - Include source URL, license note, why it fits, and recommended file usage.
   - Map each option to exact project placement (`hero`, `solutions card`, `results`, etc.).

## Quality checklist

- [ ] Visual style matches existing section tone
- [ ] Color behavior fits current palette
- [ ] Asset supports the section message
- [ ] License is clear for project use
- [ ] Format and dimensions are implementation-ready
- [ ] Recommendation includes where/how to use it

## Output format

Use this format for each recommendation:

```markdown
### Option [N] - [Short name]
- Source: [URL]
- License: [Commercial-safe note]
- Fit: [Why it aligns with this project]
- Best placement: [Exact section/component]
- Suggested asset spec: [Format + approximate dimensions]
```

## Defaults

- Default to fewer, stronger options over large noisy lists.
- Default to style consistency over novelty.
- If licensing is unclear, mark as risky and do not recommend as primary.
