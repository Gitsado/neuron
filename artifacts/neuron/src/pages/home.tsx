import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play, Mail, Share2, ArrowRight } from "lucide-react";
import { SiSpotify, SiTiktok, SiYoutube, SiInstagram, SiApplemusic } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import logoImg from "@assets/image_1781383605153.png";

export default function Home() {
  const { toast } = useToast();
  const contactRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 0.4, 0.1]);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const shareProfile = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link kopyalandı",
      description: "Profil linki uğurla kopyalandı.",
    });
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative selection:bg-primary/30">
      {/* Cinematic Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div 
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/15 via-black/90 to-black"
          style={{ y: yBg, opacity: opacityBg }}
        />
        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      </div>

      <main className="relative z-10 max-w-4xl mx-auto px-6 py-24 flex flex-col items-center justify-center min-h-[100dvh]">
        
        {/* Hero Section */}
        <motion.section 
          className="w-full flex flex-col items-center text-center mb-32"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={fadeUp} className="relative mb-8 group">
            <div className="absolute -inset-1 bg-primary/30 rounded-2xl blur-xl group-hover:bg-primary/50 transition-all duration-700 opacity-50 group-hover:opacity-100"></div>
            <img 
              src={logoImg} 
              alt="Neuron Logo" 
              className="w-40 h-40 object-cover rounded-2xl relative z-10 border border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-105"
            />
          </motion.div>

          <motion.div variants={fadeUp} className="mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 backdrop-blur-md">
              Rapper / Bəstəkar
            </span>
          </motion.div>

          <motion.h1 
            variants={fadeUp}
            className="text-6xl md:text-8xl font-black font-display tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 filter drop-shadow-sm"
          >
            NEURON
          </motion.h1>

          <motion.div variants={fadeUp} className="max-w-2xl mx-auto space-y-6 text-lg md:text-xl text-zinc-400 font-light leading-relaxed">
            <p>
              Salam mən neuron. Bu camiyada yeniyem fərqimi ortaya qoyacam. Şans versəniz sevinərəm.
            </p>
            <p>
              Mənə aşağıdakı linklərə keçid edərək və sosial media hesablarımdan məni izləyərək dəstək ola bilərsiniz.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-12 flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto">
            <Button 
              size="lg" 
              className="w-full sm:w-auto text-base h-14 px-8 rounded-full bg-primary hover:bg-primary/90 text-black font-bold group shadow-[0_0_30px_-5px_rgba(34,197,94,0.4)] hover:shadow-[0_0_40px_0px_rgba(34,197,94,0.6)] transition-all"
              onClick={() => window.open('https://open.spotify.com/artist/neuron', '_blank')}
              data-testid="button-listen"
            >
              <Play className="mr-2 h-5 w-5 fill-black" />
              Musiqi Dinlə
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="w-full sm:w-auto text-base h-14 px-8 rounded-full border-white/10 hover:bg-white/5 hover:text-white backdrop-blur-sm transition-all group"
              onClick={scrollToContact}
              data-testid="button-contact-scroll"
            >
              Əlaqə
              <ArrowRight className="ml-2 h-4 w-4 opacity-50 group-hover:translate-x-1 group-hover:opacity-100 transition-all" />
            </Button>
          </motion.div>
        </motion.section>

        {/* Social Links Section */}
        <motion.section 
          className="w-full max-w-xl mx-auto mb-32"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="flex justify-center flex-wrap gap-4 md:gap-6">
            {[
              { icon: SiSpotify, link: "https://open.spotify.com/artist/neuron", color: "hover:bg-[#1DB954] hover:shadow-[#1DB954]/50", name: "Spotify" },
              { icon: SiTiktok, link: "https://tiktok.com/@neuron", color: "hover:bg-[#00f2fe] hover:shadow-[#00f2fe]/50", name: "TikTok" },
              { icon: SiYoutube, link: "https://youtube.com/@neuron", color: "hover:bg-[#FF0000] hover:shadow-[#FF0000]/50", name: "YouTube" },
              { icon: SiInstagram, link: "https://instagram.com/neuron", color: "hover:bg-[#E1306C] hover:shadow-[#E1306C]/50", name: "Instagram" },
              { icon: SiApplemusic, link: "https://music.apple.com", color: "hover:bg-[#FA243C] hover:shadow-[#FA243C]/50", name: "Apple Music" }
            ].map((social, i) => (
              <motion.a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                className={`flex items-center justify-center w-16 h-16 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color}`}
                data-testid={`link-${social.name.toLowerCase()}`}
                title={social.name}
              >
                <social.icon className="w-7 h-7" />
              </motion.a>
            ))}
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section 
          ref={contactRef}
          className="w-full max-w-xl mx-auto text-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Əlaqə və <span className="text-primary filter drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]">Əməkdaşlıq</span>
            </h2>
          </motion.div>
          
          <motion.div variants={fadeUp} className="flex flex-col gap-4">
            <Button 
              size="lg"
              variant="outline"
              className="w-full h-16 text-lg justify-start px-6 bg-white/5 border-white/10 hover:bg-white/10 hover:text-white transition-all duration-300 rounded-xl group"
              onClick={() => window.open('mailto:sirxanovnurulla@gmail.com', '_blank')}
              data-testid="button-email"
            >
              <Mail className="mr-4 h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
              sirxanovnurulla@gmail.com
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="w-full h-16 text-lg justify-start px-6 bg-white/5 border-white/10 hover:bg-white/10 hover:text-white transition-all duration-300 rounded-xl group"
              onClick={shareProfile}
              data-testid="button-share"
            >
              <Share2 className="mr-4 h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
              Profili Paylaş
            </Button>
          </motion.div>
        </motion.section>
        
      </main>
    </div>
  );
}
