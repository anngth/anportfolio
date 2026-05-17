# Portfolio Website Brief

## Overview

Build a simple, polished single-page portfolio for a software engineer.

The site should be easy to read, fast to load, and simple to maintain. The overall feeling should be minimal, practical, and quietly refined. Avoid patterns that make the page feel like a startup landing page, dashboard, or visual effects demo.

## Core Direction

- Create a personal website for a software engineer.
- Make the first screen clearly show the person's name, role, short positioning line, and key links.
- Prioritize readability, spacing, alignment, and clear content hierarchy.
- Keep the layout simple and content-first.
- Use obvious placeholders if exact personal or project content is missing.
- Do not invent fake companies, fake metrics, testimonials, or work history.

## Visual Style

- Minimal, typography-led design.
- Mostly monochrome with restrained accent usage.
- Plenty of whitespace, but not oversized or theatrical.
- Thin dividers are acceptable.
- Use subtle hover states only.
- Avoid decorative cards unless they improve scanning for repeated project items.
- Avoid large gradients, glows, noise textures, complex backgrounds, or hero illustrations.
- Avoid excessive animation.

## Color Direction

Initial prompt colors:

| Token | Value |
| --- | --- |
| Background | `#0A0A0A` |
| Primary text | `#F5F5F5` |
| Secondary text | `#8A8A8A` |
| Accent | `#C084FC` |
| Borders | `rgba(255, 255, 255, 0.12)` |

Current implementation uses a light `Soft Sage` direction:

| Token | Value |
| --- | --- |
| Background | `#EEF2EA` |
| Primary text | `#151A14` |
| Secondary text | `#687064` |
| Accent | `#7C3AED` |
| Borders | `rgba(21, 26, 20, 0.13)` |

Use the accent sparingly for links, small labels, and active/focus states.

## Typography

- Use a clean sans-serif type stack.
- Use large but controlled hero type.
- Keep body text comfortable to read on desktop and mobile.
- Avoid decorative fonts and extreme letter spacing.
- Keep headings, body copy, metadata, and links visually distinct.

## Page Structure

### Hero

The hero should include:

- Name
- Role
- Location
- Short positioning line
- One concise supporting sentence
- Key links: Email, GitHub, LinkedIn, Resume

Do not place the hero inside a card.

Example tone:

> Software engineer focused on clear systems, useful interfaces, and maintainable products.

### About

Use one or two short paragraphs.

The copy should describe how the engineer works: clarity, systems thinking, product sense, and maintainable code. Avoid buzzwords and exaggerated claims.

### Selected Work

Show a compact list of projects.

Each project should include:

- Project name
- One-sentence description
- Role
- Stack
- Year
- Optional link

Keep the layout simple: rows, dividers, or small cards only if they improve scanning.

### Contact

End with a minimal contact section or footer.

Recommended structure:

- Short availability sentence
- Email link

Avoid duplicating the full hero link list in the footer.

## Interaction

- Use simple hover and focus states.
- Smooth scrolling is acceptable.
- Avoid scroll-triggered animations unless they are very subtle.
- Respect reduced-motion preferences.
- Links should be keyboard-friendly and visibly focused.

## Responsive Behavior

- The site must work well on desktop, tablet, and mobile.
- Hero text must scale without clipping or overflowing.
- Links must remain easy to tap on small screens.
- Text and UI elements must never overlap.
- Use tighter spacing on mobile while preserving readability.

## Tech Stack

- React
- Vite
- TypeScript
- Plain CSS

Keep dependencies minimal and avoid unnecessary UI libraries.

## Content Model

Editable content lives in the root [`content.json`](../content.json) file.

The app reads and validates that JSON in [`src/content.ts`](../src/content.ts). Required sections:

- `profile`
- `about`
- `projects`
- `contact`

Project items support an optional `link` field.

## Technical Quality

- Use semantic HTML.
- Ensure accessible contrast.
- Keep focus states visible.
- Optimize for fast loading.
- Keep the code clean and maintainable.
- Pin package versions instead of using `latest`.
- Keep build-only tooling in `devDependencies`.

## Replacement Checklist

Before publishing, verify:

- Real email replaces placeholder email.
- Resume link points to a real URL or file.
- GitHub and LinkedIn URLs are correct.
- Project descriptions reflect real work.
- Metadata in `index.html` matches the final positioning.

## Final Result

The final website should feel simple, mature, and professional: a clear personal portfolio for a software engineer, with restrained styling and no unnecessary visual complexity.
