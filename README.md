# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

```
smart-flower-pot
├─ components.json
├─ eslint.config.js
├─ index.html
├─ jsconfig.json
├─ package-lock.json
├─ package.json
├─ postcss.config.js
├─ public
├─ README.md
├─ src
│  ├─ App.jsx
│  ├─ assets
│  │  └─ twin_sunflower.gif
│  ├─ components
│  │  ├─ NavBar.jsx
│  │  ├─ PageTransition.jsx
│  │  ├─ PresetButton.jsx
│  │  ├─ Slider.jsx
│  │  └─ ui
│  │     ├─ slider.jsx
│  │     └─ switch.jsx
│  ├─ features
│  │  ├─ FlowerPot
│  │  │  ├─ FertilizerLevelCard.jsx
│  │  │  ├─ FlowerCard.jsx
│  │  │  ├─ SoilHumidityCard.jsx
│  │  │  ├─ SunlightCard.jsx
│  │  │  ├─ TemperatureCard.jsx
│  │  │  └─ WaterLevelCard.jsx
│  │  └─ Lamp
│  │     ├─ LampCard.jsx
│  │     └─ StatusCard.jsx
│  ├─ index.css
│  ├─ lib
│  │  └─ utils.js
│  ├─ main.jsx
│  └─ pages
│     ├─ dashboard.jsx
│     ├─ FlowerPage.jsx
│     └─ LampPage.jsx
├─ tailwind.config.js
└─ vite.config.js

```