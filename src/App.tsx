import { Routes, Route, useLocation } from 'react-router';
import { useEffect, useRef } from 'react';
import { Breadcrumbs } from '@/components/frame/Breadcrumbs';
import { EditorTabs } from '@/components/frame/EditorTabs';
import { StatusBar } from '@/components/frame/StatusBar';
import { TitleBar } from '@/components/frame/TitleBar';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Experience from '@/pages/Experience';
import Contact from '@/pages/Contact';
import { AnimationProvider } from '@/contexts/AnimationContext';
import { pageFor } from '@/content/site';
import { applyPageMeta } from '@/lib/pageMeta';

/**
 * The site as one VS Code window: title bar, open tabs (the navigation),
 * breadcrumbs, the editor pane (`main`) and the status bar.
 *
 * Phones scroll the whole page, with the tabs stuck to the top. From md up
 * the window fills the viewport and only the editor pane scrolls, so the tabs
 * and status bar stay put as they do in the editor.
 */
function App() {
  const { pathname } = useLocation();
  const page = pageFor(pathname);
  const editorRef = useRef<HTMLElement>(null);

  // Each route opens at the top, with its own title and head tags.
  useEffect(() => {
    window.scrollTo(0, 0);
    if (editorRef.current) editorRef.current.scrollTop = 0;
  }, [pathname]);
  useEffect(() => applyPageMeta(page), [page]);

  return (
    <div className="flex min-h-dvh flex-col bg-background md:h-dvh md:min-h-0 md:overflow-hidden">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-60 focus:rounded-sm focus:bg-secondary focus:px-3 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to main content
      </a>
      <AnimationProvider>
        <TitleBar page={page} />
        <EditorTabs />
        <Breadcrumbs page={page} />
        <main
          ref={editorRef}
          id="main-content"
          tabIndex={-1}
          className="flex-1 focus:outline-hidden md:[scrollbar-gutter:stable] md:overflow-y-auto"
        >
          <div className="mx-auto max-w-5xl px-4 pt-6 pb-12 sm:px-6 md:pt-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </main>
        <StatusBar />
      </AnimationProvider>
    </div>
  );
}

export default App;
