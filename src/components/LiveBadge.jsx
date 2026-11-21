/* Animated "LIVE / Now Playing" badge. size: 'sm' | 'lg' */
export default function LiveBadge({ size = 'sm' }) {
  const big = size === 'lg';
  return (
    <span
      className={`live-glow inline-flex items-center gap-2 rounded-full bg-tomato text-cream font-display uppercase
        ${big ? 'px-4 py-2 text-sm tracking-[0.2em]' : 'px-2.5 py-1 text-[11px] tracking-[0.15em]'}`}
      role="status"
      aria-label="Now playing live"
    >
      <span className="relative flex h-2 w-2">
        <span className="live-ping absolute inline-flex h-full w-full rounded-full bg-cream" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-cream" />
      </span>
      {big ? 'Now Playing · Live' : 'Live'}
      <span className="flex items-end gap-[2px] h-3" aria-hidden>
        <span className="eq-bar w-[3px] h-full bg-cream rounded-sm" />
        <span className="eq-bar w-[3px] h-full bg-cream rounded-sm" />
        <span className="eq-bar w-[3px] h-full bg-cream rounded-sm" />
      </span>
    </span>
  );
}
