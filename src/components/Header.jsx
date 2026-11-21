import { Link } from 'react-router-dom';

/* Global header: ticket leaf-art banner + KSAK logo + "ÄN음" title.
   The title mirrors the ticket: chunky red "ÄN" with a Hangul "음". */
export default function Header() {
  return (
    <header className="relative overflow-hidden mb-6">
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/ticket-art.jpg')" }}
      />
      {/* fade so the title stays readable */}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-cream/30 via-cream/55 to-cream" />

      <div className="relative max-w-2xl mx-auto px-4 pt-5 pb-6 flex items-center gap-4">
        <Link to="/" className="shrink-0" aria-label="KSAK home">
          <img
            src="/ksak-logo.jpg"
            alt="KSAK — Kazakhstan Students Association in Korea"
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full shadow-lg ring-4 ring-cream/80 object-cover"
          />
        </Link>

        <Link to="/" className="flex flex-col leading-none select-none" aria-label="ÄN음 — setlist">
          <span className="font-display text-lagoon text-sm tracking-[0.25em] bg-cream/80 self-start px-2 py-0.5 rounded-full">KSAK PRESENTS</span>
          <h1 className="flex items-baseline text-tomato text-6xl sm:text-7xl leading-none drop-shadow-[2px_2px_0_rgba(247,239,220,0.9)]">
            {/* ÄN and 음 sit on one line at the same height: 음 (Black Han Sans) is drawn
                bigger than Latin capitals, so it is scaled to 0.8em and nudged up a little
                so its top and bottom match the "N". */}
            <span className="font-display tracking-tight">ÄN</span>
            <span className="font-hangul -ml-0.5 relative" style={{ fontSize: '0.8em', top: '-0.0625em' }}>음</span>
          </h1>
          <span className="mt-1 text-[11px] sm:text-xs font-semibold text-ink/70 tracking-wide">
            än — song · 음 — sound · änim — my song
          </span>
        </Link>
      </div>
    </header>
  );
}
