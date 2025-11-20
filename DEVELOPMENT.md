# Crescendo Innovations - Modern Energy Website

A modern, multi-page React website showcasing hydrogen and lithium battery technology solutions with Material UI integration, responsive design, and smooth animations.

## 🚀 Features

### Pages
- **Home (Index)** - Hero section with key highlights and CTAs
- **Features** - Technology showcase with benefits and feature cards
- **Pricing** - Tiered pricing plans with feature comparisons
- **Blog** - Content hub with articles and case studies
- **Integrations** - Ecosystem and API documentation overview
- **Contact** - Contact form with validation and isometric illustration

### Design System
- **ButtonVariants Component** - Reusable button library with 4 variants:
  - `hero` - Primary CTA with gradient background
  - `glassy` - Frosted glass effect
  - `outline` - Outlined style with primary color
  - `ghost` - Minimal transparent style
- **Icon Support** - Integrated lucide-react icons on buttons
- **Isometric Illustrations** - `.iso-float` animation applied to images
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Dark/Light Mode Ready** - CSS variables support

### Technical Stack
- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + Material UI
- **Routing**: React Router v6 (nested routes)
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Animations**: Tailwind CSS keyframes + CSS animations

## 📁 Project Structure

```
src/
├── components/
│   ├── ButtonVariants.tsx        # Reusable button component
│   ├── HeroSection.tsx           # Home hero with upgraded buttons
│   ├── CTASection.tsx            # Call-to-action with buttons
│   ├── Isometric.tsx             # Isometric SVG wrapper
│   ├── Layout.tsx                # Main layout wrapper
│   ├── Header.tsx                # Navigation header
│   ├── Footer.tsx                # Footer component
│   ├── mui/                      # MUI wrapper components
│   │   ├── MuiButton.tsx
│   │   ├── MuiTextField.tsx
│   │   └── MuiCard.tsx
│   ├── ui/                       # shadcn/ui components
│   └── [SectionComponents]
├── pages/
│   ├── Index.tsx                 # Home page
│   ├── Features.tsx              # Features page
│   ├── Pricing.tsx               # Pricing page
│   ├── Blog.tsx                  # Blog/Resources page
│   ├── Integrations.tsx          # Integrations page
│   ├── Contact.tsx               # Contact form page
│   └── NotFound.tsx              # 404 page
├── assets/
│   ├── isometric.svg             # Isometric illustration
│   ├── logo.png
│   ├── hero.jpg
│   └── [images]
├── App.tsx                       # Main app with routing + MUI theme
├── main.tsx                      # React entry point
└── index.css                     # Global styles + animations
```

## 🎨 Color Palette

CSS variables (see `src/index.css`):
- **Primary**: `#9d5c0d` (green-tinted accent)
- **Accent**: `#d4a574` (golden)
- **Background**: Light/dark mode support via CSS vars
- **Borders/Muted**: Subtle grays with opacity

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm npm preview
```

## 📝 Adding New Pages

### Step 1: Create a new page file

```bash
touch src/pages/YourPage.tsx
```

### Step 2: Use the page template

```tsx
"use client";

import ButtonVariants from "@/components/ButtonVariants";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import isometricUrl from "@/assets/isometric.svg";

const YourPage = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-6xl">
        {/* Your content */}
        <ButtonVariants
          variant="hero"
          size="lg"
          icon={ArrowRight}
          iconPosition="right"
          onClick={() => navigate("/contact")}
        >
          Call to Action
        </ButtonVariants>
      </div>
    </section>
  );
};

export default YourPage;
```

### Step 3: Add route in `src/App.tsx`

```tsx
import YourPage from "./pages/YourPage";

// Inside <Routes>:
<Route path="your-page" element={<YourPage />} />
```

## 🎯 Using ButtonVariants

### Basic Usage

```tsx
<ButtonVariants
  variant="hero"          // "hero" | "glassy" | "outline" | "ghost"
  size="lg"              // "sm" | "md" | "lg"
  icon={ArrowRight}      // Lucide icon component
  iconPosition="right"   // "left" | "right"
  onClick={handler}
>
  Click Me
</ButtonVariants>
```

### With Loading State

```tsx
<ButtonVariants
  variant="hero"
  isLoading={isSubmitting}
>
  Submit
</ButtonVariants>
```

## 🎬 Animations

### Isometric Float Animation
Add the `.iso-float` class to any image to apply a gentle 6-second float animation:

```tsx
<img src={isometricUrl} alt="..." className="w-full h-auto iso-float" />
```

### Custom Animation Delays
Use Tailwind animation delay utilities:
- `.anim-delay-01` (0.1s)
- `.anim-delay-02` (0.2s)
- `.anim-delay-03` (0.3s)
- etc.

## 🔧 Configuration

### Tailwind Config
See `tailwind.config.ts` for design tokens and custom utilities.

### MUI Theme
Modified in `src/App.tsx`:
```tsx
const theme = createTheme({
  palette: {
    primary: { main: "#7c3aed" },
    secondary: { main: "#06b6d4" },
  },
});
```

## 📱 Responsive Design

All pages use Tailwind's responsive prefixes:
- `sm:` (640px)
- `md:` (768px)
- `lg:` (1024px)
- `xl:` (1280px)

## 🧪 Development Workflow

1. **Create/edit components** in `src/components/`
2. **Add pages** following the template above
3. **Update routing** in `src/App.tsx`
4. **Style with Tailwind** classes or custom CSS in `src/index.css`
5. **Test locally** with `npm run dev`
6. **Build and preview** with `npm run build && npm run preview`

## 📊 Performance Tips

- Use `.iso-float` sparingly (animations can impact performance on older devices)
- Lazy-load images when needed: `<img loading="lazy" />`
- Code-split large pages if needed (Vite handles this automatically)
- Monitor bundle size: `npm run build` shows stats

## 🤝 Contributing

1. Follow the page structure and naming conventions
2. Use consistent Tailwind classes for styling
3. Ensure components are responsive (mobile-first)
4. Test all routes locally before committing

## 📄 Next Steps / Roadmap

- [ ] Backend integration for contact form (serverless function)
- [ ] SEO metadata and Open Graph tags per page
- [ ] Blog CMS integration
- [ ] User authentication for admin panel
- [ ] Email notifications for form submissions
- [ ] Analytics integration (Google Analytics, Hotjar)
- [ ] Accessibility audit (WCAG 2.1 AA compliance)
- [ ] Performance optimization (image optimization, lazy loading)

## 📞 Support

For questions or issues, refer to:
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Material UI](https://mui.com)
- [React Router](https://reactrouter.com)
- [Lucide Icons](https://lucide.dev)

---

**Last Updated**: November 17, 2025
