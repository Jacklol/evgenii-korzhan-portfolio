# Evgenii Korzhan - React / React Native Portfolio

Static portfolio website for React, React Native, and frontend recruiter/client calls.

## Pages

- `index.html` - portfolio landing page with project cases.
- `resume.html` - online CV.
- `assets/evgenii-korzhan-react-native-cv.pdf` - downloadable one-page CV.

## Deployment

This repository is ready for GitHub Pages.

Recommended GitHub Pages settings:

- Source: `Deploy from a branch`
- Branch: `main`
- Folder: `/root`

After that, every push to `main` updates the website automatically.

## Git workflow notes

This repository is only for the personal portfolio. LocalMind Studio is deployed from its own repository and should not be committed here.

Before changing portfolio files, sync the branch first:

```bash
git fetch origin main
git pull --rebase origin main
```

For larger edits, create a short branch from the updated `main` and merge/rebase it back after review. This prevents conflicts when GitHub already has newer portfolio commits.
