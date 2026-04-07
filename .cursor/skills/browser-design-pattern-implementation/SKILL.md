---
name: browser-design-pattern-implementation
description: Finds high-quality UI design patterns using Browser tools, adapts them to the current project style, and implements them in requested sections. Use when the user asks for better layouts, premium section patterns, or design upgrades.
---

# Browser Design Pattern Implementation

## Goal

Find the best relevant UI pattern from Browser research and implement it in the exact section the user requests.

## Workflow

1. Define section target
   - Identify the exact file and section to improve.
   - Extract local constraints: spacing rhythm, typography, color system, component style.

2. Pattern research with Browser
   - Search for 3-6 strong references from reputable sources.
   - Prefer patterns with clear hierarchy and conversion clarity.
   - Avoid patterns that conflict with the project visual language.

3. Pattern fit scoring
   - Score each candidate on: visual fit, implementation complexity, conversion clarity.
   - Choose one primary pattern and one fallback.

4. Translate pattern to local code
   - Keep project conventions and semantic naming.
   - Reuse existing classes/components before adding new ones.
   - Implement only in the requested section unless user asks broader changes.

5. Validate
   - Check responsiveness and visual consistency.
   - Run lint/type checks after implementation.

## Output format

```markdown
## Pattern choice
- Source inspiration: [URL]
- Why selected: [fit + impact]

## Implementation
- Target section: [file + section]
- Files changed: [paths]
- What changed: [key structural/style updates]

## Verification
- Checks run: [lint/build/manual]
- Responsive notes: [desktop/tablet/mobile]
```

## Guardrails

- Prefer adaptation over direct cloning.
- Keep changes concise and section-scoped.
- If references have unclear usage rights, treat as inspiration only and do not copy assets.
