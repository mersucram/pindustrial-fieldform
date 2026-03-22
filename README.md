# Panagraphics Industrial Field Form

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)

## Description

Panagraphics Industrial Field Form is a modern web application for collecting and managing industrial field data. Built with React and Vite, it provides a responsive form interface with tabbed navigation for organizing general information and other field-specific data. The application features Bootstrap styling integrated with Tailwind CSS and custom SCSS for a polished, professional appearance.

## Features

- **Tabbed Form Interface** — Organized form sections using React Tabs for better data collection
- **General Information Form** — Dedicated component for capturing essential field information
- **Responsive Design** — Mobile-friendly layout that adapts to different screen sizes
- **Bootstrap Integration** — Professional UI components via React Bootstrap
- **Dark Mode Support** — CSS variables enable light and dark theme support
- **Email Integration** — Nodemailer support for form submissions and notifications
- **Development Server** — Hot Module Replacement (HMR) with Vite for rapid development
- **Code Quality** — ESLint configuration for consistent code standards

## Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React** 19.2.4 | UI library and component framework |
| **Vite** 8.0.1 | Build tool and development server |
| **Tailwind CSS** 4.2.2 | Utility-first CSS framework |
| **Bootstrap** 5.3.8 | Responsive component library |
| **React Bootstrap** 2.10.10 | Bootstrap components as React components |
| **React Tabs** 6.1.0 | Tabbed interface component |
| **Emotion** 11.14.0 | CSS-in-JS styling solution |
| **Sass** 1.98.0 | CSS preprocessor |
| **Nodemailer** 8.0.3 | Email sending capability |
| **Day.js** 1.11.20 | Lightweight date utility |
| **ESLint** 9.39.4 | JavaScript linter |

## Prerequisites

- **Node.js** 18.0.0 or higher
- **npm** 9.0.0 or higher

## Getting Started

### Installation

1. Clone the repository:
```bash
git clone https://github.com/mersucram/pindustrial-fieldform.git
cd pindustrial-fieldform
```

2. Install dependencies:
```bash
npm install
```

### Running the Development Server

Start the development server with hot module replacement:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (default Vite port).

### Building for Production

Create an optimized production build:
```bash
npm run build
```

### Previewing Production Build

Preview the production build locally:
```bash
npm run preview
```

### Code Linting

Run ESLint to check code quality:
```bash
npm lint
```

## Usage

The application provides a form-based interface for collecting industrial field data:

1. **Access the Application** — Navigate to the development server URL
2. **Fill Out Forms** — Use the tabbed interface to navigate between form sections
3. **General Information Tab** — Enter required field information
4. **Additional Sections** — Switch between tabs to complete all required data
5. **Submit** — Form data can be processed and sent via email integration

### Example Component Structure

The main form components are located in `src/components/`:
- `GeneralInfoForm.jsx` — General information data collection
- `Tabs.jsx` — Tab navigation container

## Project Structure

```
pindustrial-fieldform/
├── src/
│   ├── components/           # React components
│   │   ├── GeneralInfoForm.jsx
│   │   └── Tabs.jsx
│   ├── assets/              # Static assets
│   │   ├── images/          # Image files
│   │   ├── react.svg
│   │   ├── vite.svg
│   │   └── scss/            # Global SCSS styles
│   ├── App.jsx              # Main app component
│   ├── App.css              # App styles
│   ├── index.css            # Global styles with Tailwind
│   └── main.jsx             # React entry point
├── public/                  # Public assets
│   ├── favicon.svg
│   └── icons.svg
├── index.html               # HTML template
├── vite.config.js           # Vite configuration
├── eslint.config.js         # ESLint configuration
├── package.json             # Project metadata and dependencies
└── package-lock.json        # Dependency lock file
```

## Contributing

Contributions are welcome! Please follow these guidelines:

1. Create a feature branch for your changes
2. Follow the existing code style (enforced by ESLint)
3. Test your changes with the development server
4. Ensure `npm lint` passes without errors
5. Submit a pull request with a clear description of changes

## License

Unlicensed — This project does not currently have a license specification.

---

<p align="center">
  <a href="https://readmebot.dev?utm_source=readme_badge&utm_medium=github">
    <img src="https://readmebot.dev/badge.svg" alt="Docs by ReadmeBot" height="20">
  </a>
</p>