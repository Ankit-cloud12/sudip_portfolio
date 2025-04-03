import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { Suspense, lazy } from "react";

// Lazy load pages for better performance
const CV = lazy(() => import("./pages/CV"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Blog = lazy(() => import("./pages/Blog"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Router>
        <div className="min-h-screen flex flex-col">
          <header className="border-b">
            <div className="container flex h-16 items-center justify-between">
              <div className="font-bold text-xl">Sudip Kumar</div>
              <nav className="flex gap-6">
                <a href="/" className="text-sm font-medium hover:underline">Home</a>
                <a href="/about" className="text-sm font-medium hover:underline">About</a>
                <a href="/projects" className="text-sm font-medium hover:underline">Projects</a>
                <a href="/blog" className="text-sm font-medium hover:underline">Blog</a>
                <a href="/contact" className="text-sm font-medium hover:underline">Contact</a>
              </nav>
            </div>
          </header>
          <main className="flex-1">
            <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
              <Routes>
                <Route path="/" element={<CV />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/404" element={<NotFound />} />
                <Route path="*" element={<Navigate to="/404" replace />} />
              </Routes>
            </Suspense>
          </main>
          <footer className="border-t py-6 md:py-0">
            <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-16">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Sudip Kumar. All rights reserved.
              </p>
              <div className="flex items-center gap-4">
                <a href="https://linkedin.com/in/sudipkumar" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  LinkedIn
                </a>
                <a href="mailto:sudipkumar211@gmail.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Email
                </a>
              </div>
            </div>
          </footer>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
