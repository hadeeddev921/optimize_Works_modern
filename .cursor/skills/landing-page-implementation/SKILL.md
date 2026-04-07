---
name: landing-page-implementation
description: Implements and refines marketing landing pages in this repository using App Router patterns, reusable sections, and consistent styling. Use when adding or updating hero sections, benefit blocks, CTA flows, or conversion-focused page content.
---

# Landing Page Implementation

## Quick start

1. Confirm target route(s) under `app/` and impacted shared components in `components/`.
2. Implement section-level components for repeated structures.
3. Keep copy and CTA hierarchy clear (primary action first, secondary optional).
4. Preserve visual consistency with existing spacing, typography, and color tokens.
5. Validate with lint checks and a quick responsive review.

## Structure defaults

- Route-specific composition: `app/<route>/page.tsx`
- Reusable building blocks: `components/`
- Shared constants/config where appropriate: colocated module or existing site config

## Content and UX checklist

- One clear value proposition above the fold
- Proof/credibility section (results, testimonials, or guarantees)
- Friction-reducing FAQ or objection handling
- Single primary CTA repeated at logical intervals
- Mobile-first spacing and readable text lengths

## Output format for updates

- Files changed
- User-facing impact
- Verification steps run
