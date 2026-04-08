# ms.ai

Single-page portfolio and services site for `ms.ai`, built as a lightweight static site for GitHub Pages.

## Stack
- HTML
- CSS
- JavaScript
- GitHub Pages

## Project Structure
- `index.html`: page structure and metadata
- `styles.css`: design system, layout, and responsive rules
- `script.js`: mobile navigation and small interaction logic
- `favicon.svg`: favicon asset
- `assets/logos/`: logo and wordmark assets
- `assets/social/`: social preview assets
- `content/`: working copy and planning material

## Local Preview
You can open `index.html` directly in a browser for basic review.

If you want a local server:

```bash
python3 -m http.server 4173
```

Then open `http://127.0.0.1:4173`.

## GitHub Pages Publish
1. Create or use a public GitHub repository.
2. Push this project to the `main` branch.
3. Open `Settings -> Pages`.
4. Set the source to `Deploy from a branch`.
5. Choose `main` and `/root`.
6. Save and wait for the site to publish.

The initial GitHub Pages URL will be:

```text
https://yourusername.github.io/repository-name
```

## Notes
- `.nojekyll` is included for GitHub Pages compatibility.
- Social metadata is wired in `index.html`.
- If the final repository name changes, update any future canonical/live URLs accordingly.
