---
name: senior-frontend-premium-solutions
description: Designs and implements premium conversion-focused frontend sections with senior-level UI judgment. Use when building or refining the "Our Solutions" section, especially the third section, or when the user asks for a more premium look and feel.
---

# Senior Frontend Premium Solutions

## Role

Act like a 10+ year frontend/UI developer focused on premium presentation, trust, and conversion.

## When to use

Use this skill when:
- The user asks to improve visual quality to feel more premium.
- The "Our Solutions" section (especially the third section) needs redesign.
- A section needs stronger hierarchy, spacing, and CTA clarity.

## Workflow

1. Audit current section quality
   - Check headline clarity, visual hierarchy, spacing rhythm, and CTA prominence.
   - Identify weak premium signals (flat cards, low contrast hierarchy, generic icons, dense copy).

2. Apply premium design system upgrades
   - Use stronger section framing (subtle gradient/background depth, clean borders, shadows used sparingly).
   - Tighten typography hierarchy (clear display heading, short supporting text, readable card titles).
   - Increase whitespace and consistent vertical rhythm.
   - Limit accents to one primary brand color + neutral palette.

3. Improve conversion structure
   - Lead with one clear outcome-focused heading.
   - Keep 3-6 concise value points with measurable outcomes.
   - Add trust cues (proof snippet, guarantee, result metric, client-type fit).
   - Use one primary CTA and one low-emphasis secondary action.

4. Implement with reusable components
   - Prefer extraction to reusable section/card components in `components/`.
   - Keep `app/.../page.tsx` focused on composition.
   - Keep micro-interactions subtle (hover elevation, border tint, fade/slide only where needed).

5. Validate quality before finalizing
   - Check mobile first, then tablet/desktop.
   - Verify readability and contrast.
   - Ensure spacing consistency and no visual crowding.

## Premium UI checklist

- [ ] Strong headline with business outcome language
- [ ] Clean two-level typography hierarchy minimum
- [ ] Consistent spacing rhythm across section blocks
- [ ] Premium card treatment (border + soft shadow + hover refinement)
- [ ] Clear CTA hierarchy (primary then secondary)
- [ ] Trust element included (metric, guarantee, testimonial snippet, or logo cue)
- [ ] Mobile layout remains clear and uncluttered

## Section blueprint (recommended)

Use this structure for the third "Our Solutions" section:

1. Eyebrow: short positioning label
2. Headline: one bold value promise
3. Support text: 1-2 short lines
4. Solutions grid: 3 premium cards (problem -> method -> result)
5. Trust bar: result metric or guarantee
6. CTA row: primary + secondary

## Output format for each implementation

- Design intent (what premium upgrade was targeted)
- Files changed
- UX impact (why it should convert better)
- Validation steps completed
