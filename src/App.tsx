import { useState } from "react";

const MOODS = [
  { id: "potente", label: "Potente", icon: "⚡", desc: "Guitarrazos que rompen paredes" },
  { id: "poetico", label: "Poético", icon: "🌙", desc: "Letras que duelen en el alma" },
  { id: "acustico", label: "Acústico", icon: "🎸", desc: "Intimidad y verdad cruda" },
  { id: "furioso", label: "Furioso", icon: "🔥", desc: "Rabia destilada en tres acordes" },
  { id: "melancolico", label: "Melancólico", icon: "🌧", desc: "Nostalgia del tiempo que fue" },
  { id: "festivo", label: "Festivo", icon: "🎉", desc: "Para cantar a los gritos" },
];

const ALBUMS = [
  {
    id: 1,
    band: "Soda Stereo",
    title: "Signos",
    year: 1986,
    img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&h=300&fit=crop&auto=format",
    color: "#2a1a3e",
  },
  {
    id: 2,
    band: "Charly García",
    title: "Clics Modernos",
    year: 1983,
    img: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=300&h=300&fit=crop&auto=format",
    color: "#1a2e2a",
  },
  {
    id: 3,
    band: "Los Redondos",
    title: "Oktubre",
    year: 1986,
    img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&auto=format",
    color: "#2e1a1a",
  },
];

const VENUES = [
  { id: 1, name: "Luna Park", x: 62, y: 48, desc: "El estadio sagrado del rock nacional. Desde los 80 hasta hoy." },
  { id: 2, name: "Cemento", x: 55, y: 53, desc: "El bunker underground donde nació el rock pesado porteño." },
  { id: 3, name: "Estadio Vélez", x: 42, y: 51, desc: "Palco de las grandes despedidas." },
  { id: 4, name: "El Teatro", x: 48, y: 47, desc: "Intimidad y acústica perfecta en Flores." },
  { id: 5, name: "Obras", x: 50, y: 44, desc: "El estadio del rock desde 1975 hasta su cierre." },
];

const BANDS = [
  {
    id: 1,
    name: "Patricio Rey y sus Redonditos de Ricota",
    alias: "Los Redondos",
    genre: "Rock chabón / Psicodélico",
    years: "1976 – 2001",
    members: "El Indio Solari · Skay Beilinson · Semilla Bucciarelli",
    bio: "El fenómeno de masas más importante del rock argentino. Pasaron del underground platense a llenar estadios sin ceder ni un centímetro de identidad. Sus canciones son liturgia popular.",
    img: "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?w=400&h=300&fit=crop&auto=format",
    color: "#c8102e",
  },
  {
    id: 2,
    name: "Soda Stereo",
    alias: "Soda",
    genre: "Rock alternativo / New Wave",
    years: "1982 – 1997 · 2007",
    members: "Gustavo Cerati · Zeta Bosio · Charly Alberti",
    bio: "La banda que exportó el rock argentino al continente. Gustavo Cerati fue el arquitecto sonoro más influyente de su generación. Gracias totales.",
    img: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=400&h=300&fit=crop&auto=format",
    color: "#1a6ec8",
  },
];

const SONGS = [
  { id: 1, title: "La Bestia Pop", band: "Los Redondos", duration: "4:32", mood: "potente" },
  { id: 2, title: "De Música Ligera", band: "Soda Stereo", duration: "3:58", mood: "poetico" },
  { id: 3, title: "Piano Bar", band: "Charly García", duration: "5:10", mood: "melancolico" },
  { id: 4, title: "Nada", band: "Catupecu Machu", duration: "4:01", mood: "furioso" },
  { id: 5, title: "El Extraño del Pelo Largo", band: "La Joven Guardia", duration: "3:22", mood: "festivo" },
];

const ANECDOTES = [
  { id: 1, user: "roque_baires", text: "Vi a Los Redondos en el estadio Huracán en el 99. Éramos 60.000 y cuando sonó La Bestia Pop el cielo se partió.", time: "hace 2 horas" },
  { id: 2, user: "pato_chabón", text: "Mi viejo me dejó el cassette de Oktubre en el auto. Tenía 8 años y no entendí nada. A los 20, lo entendí todo.", time: "hace 5 horas" },
  { id: 3, user: "vero_pogo", text: "En Cemento el pogo era tan denso que perdí una zapatilla. Volví descalza y feliz.", time: "ayer" },
  { id: 4, user: "nahuel_acustico", text: "Gracias totales. Estuve en el último Luna Park de Soda. Lloré sin vergüenza.", time: "hace 2 días" },
  { id: 5, user: "juli_rock", text: "Charly en el 83, Estadio Obras. Empezó a llover y nadie se fue. Nadie.", time: "hace 3 días" },
  { id: 6, user: "marcos_distorsion", text: "El primer riff de Nada me cambió la vida a los 15. Compré una guitarra al otro día.", time: "hace 4 días" },
];

const TICKER = ["La Bestia Pop", "De Música Ligera", "Piano Bar", "Nada", "El Extraño", "Hombre al Agua", "Persiana Americana", "El Visitante", "Filosofía Barata", "Cuando Pase el Temblor"];

export default function App() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [selectedVenue, setSelectedVenue] = useState<number | null>(null);
  const [currentSong, setCurrentSong] = useState(SONGS[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeAnalysis, setActiveAnalysis] = useState<"historia" | "metaforas">("historia");

  return (
    <div className="min-h-full bg-background text-foreground overflow-x-hidden">

      {/* TICKER */}
      <div className="bg-primary py-1.5 overflow-hidden relative">
        <div className="flex whitespace-nowrap marquee-track">
          {[...TICKER, ...TICKER].map((t, i) => (
            <span key={i} className="font-mono text-xs text-primary-foreground mx-6 opacity-80">
              ◆ {t}
            </span>
          ))}
        </div>
      </div>

      {/* NAV */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Guitar pick logo */}
            <div className="relative w-9 h-9 bg-primary pick-shape flex items-center justify-center">
              <span className="text-white font-display font-black text-xs italic">RA</span>
            </div>
            <div>
              <span className="font-display text-xl font-black text-foreground tracking-tight">Rock</span>
              <span className="font-display text-xl font-black text-primary tracking-tight">Arg</span>
              <span className="font-mono text-[10px] text-muted-foreground ml-1.5 align-middle">.ar</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#explorador" className="text-secondary-foreground">Explorador</a>
            <a href="#analisis" className="text-secondary-foreground">Análisis</a>
            <a href="#tapas" className="text-secondary-foreground">Arte de Tapa</a>
            <a href="#mapa" className="text-secondary-foreground">Escenarios</a>
            <a href="#bandas" className="text-secondary-foreground">Bandas</a>
            <a href="#comunidad" className="text-secondary-foreground">Comunidad</a>
          </div>
          <button className="bg-primary text-primary-foreground text-sm font-medium px-4 py-2 rounded-sm hover:bg-red-700 transition-colors">
            Entrar
          </button>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative min-h-[88vh] flex flex-col items-center justify-center px-6 noise-overlay overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1600&h=900&fit=crop&auto=format')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-block mb-6">
            <span className="font-mono text-xs text-primary border border-primary/30 px-3 py-1 rounded-sm tracking-widest uppercase">
              Rock Nacional desde 1966
            </span>
          </div>
          <h1 className="font-display text-6xl md:text-8xl font-black leading-none tracking-tight mb-4">
            El alma del<br />
            <em className="text-primary not-italic">rock argentino</em>
          </h1>

          {/* Poetic phrase box */}
          <div className="relative mx-auto max-w-2xl mb-10 border border-border bg-card/80 backdrop-blur p-6 rounded-sm">
            <span className="absolute -top-3 left-6 font-mono text-[10px] text-primary bg-background px-2 uppercase tracking-widest">Frase del día</span>
            <blockquote className="font-display text-xl md:text-2xl italic text-foreground/90 leading-relaxed">
              "Hay hombres que luchan un día y son buenos. Hay otros que luchan un año y son mejores. Pero hay los que luchan toda la vida: esos son los imprescindibles."
            </blockquote>
            <cite className="block mt-3 font-mono text-xs text-muted-foreground">— Bertolt Brecht, citado por el Indio Solari</cite>
          </div>

          {/* Search */}
          <div className="relative max-w-lg mx-auto">
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Buscá una canción, banda o historia..."
              className="w-full bg-card border border-border rounded-sm px-5 py-3.5 pr-12 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors font-mono text-sm"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-primary hover:text-red-400 transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
              </svg>
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-5 h-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* MOOD EXPLORER */}
      <section id="explorador" className="py-20 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="font-mono text-xs text-primary uppercase tracking-widest">01 — Explorador</span>
              <h2 className="font-display text-4xl md:text-5xl font-black mt-2">¿Cómo te sentís<br /><em className="text-primary">hoy?</em></h2>
            </div>
            <p className="hidden md:block text-secondary-foreground text-sm max-w-xs text-right">
              Elegí un estado de ánimo y encontrá las canciones que hablan por vos.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {MOODS.map(mood => (
              <button
                key={mood.id}
                onClick={() => setSelectedMood(selectedMood === mood.id ? null : mood.id)}
                className={`mood-card border border-border bg-card rounded-sm p-5 text-left ${selectedMood === mood.id ? "selected" : ""}`}
              >
                <span className="text-3xl block mb-3">{mood.icon}</span>
                <span className="font-display text-lg font-bold block mb-1">{mood.label}</span>
                <span className="text-xs text-muted-foreground leading-relaxed">{mood.desc}</span>
              </button>
            ))}
          </div>

          {selectedMood && (
            <div className="mt-8 border border-primary/20 bg-card rounded-sm p-6">
              <p className="font-mono text-xs text-primary mb-4 uppercase tracking-widest">
                Canciones para cuando estás {MOODS.find(m => m.id === selectedMood)?.label.toLowerCase()}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {SONGS.filter(s => s.mood === selectedMood || Math.random() > 0.4).slice(0, 3).map(song => (
                  <div
                    key={song.id}
                    onClick={() => { setCurrentSong(song); setIsPlaying(true); }}
                    className="flex items-center gap-3 p-3 bg-secondary rounded-sm cursor-pointer hover:bg-muted transition-colors group"
                  >
                    <div className="w-8 h-8 bg-primary/20 rounded-sm flex items-center justify-center group-hover:bg-primary transition-colors">
                      <svg className="w-4 h-4 text-primary group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium">{song.title}</p>
                      <p className="text-xs text-muted-foreground">{song.band}</p>
                    </div>
                    <span className="ml-auto font-mono text-xs text-muted-foreground">{song.duration}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* SONG ANALYSIS */}
      <section id="analisis" className="py-20 px-6 border-t border-border bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="font-mono text-xs text-primary uppercase tracking-widest">02 — Análisis</span>
            <h2 className="font-display text-4xl md:text-5xl font-black mt-2">Lo que las canciones<br /><em className="text-primary">no dicen en voz alta</em></h2>
          </div>

          <div className="flex gap-2 mb-8">
            <button
              onClick={() => setActiveAnalysis("historia")}
              className={`font-mono text-sm px-5 py-2.5 rounded-sm border transition-colors ${activeAnalysis === "historia" ? "bg-primary text-primary-foreground border-primary" : "border-border text-secondary-foreground hover:border-primary/50"}`}
            >
              Historia Oculta
            </button>
            <button
              onClick={() => setActiveAnalysis("metaforas")}
              className={`font-mono text-sm px-5 py-2.5 rounded-sm border transition-colors ${activeAnalysis === "metaforas" ? "bg-primary text-primary-foreground border-primary" : "border-border text-secondary-foreground hover:border-primary/50"}`}
            >
              Metáforas
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Historia Oculta */}
            <div className={`border border-border rounded-sm overflow-hidden transition-opacity ${activeAnalysis !== "historia" ? "opacity-40" : ""}`}>
              <div className="border-b border-border p-5 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse-red" />
                <span className="font-display text-xl font-bold">Historia Oculta</span>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <p className="font-mono text-xs text-primary mb-1 uppercase tracking-widest">Canción analizada</p>
                  <p className="font-display text-2xl font-bold">"La Bestia Pop"</p>
                  <p className="text-secondary-foreground text-sm">Patricio Rey y sus Redonditos de Ricota · 1989</p>
                </div>
                <div className="space-y-4 text-sm text-secondary-foreground leading-relaxed">
                  <p>
                    La canción fue compuesta durante los años más oscuros de la dictadura y la transición democrática. El Indio Solari construye la figura de "la bestia" como metáfora del poder popular que no puede ser domesticado por el sistema.
                  </p>
                  <p>
                    El estribillo <em className="text-foreground italic">"hay que sostener, hay que sostener"</em> es directamente una consigna de resistencia política disfrazada de hedonismo rockero.
                  </p>
                  <div className="mt-5 border-l-2 border-primary pl-4">
                    <p className="text-foreground italic font-display text-base">
                      "Panza llena, corazón contento, la bestia pop"
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">Crítica velada al consumismo y la alienación post-dictadura</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Metáforas */}
            <div className={`border border-border rounded-sm overflow-hidden transition-opacity ${activeAnalysis !== "metaforas" ? "opacity-40" : ""}`}>
              <div className="border-b border-border p-5 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="font-display text-xl font-bold">Metáforas</span>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <p className="font-mono text-xs text-accent mb-1 uppercase tracking-widest">Mapa metafórico</p>
                  <p className="font-display text-2xl font-bold">"De Música Ligera"</p>
                  <p className="text-secondary-foreground text-sm">Soda Stereo · 1990</p>
                </div>
                <div className="space-y-3">
                  {[
                    { metafora: "Música ligera", significado: "El amor pasajero, sin peso ni consecuencias" },
                    { metafora: "El silencio entre notas", significado: "Lo que no se dice en una relación que termina" },
                    { metafora: "Último concierto", significado: "El fin de algo que ambos saben que acabó" },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-3 bg-secondary rounded-sm">
                      <div className="w-6 h-6 bg-accent/20 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5">
                        <span className="font-mono text-[10px] text-accent font-bold">{i + 1}</span>
                      </div>
                      <div>
                        <p className="font-medium text-sm text-foreground">"{item.metafora}"</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{item.significado}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ALBUM ART GALLERY */}
      <section id="tapas" className="py-20 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="font-mono text-xs text-primary uppercase tracking-widest">03 — Arte de Tapa</span>
              <h2 className="font-display text-4xl md:text-5xl font-black mt-2">Las portadas que<br /><em className="text-primary">definieron una era</em></h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ALBUMS.map(album => (
              <div key={album.id} className="album-card group cursor-pointer">
                <div className="relative aspect-square rounded-sm overflow-hidden mb-4" style={{ backgroundColor: album.color }}>
                  <img
                    src={album.img}
                    alt={`${album.band} – ${album.title}`}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="font-display text-xl font-bold text-white leading-tight">{album.title}</p>
                    <p className="font-mono text-xs text-white/70 mt-0.5">{album.band} · {album.year}</p>
                  </div>
                  <div className="absolute top-3 right-3 w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                  </div>
                </div>
                <div className="px-1">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {album.id === 1 && "La tapa que cambió la imagen del rock latinoamericano. Diseño austero, impacto total."}
                    {album.id === 2 && "Pop electrónico y surrealismo visual. Una de las tapas más revolucionarias de los 80."}
                    {album.id === 3 && "El folklore visual del interior mezclado con la estética urbana. Folklore y punk en una imagen."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VENUES MAP */}
      <section id="mapa" className="py-20 px-6 border-t border-border bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="font-mono text-xs text-primary uppercase tracking-widest">04 — Escenarios Míticos</span>
            <h2 className="font-display text-4xl md:text-5xl font-black mt-2">Los lugares donde<br /><em className="text-primary">pasó todo</em></h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            {/* Map */}
            <div className="lg:col-span-2 relative rounded-sm overflow-hidden border border-border" style={{ minHeight: 380 }}>
              <img
                src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=500&fit=crop&auto=format"
                alt="Mapa Buenos Aires"
                className="w-full h-full object-cover opacity-25"
                style={{ minHeight: 380 }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-background/80 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">Buenos Aires, Argentina</span>
              </div>
              {VENUES.map(venue => (
                <button
                  key={venue.id}
                  onClick={() => setSelectedVenue(selectedVenue === venue.id ? null : venue.id)}
                  className="map-dot absolute"
                  style={{ left: `${venue.x}%`, top: `${venue.y}%` }}
                >
                  <div className={`w-3 h-3 rounded-full border-2 ${selectedVenue === venue.id ? "bg-primary border-primary" : "bg-accent border-accent"}`} />
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-[10px] text-foreground/80 whitespace-nowrap bg-background/70 px-1.5 py-0.5 rounded-sm">
                    {venue.name}
                  </span>
                </button>
              ))}
            </div>

            {/* Venue list */}
            <div className="space-y-2">
              {VENUES.map(venue => (
                <button
                  key={venue.id}
                  onClick={() => setSelectedVenue(selectedVenue === venue.id ? null : venue.id)}
                  className={`w-full text-left p-4 rounded-sm border transition-colors ${selectedVenue === venue.id ? "border-primary bg-primary/10" : "border-border bg-secondary hover:border-primary/30"}`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <div className={`w-2 h-2 rounded-full ${selectedVenue === venue.id ? "bg-primary" : "bg-accent"}`} />
                    <span className="font-display font-bold text-base">{venue.name}</span>
                  </div>
                  {selectedVenue === venue.id && (
                    <p className="text-xs text-secondary-foreground leading-relaxed mt-2 pl-4">{venue.desc}</p>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BANDS */}
      <section id="bandas" className="py-20 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="font-mono text-xs text-primary uppercase tracking-widest">05 — Historias de Bandas</span>
            <h2 className="font-display text-4xl md:text-5xl font-black mt-2">Los que lo<br /><em className="text-primary">inventaron todo</em></h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {BANDS.map(band => (
              <div key={band.id} className="band-card border border-border bg-card rounded-sm overflow-hidden group">
                <div className="relative h-48 overflow-hidden" style={{ backgroundColor: "#1a1a1a" }}>
                  <img
                    src={band.img}
                    alt={band.name}
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500 scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  <div className="absolute bottom-4 left-5">
                    <span className="font-mono text-xs uppercase tracking-widest px-2 py-1 rounded-sm text-white" style={{ backgroundColor: band.color + "aa" }}>
                      {band.genre}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="font-display text-xl font-black leading-tight">{band.name}</h3>
                      <p className="font-mono text-xs text-muted-foreground mt-1">{band.years}</p>
                    </div>
                  </div>
                  <p className="text-sm text-secondary-foreground leading-relaxed mb-4">{band.bio}</p>
                  <div className="border-t border-border pt-4">
                    <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-1">Integrantes</p>
                    <p className="text-sm text-foreground/80">{band.members}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLAYER */}
      <div className="sticky bottom-0 z-50 player-bar px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-4 md:gap-8">
          {/* Vinyl */}
          <div className={`w-10 h-10 rounded-full bg-muted border border-border flex-shrink-0 flex items-center justify-center overflow-hidden ${isPlaying ? "vinyl-spin" : ""}`}>
            <div className="w-3 h-3 rounded-full bg-background border border-border" />
          </div>

          {/* Track info */}
          <div className="min-w-0 flex-shrink-0" style={{ minWidth: 120 }}>
            <p className="font-medium text-sm truncate">{currentSong.title}</p>
            <p className="text-xs text-muted-foreground truncate">{currentSong.band}</p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <button className="text-muted-foreground hover:text-foreground transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M6 6h2v12H6zm3.5 6 8.5 6V6z" /></svg>
            </button>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-9 h-9 bg-primary rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
            >
              {isPlaying ? (
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>
              ) : (
                <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              )}
            </button>
            <button className="text-muted-foreground hover:text-foreground transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" /></svg>
            </button>
          </div>

          {/* Progress */}
          <div className="flex-1 hidden sm:flex items-center gap-3">
            <span className="font-mono text-[10px] text-muted-foreground">1:24</span>
            <div className="flex-1 h-1 bg-secondary rounded-full">
              <div className="h-1 bg-primary rounded-full" style={{ width: "35%" }} />
            </div>
            <span className="font-mono text-[10px] text-muted-foreground">{currentSong.duration}</span>
          </div>

          {/* Queue */}
          <div className="hidden lg:flex items-center gap-1 ml-2">
            {SONGS.slice(0, 4).map(song => (
              <button
                key={song.id}
                onClick={() => { setCurrentSong(song); setIsPlaying(true); }}
                className={`px-2 py-1 rounded-sm text-xs transition-colors ${currentSong.id === song.id ? "bg-primary/20 text-primary" : "text-muted-foreground hover:text-foreground"}`}
              >
                {song.title.split(" ").slice(0, 2).join(" ")}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* COMMUNITY WALL */}
      <section id="comunidad" className="py-20 px-6 border-t border-border bg-card" style={{ paddingBottom: "6rem" }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="font-mono text-xs text-primary uppercase tracking-widest">06 — Comunidad</span>
            <h2 className="font-display text-4xl md:text-5xl font-black mt-2">El muro de las<br /><em className="text-primary">anécdotas</em></h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ANECDOTES.map(anec => (
              <div key={anec.id} className="border border-border bg-secondary rounded-sm p-5 hover:border-primary/30 transition-colors">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-xs text-primary font-bold">{anec.user[0].toUpperCase()}</span>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">@{anec.user}</span>
                  <span className="ml-auto font-mono text-[10px] text-muted-foreground">{anec.time}</span>
                </div>
                <p className="text-sm text-secondary-foreground leading-relaxed">{anec.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 border border-border rounded-sm p-5">
            <p className="font-mono text-xs text-muted-foreground mb-3 uppercase tracking-widest">Contá tu historia</p>
            <textarea
              placeholder="¿Dónde estabas la primera vez que escuchaste esa canción que te cambió la vida?"
              className="w-full bg-background border border-border rounded-sm p-4 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
              rows={3}
            />
            <div className="flex justify-end mt-3">
              <button className="bg-primary text-primary-foreground text-sm font-medium px-5 py-2 rounded-sm hover:bg-red-700 transition-colors">
                Publicar anécdota
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-8 h-8 bg-primary pick-shape flex items-center justify-center">
                  <span className="text-white font-display font-black text-[10px] italic">RA</span>
                </div>
                <span className="font-display text-lg font-black">RockArg<span className="text-primary">.ar</span></span>
              </div>
              <p className="text-sm text-secondary-foreground leading-relaxed max-w-xs">
                La enciclopedia viva del rock nacional argentino. Historia, análisis, comunidad.
              </p>
            </div>
            <div>
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-4">Explorar</p>
              <ul className="space-y-2 text-sm text-secondary-foreground">
                {["Canciones", "Bandas", "Álbumes", "Escenarios", "Cronología"].map(l => (
                  <li key={l}><a href="#" className="hover:text-primary transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-4">Comunidad</p>
              <ul className="space-y-2 text-sm text-secondary-foreground">
                {["Muro de Anécdotas", "Contribuir", "Podcast", "Newsletter", "Contacto"].map(l => (
                  <li key={l}><a href="#" className="hover:text-primary transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="font-mono text-xs text-muted-foreground">© 2026 RockArg.ar — Hecho con distorsión y pasión</p>
            <div className="flex items-center gap-1">
              {["Potente", "Poético", "Furioso", "Acústico"].map(tag => (
                <span key={tag} className="font-mono text-[10px] text-muted-foreground border border-border px-2 py-0.5 rounded-sm">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
