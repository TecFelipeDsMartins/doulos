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

# Development Conventions

### Plasmic Integration
- **`plasmic-init.js`**: Central configuration for the Plasmic Loader. Add project IDs, API tokens, and register custom code components here.
- **`pages/[[...catchall]].jsx`**: Handles all routes managed by Plasmic. Do not modify unless changing the global page-loading logic.
- **`pages/plasmic-host.jsx`**: Special route for Plasmic Studio to "host" your app. Ensure this is configured in Plasmic project settings as the "Host URL".

### Custom Components
When creating new React components that should be available in Plasmic:
1. Create the component in the `components/` directory.
2. Register it in `plasmic-init.js` using `PLASMIC.registerComponent`.
3. Configure the component's props so they are editable in Plasmic Studio.

**Example: TagembedWidget**
- **File:** `components/TagembedWidget.jsx`
- **Purpose:** Embeds external social feeds.
- **Configurable Props:** `widgetId`, `minHeight`.

### Styling
- Global styles are located in `styles/globals.css`.
- Standard Next.js CSS Modules are supported (e.g., `styles/Home.module.css`).
- Most UI styling should be handled within Plasmic Studio for consistency.
