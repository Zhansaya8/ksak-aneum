import { Link, useParams } from 'react-router-dom';
import { getSongById, songs, toLines } from '../data/songs';
import { useLiveSong } from '../useLiveSong';
import LiveBadge from '../components/LiveBadge';
import NotFound from './NotFound';

export default function SongPage() {
  const { id } = useParams();
  const song = getSongById(id);
  const { liveId } = useLiveSong();

  if (!song) return <NotFound />;

  const isLive = song.id === liveId;
  const index = songs.findIndex((s) => s.id === song.id);
  const liveSong = !isLive && songs.find((s) => s.id === liveId);

  return (
    <article>
      {/* Sticky top bar: Back + LIVE */}
      <div className="sticky top-0 z-10 -mx-4 px-4 py-3 mb-4 bg-cream/90 backdrop-blur border-b border-sand flex items-center justify-between gap-2">
        <Link to="/" className="btn bg-ink text-cream px-4 py-2 text-sm">
          <span aria-hidden>←</span> Back to Setlist
        </Link>
        {isLive && <LiveBadge />}
      </div>

      {/* If another song is live, offer a jump */}
      {liveSong && (
        <Link
          to={`/song/${liveSong.id}`}
          className="flex items-center justify-between gap-3 mb-4 rounded-xl bg-tomato/10 border border-tomato/30 px-3 py-2 text-sm"
        >
          <span className="truncate">
            <span className="font-semibold text-tomato">Now playing:</span> {liveSong.title}
          </span>
          <span className="text-tomato font-semibold shrink-0">Go →</span>
        </Link>
      )}

      <header className="mb-6">
        <p className="font-display text-teal tracking-[0.2em] text-sm">SONG {String(index + 1).padStart(2, '0')}</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight text-tomato">{song.title}</h2>
        <p className="text-lg italic text-ink/70">{song.titleTranslated}</p>
        {song.artist && <p className="text-sm text-ink/50 mt-1">{song.artist}</p>}
        {song.performers && <p className="text-sm text-lagoon font-semibold mt-1">{song.performers}</p>}
        {isLive && (
          <div className="mt-3">
            <LiveBadge size="lg" />
          </div>
        )}
      </header>

      {/* Interleaved lyrics: original stanza, then translation right underneath */}
      <div className="space-y-4">
        {song.sections.map((sec, i) => (
          <section key={i} className="paper p-4 sm:p-5">
            <h3 className="inline-block mb-3 px-2.5 py-0.5 rounded-full bg-teal/15 text-lagoon text-xs font-bold uppercase tracking-[0.15em]">
              {sec.label}
            </h3>
            <div className="text-base sm:text-lg leading-relaxed font-semibold text-ink">
              {toLines(sec.original).map((line, j) => (
                <p key={j} className={line ? '' : 'h-3'}>{line}</p>
              ))}
            </div>
            {sec.translation && (
              <div className="mt-3 pt-3 border-t border-dashed border-sand text-[15px] leading-relaxed italic text-sage">
                {toLines(sec.translation).map((line, j) => (
                  <p key={j} className={line ? '' : 'h-3'}>{line}</p>
                ))}
              </div>
            )}
          </section>
        ))}
      </div>

      {/* Prev / next */}
      <nav className="mt-8 grid grid-cols-2 gap-3 text-sm">
        {index > 0 ? (
          <Link to={`/song/${songs[index - 1].id}`} className="paper p-3">
            <span className="block text-ink/50 text-xs">← Previous</span>
            <span className="font-semibold">{songs[index - 1].title}</span>
          </Link>
        ) : <span />}
        {index < songs.length - 1 ? (
          <Link to={`/song/${songs[index + 1].id}`} className="paper p-3 text-right">
            <span className="block text-ink/50 text-xs">Next →</span>
            <span className="font-semibold">{songs[index + 1].title}</span>
          </Link>
        ) : <span />}
      </nav>
    </article>
  );
}
