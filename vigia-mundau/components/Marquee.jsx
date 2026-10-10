const WORDS = ['Pesquisa', 'Tecnologia', 'Comunidade', 'Prevenção', 'Garanhuns'];

export default function Marquee() {
  const row = [...WORDS, ...WORDS];
  const items = (suffix) =>
    row.map((w, i) => (
      <span key={suffix + i} className="flex items-center gap-14">
        {w}<b className="text-brand-green font-semibold">•</b>
      </span>
    ));
  return (
    <div className="overflow-hidden border-y border-line py-5" aria-hidden="true">
      <div className="flex gap-14 w-max animate-marquee font-display font-light text-3xl text-mute">
        {items('a')}{items('b')}
      </div>
    </div>
  );
}
