# Pawan Kumar Sah | Portfolio

Personal portfolio site, built with plain HTML, CSS and JavaScript (no framework, no build step) and deployed on GitHub Pages.

Live site: https://pawansah584.github.io

## Structure

```
index.html              Page markup (all sections)
css/style.css            Styles (dark theme, layout, animations)
js/script.js              Project/certificate data + nav, scroll-spy, lightbox behavior
assets/img/               Profile photo
assets/resume.pdf         Downloadable resume
assets/certificates/      Certificate files, linked from the Certifications section
```

## Editing content

- **Projects**: edit the `projects` array in `js/script.js`. The RxShield card is hand-written in `index.html` under `#projects` (`.project-featured`).
- **Certificates**: edit the `certificates` object in `js/script.js`; drop new files into `assets/certificates/`.
- **Resume**: replace `assets/resume.pdf` with an updated export, keeping the same filename.

## Running locally

Just open `index.html` in a browser, or serve the folder with any static server, e.g.:

```
python -m http.server 8000
```

## Deploying

Push to the `main` branch of a repo named `Pawansah584.github.io`. GitHub Pages serves it automatically at the root domain.
