import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Setlist from './pages/Setlist';
import SongPage from './pages/SongPage';
import Admin from './pages/Admin';
import NotFound from './pages/NotFound';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="min-h-dvh flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1 w-full max-w-2xl mx-auto px-4 pb-16">
        <Routes>
          <Route path="/" element={<Setlist />} />
          <Route path="/song/:id" element={<SongPage />} />
          {/* Hidden route: never linked from the guest pages. */}
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer className="text-center text-xs text-ink/50 pb-6 font-body">
        KSAK · 2026.11.22 · @ksak_kazkor
      </footer>
    </div>
  );
}
