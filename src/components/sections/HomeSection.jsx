import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

const TikTokIcon = ({ className = "w-8 h-8" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M9 0h1.5c.1 1.2.7 2.2 1.6 3.1.9.9 1.9 1.4 3 1.6V9c-1.8 0-3.4-.6-4.6-1.7V11c0 3-2.1 5-5.1 5C2.7 16 0 13.8 0 10.8 0 7.9 2.3 5.6 5.2 5.6c.4 0 .8.1 1.2.2v2.7c-.4-.1-.7-.2-1.1-.2-1.3 0-2.4 1.1-2.4 2.5 0 1.5 1.1 2.6 2.6 2.6 1.5 0 2.5-1 2.5-2.8V0z" />
  </svg>
);

const SocialButton = ({
  side = "left",
  href,
  title,
  handle,
  gradient,
  floatDir,
  children,
}) => {
  const sideClass = side === "left" ? "left-6" : "right-6";

  return (
    <div className={`hidden md:block absolute ${sideClass} top-1/2 -translate-y-1/2 z-20`}>
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={title}
        title={title}
        animate={{ y: [0, floatDir, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.08 }}
        className="group flex flex-col items-center gap-2"
      >
        <div
          className="w-20 h-20 md:w-24 md:h-24 rounded-3xl
                     bg-white/10 backdrop-blur-md border border-white/20
                     flex items-center justify-center shadow-xl
                     hover:bg-white/20 transition"
        >
          <span
            className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center shadow-lg"
            style={{ background: gradient }}
          >
            {children}
          </span>
        </div>

        <span
          className="px-3 py-1 rounded-full text-xs md:text-sm
                     bg-black/35 border border-white/15 backdrop-blur
                     text-white/80 group-hover:text-white transition"
        >
          {handle}
        </span>
      </motion.a>
    </div>
  );
};

const HomeSection = ({ translations }) => {
  // Jači glow za SVE tekstove u ovoj sekciji
  const allTextGlow = {
    textShadow:
      "0 2px 12px rgba(0,0,0,0.70), 0 0 10px rgba(255, 60, 60, 0.45), 0 0 18px rgba(255, 107, 107, 0.40), 0 0 28px rgba(233, 30, 99, 0.35), 0 0 40px rgba(156, 39, 176, 0.28), 0 0 56px rgba(33, 150, 243, 0.22)",
  };

  // Background: crno + blagi crveni tint u sredini (više kontrasta, ali i “reddish” vibe)
  const bgStyle = {
    backgroundImage: `
      linear-gradient(
        135deg,
        rgba(0, 0, 0, 0.82) 0%,
        rgba(25, 8, 10, 0.74) 45%,
        rgba(0, 0, 0, 0.78) 100%
      ),
      url('/bg.jpg')
    `,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <section className="w-full h-screen flex items-center justify-center relative overflow-hidden px-4" style={bgStyle}>
      {/* Extra dark overlay (još malo) */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Soft animated glow blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)",
          }}
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Desktop socials (side) */}
      <SocialButton
        side="left"
        href="https://www.instagram.com/bosnabaeckerei"
        title="Instagram"
        handle="@bosnabaeckerei"
        gradient="linear-gradient(135deg, #9C27B0, #E91E63)"
        floatDir={-8}
      >
        <Instagram className="w-7 h-7 md:w-8 md:h-8 text-white" />
      </SocialButton>

      <SocialButton
        side="right"
        href="https://www.tiktok.com/@bosnabaeckerei"
        title="TikTok"
        handle="@bosnabaeckerei"
        gradient="linear-gradient(135deg, #111827, #374151)"
        floatDir={8}
      >
        <TikTokIcon className="w-7 h-7 md:w-8 md:h-8 text-white" />
      </SocialButton>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center space-y-6 md:space-y-8" style={allTextGlow}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl text-white font-bold text-center"
        >
          {translations.home.slogan}
        </motion.h1>

        <motion.img
          src="/zeit.png"
          alt="Zeit"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="w-44 sm:w-52 md:w-72 drop-shadow-xl"
        />

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-white/95 max-w-2xl text-center text-lg md:text-xl"
        >
          {translations.home.description}
        </motion.p>

        {/* Mobile social icons (ispod opisa) */}
        <div className="md:hidden flex items-center justify-center gap-3">
          <motion.a
            href="https://www.instagram.com/bosnabaeckerei"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            className="w-11 h-11 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20
                       flex items-center justify-center shadow-lg"
          >
            <span
              className="w-8 h-8 rounded-xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #9C27B0, #E91E63)" }}
            >
              <Instagram className="w-4 h-4 text-white" />
            </span>
          </motion.a>

          <motion.a
            href="https://www.tiktok.com/@bosnabaeckerei"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            className="w-11 h-11 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20
                       flex items-center justify-center shadow-lg"
          >
            <span
              className="w-8 h-8 rounded-xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #111827, #374151)" }}
            >
              <TikTokIcon className="w-4 h-4 text-white" />
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
