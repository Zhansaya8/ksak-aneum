import { useEffect, useState } from 'react';
import { songs } from '../data/songs';
import { useLiveSong } from '../useLiveSong';
import { setLiveSong, subscribeConnection, isDemoMode } from '../firebase';
import LiveBadge from '../components/LiveBadge';

/* ───────────────────────────────────────────────────────────────
 *  ADMIN PIN
 *  Set VITE_ADMIN_PIN in your environment variables (Vercel/Netlify
 *  settings or .env.local). The fallback below is used only if the
 *  variable is missing — change it too if you like.
 *  Note: this is a "keep accidental visitors out" lock, not bank-level
 *  security (see README → "About security").
 * ─────────────────────────────────────────────────────────────── */
const ADMIN_PIN = import.meta.env.VITE_ADMIN_PIN || '748219';
const SESSION_KEY = 'anum-admin-ok';

export default function Admin() {
  const [unlocked, setUnlocked] = useState(() => sessionStorage.getItem(SESSION_KEY) === '1');

  useEffect(() => {
    document.title = 'Admin · An음';
    return () => { document.title = 'KSAK · An음'; };
  }, []);

  return unlocked ? <ControlPanel onLock={() => { sessionStorage.removeItem(SESSION_KEY); setUnlocked(false); }} />
                  : <PinGate onUnlock={() => { sessionStorage.setItem(SESSION_KEY, '1'); setUnlocked(true); }} />;
}

function PinGate({ onUnlock }) {
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [lockedUntil, setLockedUntil] = useState(0);

  const submit = (e) => {
    e.preventDefault();
    if (Date.now() < lockedUntil) return;
    if (pin.trim() === String(ADMIN_PIN)) return onUnlock();
    const n = attempts + 1;
    setAttempts(n);
    setPin('');
    if (n >= 5) {
      setLockedUntil(Date.now() + 30_000);
      setAttempts(0);
      setError('Too many tries — wait 30 seconds.');
    } else {
      setError('Wrong PIN. Try again.');
    }
  };

  return (
    <form onSubmit={submit} className="paper max-w-sm mx-auto p-6 text-center">
      <p className="font-display text-teal tracking-[0.2em] text-sm">MANAGER ACCESS</p>
      <h2 className="text-2xl font-extrabold mb-4">Enter PIN</h2>
      <input
        type="password"
        inputMode="numeric"
        autoComplete="off"
        autoFocus
        value={pin}
        onChange={(e) => { setPin(e.target.value); setError(''); }}
        className="w-full text-center text-2xl tracking-[0.5em] rounded-xl border-2 border-sand bg-white/70 py-3 focus:border-teal outline-none"
        aria-label="Admin PIN"
      />
      {error && <p className="text-tomato text-sm font-semibold mt-2">{error}</p>}
      <button type="submit" className="btn w-full mt-4 bg-tomato text-cream py-3 text-lg">Unlock</button>
    </form>
  );
}

function ControlPanel({ onLock }) {
  const { liveId, loading } = useLiveSong();
  const [connected, setConnected] = useState(true);
  const [pending, setPending] = useState(undefined); // id being saved (null = clearing)
  const [error, setError] = useState('');

  useEffect(() => subscribeConnection(setConnected), []);

  const choose = async (id) => {
    setPending(id);
    setError('');
    try {
      await setLiveSong(id);
    } catch (e) {
      console.error(e);
      setError('Could not save — check internet / Firebase rules. (' + (e.code || e.message) + ')');
    } finally {
      setPending(undefined);
    }
  };

  const liveSong = songs.find((s) => s.id === liveId);
  const nothingLive = !liveSong;

  return (
    <section>
      {/* Top bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <div>
          <p className="font-display text-teal tracking-[0.2em] text-sm">CONTROL PANEL</p>
          <p className="text-xs font-semibold flex items-center gap-1.5">
            <span className={`w-2 h-2 rounded-full ${connected ? 'bg-teal' : 'bg-tomato'}`} />
            {isDemoMode ? 'DEMO MODE (this browser only)' : connected ? 'Connected — guests update instantly' : 'Offline — reconnecting…'}
          </p>
        </div>
        <div className="flex gap-2">
          <a href="/" target="_blank" rel="noopener" className="btn bg-teal text-cream px-4 py-2 text-sm">
            View Guest Site ↗
          </a>
          <button onClick={onLock} className="btn border border-ink/20 px-3 py-2 text-sm">Lock</button>
        </div>
      </div>

      {isDemoMode && (
        <p className="mb-4 rounded-xl bg-sand/60 border border-sand p-3 text-sm">
          ⚠️ Firebase keys are not set, so changes are <b>not</b> shared with guests yet. Follow README step 2–4.
        </p>
      )}
      {error && <p className="mb-4 rounded-xl bg-tomato/10 border border-tomato/40 text-tomato p-3 text-sm font-semibold">{error}</p>}

      {/* Current status */}
      <div className={`rounded-2xl p-4 mb-4 text-cream shadow-lg ${nothingLive ? 'bg-sage' : 'bg-ink'}`}>
        <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-sand">Guests currently see</p>
        {loading ? (
          <p className="font-bold text-lg">Loading…</p>
        ) : nothingLive ? (
          <p className="font-bold text-lg">No song playing (pre-show / intermission)</p>
        ) : (
          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="font-bold text-lg truncate">{liveSong.title}</p>
              <p className="text-sm italic text-cream/70 truncate">{liveSong.titleTranslated}</p>
            </div>
            <LiveBadge />
          </div>
        )}
      </div>

      {/* Clear button */}
      <button
        onClick={() => choose(null)}
        disabled={pending !== undefined}
        className={`btn w-full py-4 mb-6 text-base border-2 rounded-2xl
          ${nothingLive ? 'bg-sage text-cream border-sage ring-4 ring-sage/30' : 'bg-white/70 border-ink/20 text-ink hover:border-sage'}`}
      >
        {nothingLive ? '✓ ' : '⏸ '}No Song Playing (Pre-show / Intermission)
        {pending === null && <Spinner />}
      </button>

      {/* Song list */}
      <ol className="space-y-3">
        {songs.map((song, i) => {
          const isLive = song.id === liveId;
          return (
            <li
              key={song.id}
              className={`paper p-3 flex items-center gap-3 ${isLive ? 'border-tomato ring-4 ring-tomato/40 bg-white' : ''}`}
            >
              <span className={`shrink-0 w-9 h-9 rounded-full grid place-items-center font-display
                ${isLive ? 'bg-tomato text-cream' : 'bg-teal/15 text-lagoon'}`}>
                {i + 1}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-bold leading-snug truncate">{song.title}</span>
                <span className="block text-xs italic text-ink/60 truncate">{song.titleTranslated}</span>
              </span>
              {isLive ? (
                <span className="shrink-0 flex flex-col items-end gap-1">
                  <LiveBadge />
                  <span className="text-[10px] font-bold text-tomato uppercase">On stage</span>
                </span>
              ) : (
                <button
                  onClick={() => choose(song.id)}
                  disabled={pending !== undefined}
                  className="btn shrink-0 bg-tomato text-cream px-4 py-2.5 text-sm disabled:opacity-60"
                >
                  {pending === song.id ? <Spinner /> : '▶'} Set as Live
                </button>
              )}
            </li>
          );
        })}
      </ol>
    </section>
  );
}

function Spinner() {
  return <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />;
}
