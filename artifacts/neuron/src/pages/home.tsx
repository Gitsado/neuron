import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Mail, Share2, Check } from "lucide-react";
import { SiSpotify, SiTiktok, SiYoutube, SiInstagram, SiApplemusic } from "react-icons/si";
import logoImg from "@assets/neuron_logo.jpg_1781384120294.jpeg";

const GOLD = "#E8B84B";
const GOLD_GLOW = "rgba(232,184,75,0.35)";

const SOCIALS = [
  {
    Icon: SiSpotify,
    href: "https://open.spotify.com/artist/36QWNUY9Ve6dwNq6z0xUVI?si=C0AfHquzQs6zk8bLmfRIMg",
    label: "Spotify",
    glow: "#1DB954",
  },
  {
    Icon: SiTiktok,
    href: "https://tiktok.com/@neuron.808?_r=1&_t=ZS-93TaFpfza69",
    label: "TikTok",
    glow: "#69C9D0",
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
    Icon: SiApplemusic,
    href: "https://music.apple.com/az/artist/neuron/6775906366",
    label: "Apple Music",
    glow: "#FC3C44",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Home() {
  const contactRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);
  const [mouse, setMouse] = useState({ x: 50, y: 40 });

  useEffect(() => {
    const move = (e: MouseEvent) =>
      setMouse({ x: (e.clientX / window.innerWidth) * 100, y: (e.clientY / window.innerHeight) * 100 });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const handleShare = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden" style={{ background: "#080808", color: "#f5f0e8" }}>

      {/* ── cursor-following gold glow ── */}
      <div
        className="pointer-events-none fixed inset-0 z-0 transition-all duration-1000"
        style={{
          background: `radial-gradient(ellipse 55% 45% at ${mouse.x}% ${mouse.y}%, rgba(232,184,75,0.06) 0%, transparent 70%)`,
        }}
      />
      {/* top radial */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{ background: "radial-gradient(ellipse 80% 40% at 50% -5%, rgba(232,184,75,0.09) 0%, transparent 60%)" }}
      />
      {/* subtle vignette */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{ background: "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 50%, rgba(0,0,0,0.55) 100%)" }}
      />

      {/* ─────────── HERO ─────────── */}
      <section className="relative z-10 flex flex-col items-center text-center px-6 pt-20 pb-12 max-w-2xl mx-auto">

        {/* logo */}
        <motion.div
          custom={0} variants={fadeUp} initial="hidden" animate="show"
          className="relative mb-7"
        >
          <div
            className="absolute -inset-3 rounded-3xl blur-2xl opacity-60"
            style={{ background: `radial-gradient(circle, ${GOLD_GLOW}, transparent 70%)` }}
          />
          <img
            src={logoImg}
            alt="Neuron logo"
            className="relative w-40 h-40 rounded-2xl object-cover"
            style={{ boxShadow: `0 0 0 1px rgba(232,184,75,0.2), 0 8px 40px rgba(0,0,0,0.7)` }}
          />
        </motion.div>

        {/* badge */}
        <motion.span
          custom={1} variants={fadeUp} initial="hidden" animate="show"
          className="mb-6 inline-block rounded-full px-4 py-1 text-[11px] font-semibold tracking-[0.18em] uppercase"
          style={{
            background: "rgba(232,184,75,0.08)",
            border: "1px solid rgba(232,184,75,0.28)",
            color: GOLD,
            letterSpacing: "0.18em",
          }}
        >
          Rapper / Bəstəkar
        </motion.span>

        {/* name */}
        <motion.h1
          custom={2} variants={fadeUp} initial="hidden" animate="show"
          className="font-display mb-6 leading-none"
          style={{
            fontSize: "clamp(3.5rem, 14vw, 8rem)",
            fontWeight: 900,
            background: `linear-gradient(160deg, #fff 0%, #f5e8c0 40%, ${GOLD} 70%, #b8862a 100%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "none",
            letterSpacing: "-0.02em",
          }}
        >
          Neuron
        </motion.h1>

        {/* bio */}
        <motion.div
          custom={3} variants={fadeUp} initial="hidden" animate="show"
          className="mb-10 space-y-3 max-w-md"
          style={{ color: "rgba(245,240,232,0.55)", fontSize: "15px", lineHeight: 1.7 }}
        >
          <p>Salam mən neuron. Bu camiyada yeniyem fərqimi ortaya qoyacam. Şans versəniz sevinərəm.</p>
          <p>Mənə aşağıdakı linklərə keçid edərək və sosial media hesablarımdan məni izləyərək dəstək ola bilərsiniz.</p>
        </motion.div>

        {/* CTA */}
        <motion.div
          custom={4} variants={fadeUp} initial="hidden" animate="show"
          className="flex flex-wrap justify-center gap-3"
        >
          <a
            href="https://open.spotify.com/artist/36QWNUY9Ve6dwNq6z0xUVI?si=C0AfHquzQs6zk8bLmfRIMg"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="button-listen"
            className="inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-bold transition-all duration-200 active:scale-95"
            style={{
              background: `linear-gradient(135deg, ${GOLD} 0%, #c99626 100%)`,
              color: "#080808",
              boxShadow: `0 4px 24px ${GOLD_GLOW}`,
            }}
            onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 6px 32px rgba(232,184,75,0.55)`)}
            onMouseLeave={e => (e.currentTarget.style.boxShadow = `0 4px 24px ${GOLD_GLOW}`)}
          >
            <Play className="h-4 w-4 fill-current" />
            Musiqi Dinlə
          </a>

          <button
            onClick={() => contactRef.current?.scrollIntoView({ behavior: "smooth" })}
            data-testid="button-contact"
            className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-200 active:scale-95"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "rgba(245,240,232,0.85)",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "rgba(255,255,255,0.08)";
              e.currentTarget.style.borderColor = "rgba(232,184,75,0.3)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "rgba(255,255,255,0.04)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
            }}
          >
            Əlaqə
          </button>
        </motion.div>
      </section>

      {/* ─────────── SOCIAL ICONS ─────────── */}
      <section className="relative z-10 flex justify-center gap-4 px-6 py-4">
        {SOCIALS.map(({ Icon, href, label, glow }, i) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            data-testid={`link-${label.toLowerCase().replace(" ", "-")}`}
            title={label}
            custom={5 + i}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            whileHover={{ scale: 1.14 }}
            whileTap={{ scale: 0.93 }}
            className="flex h-[60px] w-[60px] items-center justify-center rounded-full transition-colors duration-300"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "rgba(245,240,232,0.5)",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.boxShadow = `0 0 22px ${glow}66`;
              (e.currentTarget as HTMLElement).style.borderColor = `${glow}55`;
              (e.currentTarget as HTMLElement).style.color = "#fff";
              (e.currentTarget as HTMLElement).style.background = `${glow}15`;
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
              (e.currentTarget as HTMLElement).style.color = "rgba(245,240,232,0.5)";
              (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
            }}
          >
            <Icon size={22} />
          </motion.a>
        ))}
      </section>

      {/* ─────────── DIVIDER ─────────── */}
      <div className="relative z-10 mx-auto my-16 max-w-xs">
        <div
          className="h-px w-full"
          style={{ background: `linear-gradient(to right, transparent, ${GOLD_GLOW}, transparent)` }}
        />
      </div>

      {/* ─────────── CONTACT ─────────── */}
      <section
        ref={contactRef}
        className="relative z-10 flex flex-col items-center px-6 pb-28 text-center max-w-sm mx-auto"
      >
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="font-display mb-8 text-3xl font-bold md:text-4xl"
          style={{ color: "#f5f0e8" }}
        >
          Əlaqə və{" "}
          <span style={{ color: GOLD, textShadow: `0 0 24px ${GOLD_GLOW}` }}>
            Əməkdaşlıq
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.65 }}
          className="w-full space-y-3"
        >
          <a
            href="mailto:sirxanovnurulla@gmail.com"
            data-testid="button-email"
            className="flex w-full items-center gap-4 rounded-2xl px-5 py-4 text-sm font-medium transition-all duration-200"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.09)",
              color: "rgba(245,240,232,0.7)",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(232,184,75,0.3)";
              (e.currentTarget as HTMLElement).style.color = "#f5f0e8";
              (e.currentTarget as HTMLElement).style.background = "rgba(232,184,75,0.06)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.09)";
              (e.currentTarget as HTMLElement).style.color = "rgba(245,240,232,0.7)";
              (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
            }}
          >
            <Mail className="h-[18px] w-[18px] shrink-0" style={{ color: GOLD }} />
            sirxanovnurulla@gmail.com
          </a>

          <button
            onClick={handleShare}
            data-testid="button-share"
            className="flex w-full items-center gap-4 rounded-2xl px-5 py-4 text-sm font-medium transition-all duration-200"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.09)",
              color: "rgba(245,240,232,0.7)",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(232,184,75,0.3)";
              (e.currentTarget as HTMLElement).style.color = "#f5f0e8";
              (e.currentTarget as HTMLElement).style.background = "rgba(232,184,75,0.06)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.09)";
              (e.currentTarget as HTMLElement).style.color = "rgba(245,240,232,0.7)";
              (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
            }}
          >
            {copied ? (
              <Check className="h-[18px] w-[18px] shrink-0" style={{ color: GOLD }} />
            ) : (
              <Share2 className="h-[18px] w-[18px] shrink-0" style={{ color: GOLD }} />
            )}
            {copied ? "Link kopyalandı!" : "Profili Paylaş"}
          </button>
        </motion.div>
      </section>
    </div>
  );
}
