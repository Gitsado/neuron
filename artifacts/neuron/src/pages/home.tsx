import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { SiSpotify, SiTiktok, SiYoutube, SiInstagram, SiApplemusic } from "react-icons/si";
import logoImg from "@assets/neuron_logo.jpg_1781384120294.jpeg";

const GOLD = "#E8B84B";
const GOLD_GLOW = "rgba(232,184,75,0.32)";

const SOCIALS = [
  {
    Icon: SiSpotify,
    href: "https://open.spotify.com/artist/36QWNUY9Ve6dwNq6z0xUVI?si=C0AfHquzQs6zk8bLmfRIMg",
    label: "Spotify",
    glow: "#1DB954",
  },
  {
    Icon: SiApplemusic,
    href: "https://music.apple.com/az/artist/neuron/6775906366",
    label: "Apple Music",
    glow: "#FC3C44",
  },
  {
    Icon: SiYoutube,
    href: "https://www.youtube.com/@neuron.808",
    label: "YouTube",
    glow: "#FF0000",
  },
  {
    Icon: SiInstagram,
    href: "https://www.instagram.com/neuron.808",
    label: "Instagram",
    glow: "#E1306C",
  },
  {
    Icon: SiTiktok,
    href: "https://tiktok.com/@neuron.808?_r=1&_t=ZS-93TaFpfza69",
    label: "TikTok",
    glow: "#69C9D0",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Home() {
  const contactRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 50, y: 40 });

  useEffect(() => {
    const move = (e: MouseEvent) =>
      setMouse({ x: (e.clientX / window.innerWidth) * 100, y: (e.clientY / window.innerHeight) * 100 });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden" style={{ background: "#080808", color: "#f5f0e8" }}>

      {/* cursor-following gold glow */}
      <div
        className="pointer-events-none fixed inset-0 z-0 transition-all duration-1000"
        style={{
          background: `radial-gradient(ellipse 55% 45% at ${mouse.x}% ${mouse.y}%, rgba(232,184,75,0.055) 0%, transparent 70%)`,
        }}
      />
      {/* top ambient glow */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{ background: "radial-gradient(ellipse 80% 40% at 50% -5%, rgba(232,184,75,0.08) 0%, transparent 60%)" }}
      />
      {/* edge vignette */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{ background: "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 45%, rgba(0,0,0,0.6) 100%)" }}
      />

      {/* ─── HERO ─── */}
      <section className="relative z-10 flex flex-col items-center text-center px-6 pt-20 pb-12 max-w-2xl mx-auto">

        {/* logo */}
        <motion.div
          custom={0} variants={fadeUp} initial="hidden" animate="show"
          className="relative mb-7"
        >
          <div
            className="absolute -inset-3 rounded-3xl blur-2xl opacity-50"
            style={{ background: `radial-gradient(circle, ${GOLD_GLOW}, transparent 70%)` }}
          />
          <img
            src={logoImg}
            alt="neuron logo"
            className="relative w-40 h-40 rounded-2xl object-cover"
            style={{ boxShadow: `0 0 0 1px rgba(232,184,75,0.18), 0 8px 40px rgba(0,0,0,0.75)` }}
          />
        </motion.div>

        {/* badge */}
        <motion.span
          custom={1} variants={fadeUp} initial="hidden" animate="show"
          className="mb-6 inline-block rounded-full px-4 py-1 text-[11px] font-semibold tracking-[0.2em] uppercase"
          style={{
            background: "rgba(232,184,75,0.07)",
            border: `1px solid rgba(232,184,75,0.25)`,
            color: GOLD,
          }}
        >
          Musician
        </motion.span>

        {/* name — lowercase, Syne, gold gradient */}
        <motion.h1
          custom={2} variants={fadeUp} initial="hidden" animate="show"
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(4rem, 16vw, 9rem)",
            fontWeight: 800,
            lineHeight: 1,
            letterSpacing: "-0.03em",
            marginBottom: "1.5rem",
            background: `linear-gradient(150deg, #fff9ee 0%, #f0d080 35%, ${GOLD} 65%, #a0681a 100%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          neuron
        </motion.h1>

        {/* bio */}
        <motion.div
          custom={3} variants={fadeUp} initial="hidden" animate="show"
          className="mb-10 space-y-3 max-w-md"
          style={{ color: "rgba(245,240,232,0.48)", fontSize: "15px", lineHeight: 1.75, fontFamily: "'Inter', sans-serif" }}
        >
          <p>Mənə aşağıdakı linklərdən keçid edərək izləyə və əlaqə saxlaya bilərsiniz.</p>
        </motion.div>
      </section>

      {/* ─── SOCIAL ICONS ─── */}
      <section className="relative z-10 flex justify-center gap-4 px-6 pb-6">
        {SOCIALS.map(({ Icon, href, label, glow }, i) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            data-testid={`link-${label.toLowerCase().replace(" ", "-")}`}
            title={label}
            custom={4 + i}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            whileHover={{ scale: 1.13 }}
            whileTap={{ scale: 0.92 }}
            className="flex h-[58px] w-[58px] items-center justify-center rounded-full transition-all duration-250"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "rgba(245,240,232,0.45)",
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.boxShadow = `0 0 20px ${glow}55`;
              el.style.borderColor = `${glow}50`;
              el.style.color = "#fff";
              el.style.background = `${glow}12`;
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.boxShadow = "none";
              el.style.borderColor = "rgba(255,255,255,0.08)";
              el.style.color = "rgba(245,240,232,0.45)";
              el.style.background = "rgba(255,255,255,0.04)";
            }}
          >
            <Icon size={22} />
          </motion.a>
        ))}
      </section>

      {/* ─── DIVIDER ─── */}
      <div className="relative z-10 mx-auto my-14 max-w-xs">
        <div className="h-px w-full" style={{ background: `linear-gradient(to right, transparent, ${GOLD_GLOW}, transparent)` }} />
      </div>

      {/* ─── CONTACT ─── */}
      <section
        ref={contactRef}
        className="relative z-10 flex flex-col items-center px-6 pb-28 text-center max-w-sm mx-auto"
      >
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "clamp(1.4rem,4vw,2rem)", marginBottom: "1.75rem", color: "#f5f0e8", whiteSpace: "nowrap" }}
        >
          Əlaqə və <span style={{ color: GOLD, textShadow: `0 0 22px ${GOLD_GLOW}` }}>Əməkdaşlıq</span>
        </motion.h2>

        <motion.a
          href="mailto:sirxanovnurulla@gmail.com"
          data-testid="button-email"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.65 }}
          className="flex w-full items-center gap-4 rounded-2xl px-5 py-4 text-sm font-medium transition-all duration-200"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.09)",
            color: "rgba(245,240,232,0.65)",
            fontFamily: "'Inter', sans-serif",
          }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLElement;
            el.style.borderColor = "rgba(232,184,75,0.3)";
            el.style.color = "#f5f0e8";
            el.style.background = "rgba(232,184,75,0.06)";
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLElement;
            el.style.borderColor = "rgba(255,255,255,0.09)";
            el.style.color = "rgba(245,240,232,0.65)";
            el.style.background = "rgba(255,255,255,0.04)";
          }}
        >
          <Mail className="h-[18px] w-[18px] shrink-0" style={{ color: GOLD }} />
          sirxanovnurulla@gmail.com
        </motion.a>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="relative z-10 pb-10 text-center">
        <div className="mx-auto mb-6 max-w-xs">
          <div className="h-px w-full" style={{ background: `linear-gradient(to right, transparent, rgba(232,184,75,0.15), transparent)` }} />
        </div>
        <p style={{ fontFamily: "'Syne', sans-serif", fontSize: "12px", letterSpacing: "0.12em", color: "rgba(245,240,232,0.2)" }}>
          © 2026 <span style={{ color: "rgba(232,184,75,0.4)" }}>neuron</span> — Bütün hüquqlar qorunur.
        </p>
      </footer>
    </div>
  );
}
