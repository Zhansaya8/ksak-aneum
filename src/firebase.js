/* ───────────────────────────────────────────────────────────────
 *  Firebase Realtime Database connection.
 *  Only ONE value is stored:  /live/currentSongId  (a song id, or empty).
 *
 *  Keys come from environment variables (see .env.example / README).
 *  If the keys are missing, the app runs in "DEMO MODE": the live state is
 *  kept in this browser only (syncs between tabs on the same device), so you
 *  can try everything locally before Firebase is set up.
 * ─────────────────────────────────────────────────────────────── */
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, update, serverTimestamp } from 'firebase/database';

const config = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

export const isDemoMode = !config.apiKey || !config.databaseURL;

let db = null;
if (!isDemoMode) {
  db = getDatabase(initializeApp(config));
} else {
  console.warn('[An음] Firebase keys missing → DEMO MODE (live state saved in this browser only).');
}

const DEMO_KEY = 'anum-live-song';
const demoListeners = new Set();

/** Subscribe to the live song id. Calls cb(idOrNull, connected) on every change. Returns unsubscribe fn. */
export function subscribeLiveSong(cb) {
  if (isDemoMode) {
    const read = () => cb(localStorage.getItem(DEMO_KEY) || null, true);
    read();
    const onStorage = (e) => e.key === DEMO_KEY && read();
    window.addEventListener('storage', onStorage);
    demoListeners.add(read);
    return () => {
      window.removeEventListener('storage', onStorage);
      demoListeners.delete(read);
    };
  }

  const unsubLive = onValue(
    ref(db, 'live/currentSongId'),
    (snap) => cb(snap.val() || null, true),
    (err) => {
      console.error('[An음] Firebase read failed:', err);
      cb(null, false);
    }
  );
  return unsubLive;
}

/** Subscribe to the connection state (true/false) — shown on the admin page. */
export function subscribeConnection(cb) {
  if (isDemoMode) {
    cb(true);
    return () => {};
  }
  return onValue(ref(db, '.info/connected'), (snap) => cb(snap.val() === true));
}

/** Set the live song. Pass null to clear ("No Song Playing"). */
export async function setLiveSong(id) {
  if (isDemoMode) {
    if (id) localStorage.setItem(DEMO_KEY, id);
    else localStorage.removeItem(DEMO_KEY);
    demoListeners.forEach((fn) => fn());
    return;
  }
  // Multi-path update so each field is checked against its own security rule.
  await update(ref(db), {
    'live/currentSongId': id || null,
    'live/updatedAt': serverTimestamp(),
  });
}
