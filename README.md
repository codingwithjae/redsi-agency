# Redsi Agency - Modern Web Architecture

> **Note**: This repository is a professional modernization and full refactoring of and old project made with vanilla JavaScript. It has been re-engineered from the ground up to prioritize performance, maintainability, and enterprise-grade type safety.

## 🚀 Overview

Redsi is a high-performance landing page for a digital agency specializing in **Branding**, **Social Media**, and **Full-stack Web Development**. This project serves as a showcase of modern web standards, transforming a vanilla JavaScript codebase into a robust, type-safe React application.

### Key Refactor Highlights
- **100% Strict TypeScript**: Zero `any` usage. Every data structure, from Sanity schemas to UI props, is strictly typed.
- **Sanity CMS Integration**: A fully integrated Sanity Studio v3 accessible at `/admin` for seamless content management.
- **Design System Focus**: Built with a modular approach based on professional Figma specifications, ensuring visual consistency across all components.
- **Modern CSS Logic**: Uses PostCSS for class nesting, following the **BEM methodology** for scalable and maintainable styles.
- **Responsive Layer**: A complete responsive overhaul using a desktop-view approach as a base, adjusted with precise media queries for all devices.

## 🛠 Tech Stack & Libraries

### Core Framework
- **React 19** & **Vite**: Modern foundation for high-speed rendering and development.
- **TypeScript**: Strict mode for maximum code reliability.

### Content Management (Sanity)
- `sanity`: Local Studio v3 embedding.
- `@sanity/client`: Secure fetching of structured content.
- `@sanity/image-url`: On-the-fly image optimization and URL generation.
- `@portabletext/react`: Robust rendering of rich-text content.

### UI & Animations
- `react-icons`: Comprehensive icon set (Feather, FontAwesome, etc.).
- `react-type-animation`: Dynamic typing effects for hero sections.
- `react-scroll`: Smooth navigation between landing sections.
- `react-toastify`: Elegant non-blocking notifications.
- `react-helmet-async`: SEO and dynamic document head management.

### Integrations & Utilities
- `@emailjs/browser`: Serverless contact form integration.
- `react-router-dom`: SPA routing for blog and admin layouts.

### Tooling
- **Biome**: Ultra-fast linting and formatting.
- **PostCSS**: Advanced CSS features like nesting and autoprefixing.

## 🏗 Architecture Best Practices

- **BEM Methodology**: All CSS classes follow the Block-Element-Modifier convention.
- **Atomic-ish Design**: Organized by atoms, molecules, and organisms for modularity.
- **Context API**: Global state management (Blog and Data Providers) to optimize data flow.

## 📜 License

This project is licensed under the [MIT](LICENSE) License.
