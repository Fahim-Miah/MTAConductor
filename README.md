# MTA Conductor Exam Prep

A comprehensive study hub for MTA Conductor exam preparation with 325+ questions.

## Features

- **325+ Practice Questions** across 11 categories
- **Interactive Quiz Mode** with instant feedback
- **Question Navigator** with right-click notes
- **Progress Tracking** with statistics and session history
- **Custom Quiz Builder** to focus on specific categories
- **Responsive Design** for desktop and mobile

## Categories

- 🚦 Signal Indications
- 📋 Operating Rules
- 🚨 Safety & Emergency
- ⚙️ Equipment
- 📻 Communication
- 🗺️ Route Knowledge
- 📚 General Knowledge
- 📊 Table Interpretation
- 📍 Locations
- ⏰ Time & Schedule
- 📜 Official NYCTA Exam (101 questions)

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The built files will be in the `dist/` folder.

## Deployment

This site is automatically deployed to GitHub Pages using GitHub Actions.

### Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. The `dist/` folder contains all the files needed for deployment.

3. Upload the contents of `dist/` to your web server or GitHub Pages.

### GitHub Pages Deployment

The site is configured to automatically deploy to GitHub Pages when changes are pushed to the `main` branch.

**Live URL**: https://fahim-miah.github.io/MTAConductor/

## Technologies

- HTML5
- Tailwind CSS (via CDN)
- Vanilla JavaScript
- Vite (build tool)

## Notes

- All progress and notes are stored in browser localStorage
- No backend required - fully client-side application
- Works offline after initial load

## Disclaimer

This is an unofficial study resource and is not affiliated with the MTA or NYC Transit Authority.
