# Sev7n | Premium Urban Streetwear

![Sev7n Cover](/frontend/public/hero.png)

A high-fashion, ultra-premium streetwear e-commerce website built for **Sev7n**. Designed with a deep, moody dark-mode aesthetic, this application leverages advanced web animations and fluid typography to deliver an award-winning user experience.

## ✨ Features

- **Advanced Framer Motion Animations**: 
  - Continuous vertical parallax scrolling for floating lookbook images.
  - Staggered directional reveals for typography and buttons.
  - Kinetic scroll-bound rotation on the main hero banner.
  - Smooth page-transition animations across routes using `<AnimatePresence>`.
  - Magnetic-style hover interactions on call-to-action buttons.
- **Fully Responsive & Fluid**:
  - Uses advanced CSS `clamp()` functions for fluid typography that scales perfectly on any device without breaking.
  - A custom-built animated Fullscreen Hamburger menu designed specifically for mobile screens with a circular clip-path reveal.
  - Custom grid layouts that gracefully collapse without horizontal overflow on smaller screens like the iPhone SE.
- **Multi-Page Architecture**:
  - Fully routed using `react-router-dom` featuring `Home`, `About`, `Catalog`, `Showrooms`, and `Contact` pages.
  - Persistent global animated Navbar and Footer layers.
- **Dark Mode Aesthetic**: A sleek `#0a0a0a` background with high-contrast `#ffffff` text, brutalist watermark text on location pages, and radial gradient image masking for seamless visual blending.

## 🛠️ Tech Stack

- **Frontend Framework**: [React 18](https://reactjs.org/) powered by [Vite](https://vitejs.dev/) for lightning-fast HMR and building.
- **Routing**: [React Router v6](https://reactrouter.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Styling**: Pure Vanilla CSS featuring modern flexbox/grid layouts, CSS variables, and fluid typography.

## 🚀 Getting Started

To run this project locally, follow these steps:

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Mehul1311/Sev7n.git
   cd Sev7n/frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **View the site:**
   Open your browser and navigate to `http://localhost:5173` (or the port provided in your terminal).

## 📁 Project Structure

```text
Sev7n/
├── frontend/
│   ├── public/              # Static assets and images
│   ├── src/
│   │   ├── components/      # Reusable UI components (e.g., Layout.jsx)
│   │   ├── pages/           # Route views (Home, About, Catalog, etc.)
│   │   ├── App.jsx          # Main application router and wrapper
│   │   ├── index.css        # Global styles, variables, and responsive media queries
│   │   └── main.jsx         # React DOM entry point
│   └── package.json
└── backend/                 # Node.js/Express scaffolding for future API integration
```

## 📍 Showrooms

Currently operating flagship locations in:
- **New York**: SoHo
- **London**: Shoreditch
- **Jaipur**: Mansarovar

---

*Designed and developed to own the streets.*
