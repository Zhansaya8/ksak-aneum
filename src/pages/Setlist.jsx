import { Link } from 'react-router-dom';
import { songs } from '../data/songs';
import { useLiveSong } from '../useLiveSong';
import LiveBadge from '../components/LiveBadge';

export default function Setlist() {
  const { liveId } = useLiveSong();
  const liveSong = songs.find((s) => s.id === liveId);

  return (
    <section>
      <div className="flex items-baseline justify-between mb-3">
        <h2 className="font-display text-2xl text-ink">Setlist</h2>
        <span className="text-xs font-semibold text-ink/50">Tap a song for lyrics</span>
      </div>

      {/* Quick jump to whatever is playing now */}
      {liveSong && (
        <Link
          to={`/song/${liveSong.id}`}
          className="block mb-4 rounded-2xl bg-ink text-cream p-4 shadow-lg active:scale-[0.99] transition"
        >
          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="text-[11px] uppercase tracking-[0.2em] text-sand font-semibold">On stage now</p>
              <p className="font-bold text-lg truncate">{liveSong.title}</p>
              <p className="text-sm text-cream/70 italic truncate">{liveSong.titleTranslated}</p>
            </div>
            <LiveBadge />
          </div>
          <p className="mt-2 text-xs text-teal font-semibold">Open lyrics →</p>
        </Link>
      )}

      <ol className="space-y-3">
        {songs.map((song, i) => {
          const isLive = song.id === liveId;
          return (
            <li key={song.id}>
              <Link
                to={`/song/${song.id}`}
                className={`paper flex items-center gap-4 p-4 transition active:scale-[0.99] hover:border-teal
                  ${isLive ? 'border-tomato ring-2 ring-tomato/60 bg-white/70' : ''}`}
              >
                <span
                  className={`shrink-0 w-10 h-10 rounded-full grid place-items-center font-display text-lg
                    ${isLive ? 'bg-tomato text-cream' : 'bg-teal/15 text-lagoon'}`}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-bold text-[17px] leading-snug">{song.title}</span>
                  <span className="block text-sm italic text-ink/60 leading-snug">{song.titleTranslated}</span>
                  {song.artist && <span className="block text-xs text-ink/45 mt-0.5 truncate">{song.artist}</span>}
                </span>
                {isLive ? <LiveBadge /> : <span className="text-ink/30 text-xl" aria-hidden>›</span>}
              </Link>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
