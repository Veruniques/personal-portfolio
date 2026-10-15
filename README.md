# noroll.studio

Portfolio of Veronika Dominiková: AI cinematic production + product design (UX/UI).
A macOS-style desktop: projects are icons, each opens as an "Information about" window.

Plain HTML/CSS/JS, no build step. Hosted on GitHub Pages.

## Edit content

Everything lives in `assets/js/data.js`:

- `cinematic` — video projects (Vimeo IDs, text, desktop position `x`/`y` in %)
- `product` — case studies: hero, overview, `chapters[]` with galleries (`size`: full|half|third, `full` = full-length page for the lightbox). Images in `assets/img/work/`.
- `about` — intro, CV, tools

Images go in `assets/img/`. Keep them under ~400 KB (JPG, max 1600 px wide).

## Run locally

```
python3 -m http.server 8000
```

then open http://localhost:8000. Deep links work: `/#keboola`, `/#about`, `/#contact`.

## Legacy

`noroll.css` and `noroll.js` are the old Webflow embed code (3D cube). Not used by the new site.
