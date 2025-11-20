// src/App.tsx

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// MUI
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

import Layout from "@/components/Layout"; // new layout
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Product from "./pages/ProductHyCooker";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
// import Blog from "./pages/Blog";
// import Integrations from "./pages/Integrations";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Basic MUI theme - colors chosen to align with Tailwind accent/primary
const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      // matches the purple used in the project (approx)
      main: "#7c3aed",
    },
    secondary: {
      main: "#06b6d4",
    },
  },
  components: {
    // small default spacing/shape overrides to better fit Tailwind look
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="features" element={<Features />} />
              <Route path="pricing" element={<Pricing />} />
              {/* this is not yet attachecd to the page */}
              {/* <Route path="blog" element={<Blog />} /> */}
              {/* this page is also not attached but created as the intenal page */}
              {/* <Route path="integrations" element={<Integrations />} /> */}
              <Route path="contact" element={<Contact />} />
              <Route path="product" element={<Product />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
