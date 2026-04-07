---
name: browser-animation-premium-implementation
description: Finds premium web animation patterns with Browser tools and implements tasteful, performance-safe animations in requested website sections. Use when the user asks to make UI feel more premium with motion.
---

# Browser Animation Premium Implementation

## Goal

Source premium animation ideas and implement them where requested without harming performance or clarity.

## Workflow

1. Confirm motion target
   - Identify exact section/component and interaction state (load, hover, scroll, idle).
   - Confirm whether motion should be subtle or expressive.

2. Research motion patterns
   - Use Browser to gather 3-5 reference patterns.
   - Focus on modern premium motion: subtle lift, glow drift, reveal stagger, soft parallax.
   - Avoid distracting or gimmicky effects.

3. Choose implementation style
   - Prefer CSS/transform-based animations first.
   - Use lightweight JS only when required.
   - Respect reduced-motion preferences.

4. Implement in requested section
   - Keep timing consistent (e.g. 180-400ms interactions).
   - Use existing class architecture and tokens.
   - Do not animate too many elements at once.

5. Validate motion quality
   - Test desktop and mobile smoothness.
   - Ensure no layout shift and no readability loss.
   - Run lint/type checks.

## Motion quality checklist

- [ ] Animation supports hierarchy, not decoration only
- [ ] Timing and easing feel premium and restrained
- [ ] No jank under normal scrolling
- [ ] `prefers-reduced-motion` considered
- [ ] Section remains readable and accessible

## Output format

```markdown
## Motion direction
- Reference used: [URL]
- Pattern applied: [short description]

## Implementation
- Section updated: [file + section]
- Files changed: [paths]
- Animation details: [trigger, timing, easing]

## Verification
- Checks run: [lint/build/manual]
- Performance note: [brief]
```
