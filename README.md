# Landing Page - React + Vite + Tailwind CSS

A modern, responsive landing page built with React, Vite, and Tailwind CSS. This project showcases a professional business website with multiple sections, smooth animations, and mobile-first design.

## 🚀 Features

- **Modern Tech Stack**: Built with React 19, Vite 7, and Tailwind CSS 4
- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Component-Based Architecture**: Modular components for easy maintenance and scalability
- **Fast Development**: Hot Module Replacement (HMR) with Vite for instant feedback
- **ESLint Integration**: Code quality and consistency with ESLint rules
- **Fixed Header Navigation**: Sticky header with mobile menu support
- **WhatsApp Integration**: Floating WhatsApp button for easy customer contact
- **Multiple Sections**: 13+ content containers showcasing services, portfolio, and more

## 📁 Project Structure

```
Landing Page/
├── public/                    # Static assets
│   ├── Snabbtech logo.png    # Company logo
│   ├── TAXI.png              # Hero section image
│   ├── b1.webp               # Background image
│   ├── app-store.png         # App store badges
│   ├── play-store-1.png      # Play store badges
│   ├── p1.jpeg - p6.jpg      # Portfolio images
│   ├── media1.jpg            # Media assets
│   └── [social icons]        # Social media icons
├── src/
│   ├── Components/
│   │   ├── Header.jsx        # Fixed navigation header
│   │   ├── Container1.jsx    # Hero section
│   │   ├── Container2.jsx    # About/Services section
│   │   ├── Container3.jsx    # Features section
│   │   ├── Container4.jsx    # Industry solutions
│   │   ├── Container5.jsx    # Portfolio showcase
│   │   ├── Container6.jsx    # Partnership section
│   │   ├── Container7.jsx    # Blog section
│   │   ├── Container8.jsx    # SnabbHealth section
│   │   ├── Container9.jsx    # Additional content
│   │   ├── Container10.jsx   # Additional content
│   │   ├── Container11.jsx   # Additional content
│   │   ├── Container12.jsx   # Additional content
│   │   ├── Container13.jsx   # Additional content
│   │   ├── Footer.jsx        # Footer with links
│   │   ├── Whatsapp.jsx      # Floating WhatsApp button
│   │   └── Section.jsx       # Reusable section wrapper
│   ├── App.jsx               # Main application component
│   ├── App.css               # Application styles
│   ├── index.css             # Global styles & Tailwind imports
│   └── main.jsx              # Application entry point
├── index.html                # HTML template
├── package.json              # Dependencies and scripts
├── vite.config.js            # Vite configuration
├── eslint.config.js          # ESLint configuration
└── README.md                 # This file
```

## 🛠️ Tech Stack

- **React 19.2.0** - UI library for building user interfaces
- **Vite 7.2.4** - Next-generation frontend build tool
- **Tailwind CSS 4.1.18** - Utility-first CSS framework
- **ESLint 9.39.1** - Code linting and quality assurance

## 📦 Installation

1. **Clone or navigate to the project directory**:
   ```bash
   cd "Landing Page"
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```
   or
   ```bash
   pnpm install
   ```

## 🚀 Development

Start the development server with hot reload:

```bash
npm run dev
```


The application will be available at `http://localhost:5173` (default Vite port).


## 🎨 Customization

### Colors

The project uses a custom color scheme defined in Tailwind CSS:
- **Primary Blue**: `#134872`
- **Primary Green**: `#7cb342` / `#70AA26` / `#29C553`
- **Text Gray**: `#4D4E50`

### Components

Each container component (`Container1.jsx` through `Container13.jsx`) represents a different section of the landing page:

- **Container1**: Hero section with main headline and CTA
- **Container2-13**: Various content sections (services, portfolio, testimonials, etc.)

### Header Navigation

The header includes the following navigation items:
- Home
- About
- Services
- Industry
- Portfolio
- Partnership
- Blog
- SnabbHealth

You can modify these in `src/Components/Header.jsx`.

### Images

Replace images in the `public/` directory with your own assets. Make sure to maintain the same file names or update the references in the components.

## 📱 Responsive Breakpoints

The project uses Tailwind's default breakpoints:
- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px

## 🔧 Configuration Files

### vite.config.js
Configures Vite build tool and React plugin.

### eslint.config.js
Defines ESLint rules for code quality and React best practices.

### tailwind.config.js
Tailwind CSS is configured via the `@tailwindcss/vite` plugin in Vite config.

## 📄 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📚 Resources

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)