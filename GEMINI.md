# Project Overview

This is a **Next.js** application integrated with **Plasmic**, a headless design tool and CMS. The project is designed to allow design teams to build and publish pages directly from Plasmic Studio while leveraging React and Next.js for custom logic and performance.

## Key Technologies
- **Framework:** Next.js 14
- **UI Library:** React 18
- **Plasmic Integration:** `@plasmicapp/loader-nextjs`
- **Routing:** Catch-all dynamic routing (`pages/[[...catchall]].jsx`)

## Architecture
- **Headless CMS/Design:** Pages and components are primarily managed in Plasmic Studio.
- **Dynamic Rendering:** The `[[...catchall]].jsx` route fetches page data from Plasmic based on the URL path.
- **Incremental Static Regeneration (ISR):** Uses `getStaticProps` with `revalidate` to keep pages updated without a full rebuild.
- **Custom Components:** Custom React components can be registered in `plasmic-init.js` and used inside the Plasmic Studio.
- **App Hosting:** The `/plasmic-host` page enables the Plasmic Studio to render the site with local custom components.

---

# Building and Running

### Development
Start the development server with hot-reloading:
```bash
npm run dev
```

### Production
Build the project for production:
```bash
npm run build
```
Start the production server:
```bash
npm run start
```

### Linting
Run ESLint to check for code quality issues:
```bash
npm run lint
```

---

# Development Workflow (Localhost + Plasmic Studio)

This project uses **App Hosting**. This means Plasmic Studio "embeds" your local application to allow editing with real components and styles.

1.  **Run Locally:** Execute `npm run dev`.
2.  **Plasmic Host:** Ensure your Plasmic Project settings has the **Host URL** set to `http://localhost:3000/plasmic-host`.
3.  **Edit in Studio:** Use your custom components directly in the visual editor.
4.  **Sync Code (Git):** After creating/modifying code components, commit and push your changes to your repository.
5.  **Publish Design:** Only click **Publish** in Plasmic Studio after your code changes have been deployed to production.

---

# Development Conventions

### Plasmic Integration
- **`plasmic-init.js`**: Central configuration for the Plasmic Loader. Add project IDs, API tokens, and register custom code components here.
- **`pages/[[...catchall]].jsx`**: Handles all routes managed by Plasmic. Do not modify unless changing the global page-loading logic.
- **`pages/plasmic-host.jsx`**: Special route for Plasmic Studio to "host" your app.

### Custom Components
When creating new React components that should be available in Plasmic:
1. Create the component in the `components/` directory.
2. Register it in `plasmic-init.js` using `PLASMIC.registerComponent`.
3. Configure the component's props so they are editable in Plasmic Studio.

**Examples:**

*   **InstagramEmbed**
    *   **File:** `components/InstagramEmbed.jsx`
    *   **Purpose:** Reusable Instagram post card.
    *   **Configurable Props:** `postUrl`, `captioned`, `maxWidth`.
*   **TagembedWidget**
    *   **File:** `components/TagembedWidget.jsx`
    *   **Purpose:** Embeds external social feeds.
    *   **Configurable Props:** `widgetId`, `minHeight`.

### Styling
- Global styles are located in `styles/globals.css`.
- Standard Next.js CSS Modules are supported (e.g., `styles/Home.module.css`).
- Most UI styling should be handled within Plasmic Studio for consistency.
