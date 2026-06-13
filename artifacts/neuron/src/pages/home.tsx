import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Mail, Share2, Check } from "lucide-react";
import { SiSpotify, SiTiktok, SiYoutube, SiInstagram, SiApplemusic } from "react-icons/si";
import logoImg from "@assets/image_1781383605153.png";

const SOCIALS = [
  { Icon: SiSpotify,    href: "https://open.spotify.com/artist/neuron", label: "Spotify",     glow: "#1DB954" },
  { Icon: SiTiktok,     href: "https://tiktok.com/@neuron",             label: "TikTok",      glow: "#69C9D0" },
  { Icon: SiYoutube,    href: "https://youtube.com/@neuron",            label: "YouTube",     glow: "#FF0000" },
  { Icon: SiInstagram,  href: "https://instagram.com/neuron",           label: "Instagram",   glow: "#E1306C" },
  { Icon: SiApplemusic, href: "https://music.apple.com",               label: "Apple Music", glow: "#FC3C44" },
];

export default function Home() {
  const contactRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const handleShare = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative min-h-screen bg-[#030a04] text-white overflow-x-hidden">

      {/* — animated radial bg that follows cursor — */}
      <div
        className="pointer-events-none fixed inset-0 z-0 transition-all duration-700"
        style={{
          background: `radial-gradient(ellipse 70% 60% at ${mousePos.x}% ${mousePos.y}%, rgba(34,197,94,0.07) 0%, transparent 70%)`,
        }}
      />
      {/* static deep green center glow */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(34,197,94,0.12),transparent)]" />

      {/* ─── HERO ─── */}
      <section className="relative z-10 flex flex-col items-center text-center px-6 pt-24 pb-16 max-w-3xl mx-auto">

        {/* logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-7"
        >
          <div className="absolute inset-0 rounded-2xl bg-green-500/20 blur-2xl scale-110" />
          <img
            src={logoImg}
            alt="Neuron"
            className="relative w-36 h-36 rounded-2xl object-cover border border-white/10 shadow-[0_0_40px_rgba(34,197,94,0.25)]"
          />
        </motion.div>

        {/* badge */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-5 inline-block rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1 text-xs font-semibold tracking-widest text-green-400 uppercase"
        >
          Rapper / Bəstəkar
        </motion.span>

        {/* name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-7 font-display text-[clamp(4rem,15vw,9rem)] font-black leading-none tracking-tighter"
          style={{
            background: "linear-gradient(170deg, #ffffff 30%, rgba(255,255,255,0.4) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Neuron
        </motion.h1>

        {/* bio */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="mb-10 max-w-xl space-y-3 text-[15px] leading-relaxed text-zinc-400"
        >
          <p>Salam mən neuron. Bu camiyada yeniyem fərqimi ortaya qoyacam. Şans versəniz sevinərəm.</p>
          <p>Mənə aşağıdakı linklərə keçid edərək və sosial media hesablarımdan məni izləyərək dəstək ola bilərsiniz.</p>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3"
        >
          <a
            href="https://open.spotify.com/artist/neuron"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="button-listen"
            className="inline-flex items-center gap-2 rounded-full bg-green-500 px-7 py-3.5 text-sm font-bold text-black transition-all duration-200 hover:bg-green-400 hover:shadow-[0_0_28px_rgba(34,197,94,0.55)] active:scale-95"
          >
            <Play className="h-4 w-4 fill-black" />
            Musiqi Dinlə
          </a>
          <button
            onClick={() => contactRef.current?.scrollIntoView({ behavior: "smooth" })}
            data-testid="button-contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/10 hover:border-white/30 active:scale-95"
          >
            Əlaqə
          </button>
        </motion.div>
      </section>

      {/* ─── SOCIAL ICONS ─── */}
      <section className="relative z-10 flex justify-center gap-4 px-6 py-8">
        {SOCIALS.map(({ Icon, href, label, glow }, i) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            data-testid={`link-${label.toLowerCase().replace(" ", "-")}`}
            title={label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 + i * 0.08, duration: 0.5 }}
            whileHover={{ scale: 1.15, boxShadow: `0 0 24px ${glow}99` }}
            whileTap={{ scale: 0.95 }}
            className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-400 transition-colors duration-200"
            style={{ "--glow": glow } as React.CSSProperties}
          >
            <Icon className="h-6 w-6" />
          </motion.a>
        ))}
      </section>

      {/* ─── DIVIDER ─── */}
      <div className="mx-auto my-16 max-w-xs h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* ─── CONTACT ─── */}
      <section
        ref={contactRef}
        className="relative z-10 flex flex-col items-center px-6 pb-28 text-center max-w-md mx-auto"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 font-display text-3xl font-bold md:text-4xl"
        >
          Əlaqə və{" "}
          <span className="text-green-400 [text-shadow:0_0_20px_rgba(74,222,128,0.6)]">
            Əməkdaşlıq
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="w-full space-y-3"
        >
          <a
            href="mailto:sirxanovnurulla@gmail.com"
            data-testid="button-email"
            className="flex w-full items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-medium text-zinc-300 transition-all duration-200 hover:border-green-500/30 hover:bg-white/10 hover:text-white"
          >
            <Mail className="h-5 w-5 shrink-0 text-green-400" />
            sirxanovnurulla@gmail.com
          </a>

          <button
            onClick={handleShare}
            data-testid="button-share"
            className="flex w-full items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-medium text-zinc-300 transition-all duration-200 hover:border-green-500/30 hover:bg-white/10 hover:text-white"
          >
            {copied ? (
              <Check className="h-5 w-5 shrink-0 text-green-400" />
            ) : (
              <Share2 className="h-5 w-5 shrink-0 text-green-400" />
            )}
            {copied ? "Link kopyalandı!" : "Profili Paylaş"}
          </button>
        </motion.div>
      </section>
    </div>
  );
}
