# GitHub Pages Deployment Guide

## Quick Fix for 404 Error

If you're seeing a 404 error at https://fahim-miah.github.io/MTAConductor/, follow these steps:

### Step 1: Enable GitHub Pages

1. Go to your repository: https://github.com/Fahim-Miah/MTAConductor
2. Click on **Settings** tab
3. In the left sidebar, click on **Pages**
4. Under **Source**, select **GitHub Actions** (not "Deploy from a branch")
5. Save the settings

### Step 2: Trigger the Workflow

The deployment workflow should run automatically when you push to the `main` branch. If it hasn't run yet:

1. Go to the **Actions** tab in your repository
2. You should see "Deploy to GitHub Pages" workflow
3. If it shows as failed or hasn't run, click on it and click **Run workflow**
4. Select the `main` branch and click **Run workflow**

### Step 3: Wait for Deployment

- The workflow takes about 1-2 minutes to complete
- You can check the progress in the **Actions** tab
- Once complete, you'll see a green checkmark
- The site should be live at: https://fahim-miah.github.io/MTAConductor/

### Step 4: Verify Deployment

Visit https://fahim-miah.github.io/MTAConductor/ and you should see:
- The MTA Conductor Exam Prep homepage
- All 325+ questions displayed correctly
- Working quiz functionality
- Notes and statistics features

## Troubleshooting

### Still seeing 404?

1. **Check workflow status**: Go to Actions tab and ensure the workflow completed successfully
2. **Clear browser cache**: Sometimes browsers cache 404 errors
3. **Wait a few minutes**: GitHub Pages can take a few minutes to propagate
4. **Check repository name**: Ensure your repository is named exactly `MTAConductor` (case-sensitive)

### Workflow failing?

Check the workflow logs in the Actions tab. Common issues:
- Missing `package.json` or dependencies
- Build errors in the code
- Incorrect file paths

### Site loads but questions don't display?

- Open browser console (F12) and check for JavaScript errors
- Ensure `app.js` is loading correctly
- Check that the file paths are correct

## Manual Deployment (Alternative)

If the GitHub Actions workflow isn't working, you can manually deploy:

1. Build the project locally:
   ```bash
   npm install
   npm run build
   ```

2. The `dist/` folder contains all the files needed

3. Create a `gh-pages` branch:
   ```bash
   git checkout -b gh-pages
   ```

4. Copy the contents of `dist/` to the root:
   ```bash
   cp -r dist/* .
   ```

5. Commit and push:
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin gh-pages
   ```

6. In repository Settings > Pages, set source to "Deploy from a branch" and select `gh-pages` branch

## File Structure

The deployment expects this structure in the `dist/` folder:
```
dist/
├── index.html       # Main HTML file
├── app.js          # JavaScript with all questions
└── 404.html        # Custom 404 page
```

## Support

If you continue to have issues:
1. Check the Actions tab for workflow logs
2. Verify all files are committed to the repository
3. Ensure the repository is public (GitHub Pages requires public repos for free accounts)
