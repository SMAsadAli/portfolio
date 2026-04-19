# Asad Shah Portfolio

Single-page personal portfolio for Asad Shah, built as a lightweight static site for GitHub Pages.

## Stack
- HTML
- CSS
- JavaScript
- GitHub Pages

## Project Structure
- `index.html`: page structure, homepage content, and metadata
- `styles.css`: design system, layout, and responsive rules
- `script.js`: mobile navigation and small interaction logic
- `favicon.svg`: favicon asset
- `assets/logos/`: wordmark and logo assets
- `assets/social/`: social preview source and generated assets
- `content/`: working copy and planning material

## Local Preview
You can open `index.html` directly in a browser for basic review.

If you want a local server:

```bash
python3 -m http.server 4173
```

Then open `http://127.0.0.1:4173`.

## GitHub Pages
The live site is expected at:

```text
https://smasadali.github.io/portfolio/
```

GitHub Pages should be configured with:
- Source: `Deploy from a branch`
- Branch: `main`
- Folder: `/root`

## Notes
- `.nojekyll` is included for GitHub Pages compatibility.
- Social metadata is wired in `index.html`.
- The social preview PNG is generated from `assets/social/og-card.html`.
