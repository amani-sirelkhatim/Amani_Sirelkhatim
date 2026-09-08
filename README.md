# Amani Sirelkhatim — Developer Portfolio

A responsive, dark-mode personal portfolio site built with plain HTML, CSS,
and JavaScript — no build step, no framework, deployable directly to
GitHub Pages.

## Structure

```
index.html                     Page markup (all sections)
assets/css/style.css           Design system + all styling
assets/js/data.js              ← EDIT THIS to update content
assets/js/main.js              Rendering + interactivity (no content here)
assets/img/projects/<id>/      Screenshots, one folder per project
assets/cv/                     Drop your CV PDF here
.nojekyll                      Tells GitHub Pages not to run Jekyll
```

## Updating content

Everything you're likely to change — projects, experience, education,
skills, and contact links — lives in **`assets/js/data.js`**. You don't
need to touch the HTML or CSS to:

- Add, remove, or edit a project (including its screenshots — drop new
  images in `assets/img/projects/<project-id>/` and reference the
  filename in that project's `gallery` array)
- Update your experience or education timeline
- Change your email, LinkedIn, or GitHub link
- Point the "Download CV" button at your real CV file

The `id` on each project in `data.js` must match its folder name under
`assets/img/projects/`.

### Adding your CV

Save your CV as `assets/cv/Amani-Sirelkhatim-CV.pdf` — the download
buttons already point at that path, so no other change is needed. If you
use a different filename, update `cv.href` in `data.js` to match.

### Adding your contact links

Open `assets/js/data.js` and fill in the `contact` object at the top with
your real email, LinkedIn, and GitHub URLs.

## Running locally

No build step is required. From the project folder:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` in a browser. (Opening `index.html`
directly with `file://` also mostly works, but a local server avoids
occasional browser restrictions on local file requests.)

## Deploying to GitHub Pages

1. Create a new GitHub repository and push this folder's contents to it:

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```

2. In the repository on GitHub, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to `Deploy from a branch`,
   branch `main`, folder `/ (root)`.
4. Save. GitHub will publish the site at:
   `https://<your-username>.github.io/<repo-name>/`

   If you'd rather have it at `https://<your-username>.github.io/`
   directly, name the repository `<your-username>.github.io`.

No routing configuration is needed — this is a single HTML page with
in-page anchors and JavaScript-driven modals, so there's nothing that can
break on refresh or on GitHub's static hosting.

## Notes

- All screenshots are compressed to WebP and kept small (site's image
  folder is under 500 KB total) for fast loading.
- Motion respects `prefers-reduced-motion`.
- The site is fully keyboard-navigable (project cards, modal, and image
  lightbox all work with keyboard focus and Escape/Arrow keys).
