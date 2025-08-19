# My Portfolio

This is my personal portfolio website, built to showcase my skills and projects. It's a modern, responsive single-page application created with React and Vite.

## ✨ Features

- **Responsive Design**: Looks great on all devices, from mobile phones to desktops.
- **Fast & Performant**: Built with Vite for a super-fast development experience and optimized production builds.
- **Component-Based**: Developed with React, using reusable components for a clean and maintainable codebase.
- **Styled with Emotion**: Utilizes Emotion for powerful and expressive CSS-in-JS styling.

## 🛠️ Tech Stack

- **Frontend:** React, Vite
- **Styling:** Emotion
- **Linting:** ESLint
- **Deployment:** GitHub Pages via `gh-pages`

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v18.x or later recommended)
- A package manager like npm, yarn, or pnpm

### Installation

1.  Clone the repo (be sure to update the URL):
    ```sh
    git clone https://github.com/your-username/your-repo-name.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd your-repo-name
    ```
3.  Install the dependencies:
    ```sh
    npm install
    ```

### Available Scripts

In the project directory, you can run the following commands:

- `npm run dev`: Runs the app in development mode. Open http://localhost:5173 to view it in your browser. The page will automatically reload when you make changes.
- `npm run build`: Builds the app for production to the `dist` folder. It correctly bundles React in production mode and optimizes the build for the best performance.
- `npm run lint`: Lints the project files using ESLint to identify and report on patterns found in ECMAScript/JavaScript code.
- `npm run deploy`: Deploys the application to GitHub Pages. This script typically runs the `build` command first, then pushes the contents of the `dist` directory to the `gh-pages` branch.

## 🚢 Deployment

This project is configured for easy deployment to GitHub Pages using the `gh-pages` package.

1.  **Set the `base` in `vite.config.js`**: For GitHub Project pages, you need to set the `base` option to your repository name. For example: `base: '/my-portfolio/'`.

    ```js
    // vite.config.js
    import { defineConfig } from "vite";
    import react from "@vitejs/plugin-react";

    export default defineConfig({
      base: "/your-repo-name/", // <-- Add this
      plugins: [react()],
    });
    ```

2.  **Run the deploy script**:
    `sh
    npm run deploy
    `
    This will build the project and push the `dist` folder to the `gh-pages` branch on GitHub, making your portfolio live.

---

_This project was bootstrapped with Vite._
