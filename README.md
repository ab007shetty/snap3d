# React Basics

This is a Vite - React - Tailwind - Lucide React + Extras Boilerplate.

---

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/ab007shetty/vortex.git && cd vortex
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

---

## 📂 GitHub Actions Automatic Deployment

- The workflow file `.github/workflows/deploy.yml` is already included in this repo.
- Update base URL in `vite.config.js` and homepage field in `package.json` .
- If needed include CNAME file in the public folder.
- On every push to the `main` branch, GitHub Actions:
  - Installs dependencies
  - Runs the build script
  - Deploys the site to GitHub Pages by pushing the `dist/` folder to the `gh-pages` branch
- This means **no manual deploy commands needed** after setup—just push your code!

---

## 🛠 GitHub Pages Settings

Make sure GitHub Pages is configured correctly in your repo:

1. Go to **Settings > Pages**.
2. Set **Source** to:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
3. Save changes.

Your site will then be live at:
`https://<your-github-username>.github.io/<repo-name>/`

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
