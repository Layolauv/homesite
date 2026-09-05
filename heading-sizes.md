# Heading Sizes (h1–h6) — Mobile vs Desktop

No single global h1–h6 scale exists in the codebase — sizes are set per-component with Tailwind
utility classes (`@apply text-[Npx] md:text-larger`, etc.), using the custom scale tokens defined
in `src/assets/styles/_themes.scss`:

```
--text-xsmall: 1.125rem (18px)
--text-small:  1.25rem  (20px)
--text-medium: 1.75rem  (28px)
--text-large:  3rem     (48px)
--text-larger: 3.625rem (58px)
```

Breakpoint used everywhere is Tailwind's default `md` (768px) — mobile = base classes,
desktop = `md:` classes.

## H1

| Location | Mobile | Desktop |
|---|---|---|
| `about` hero title / `musings` hero title (`.hero__title`) | 20px | 58px (`text-larger`) |
| **Blog post h1** (`musings/[slug]`, from markdown) | *(unset)* **Recommended: 20px** | *(unset)* **Recommended: 58px** |

## H2

| Location | Mobile | Desktop |
|---|---|---|
| `projects` title (`.projects__title`) | 12px | 20px (`text-small`) |
| `musings` latest post title (`.latest__title`) | 20px | 32px |
| `about` experience/publications titles (`.experience__title` / `.publications__title`) | 16px | 48px (`text-large`) |
| `contact` info title (`.info__title`) | 16px | 58px |
| **Blog post h2** | *(unset)* **Recommended: 18px** | *(unset)* **Recommended: 32px** |

## H3

| Location | Mobile | Desktop |
|---|---|---|
| `musings` post card title (`.post__title`) | 18px | 20px |
| `projects` controls subtitle (`.projects__controls--subtitle`) | 20px | 58px (`text-larger`) |
| `about` experience list item title (nested `h3`) | 16px | 22px |
| `musings` latest subtitle (`.latest__subtitle`) | *(unset — color only)* **Recommended: 16px** | *(unset)* **Recommended: 22px** |
| `about` publications list item title (nested `h3`) | *(unset — font-weight only)* **Recommended: 16px** | *(unset)* **Recommended: 22px** |
| `contact` enquiries/connect titles (`.info__enquiries-title`, `.info__connect-title`) | *(unset — font-weight/margin only)* **Recommended: 16px** | *(unset)* **Recommended: 22px** |
| **Blog post h3** | *(unset)* **Recommended: 16px** | *(unset)* **Recommended: 22px** |

## H4

| Location | Mobile | Desktop |
|---|---|---|
| `contact` CTA heading (`.contact__cta-heading`) | 28px | 54px |
| **Blog post h4** | *(unset)* **Recommended: 14px** | *(unset)* **Recommended: 20px** |

## H5 — not used anywhere in page markup

**Recommended:** 12px mobile / 18px desktop (`text-xsmall`) — applies to blog post h5.

## H6 — not used anywhere in page markup

**Recommended:** 11px mobile / 16px desktop — applies to blog post h6.

---

## Notable gap

The blog post template (`src/routes/musings/[slug]/page.scss`) only sets `color` on `h1`–`h6` —
no `font-size` at all. Since Tailwind's Preflight reset is active (`@use 'tailwindcss'` in
`_themes.scss`), unstyled headings get `font-size: inherit`, meaning every heading in a rendered
blog post currently displays at the same size as surrounding body text (no visual hierarchy). All
blog-post sizes above are recommendations, not present in code.

## Sources checked

- `src/assets/styles/_themes.scss` (Tailwind `@theme` scale tokens)
- `src/assets/styles/_fonts.scss`, `_mixins.scss`, `_variables.scss` (no font-size rules)
- `src/routes/layout.scss` (no font-size rules)
- `src/routes/musings/[slug]/page.scss` (color only on h1–h6)
- `<style lang="scss">` blocks in:
  - `src/routes/musings/+page.svelte`
  - `src/routes/projects/+page.svelte`
  - `src/routes/about/+page.svelte`
  - `src/routes/contact/+page.svelte`
  - `src/routes/musings/[slug]/+page.svelte` (empty style block)
