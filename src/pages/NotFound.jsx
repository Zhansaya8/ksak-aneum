import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="paper p-6 text-center">
      <p className="font-display text-4xl text-tomato mb-2">404</p>
      <p className="mb-4">This page doesn't exist.</p>
      <Link to="/" className="btn bg-ink text-cream px-5 py-2">← Back to Setlist</Link>
    </div>
  );
}
