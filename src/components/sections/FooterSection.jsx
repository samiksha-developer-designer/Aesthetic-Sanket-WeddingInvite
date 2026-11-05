import { ArrowUp, Heart } from "lucide-react";
import { motion } from "motion/react";

import SectionReveal from "../SectionReveal";
import { weddingData } from "../../data/weddingData";

export default function FooterSection() {
  const { groom, bride, wedding } = weddingData;

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <footer
      className="
        relative
        overflow-hidden
        bg-[#76578a]
        px-4
        py-20
        text-center
        sm:px-6
        sm:py-24
        lg:px-8
      "
    >
      {/* Floral background */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-cover
          bg-center
          bg-no-repeat
          opacity-10
        "
        style={{
          backgroundImage:
            "url('/images/floral-background.webp')",
        }}
      />

      {/* Soft overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[#76578a]/85" />

      {/* Decorative glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[350px]
          w-[350px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#9877b1]/40
          blur-3xl
          sm:h-[500px]
          sm:w-[500px]
        "
      />

      <div className="relative z-10 mx-auto max-w-3xl">
        <SectionReveal>
          {/* Heart icon */}
          <motion.div
            animate={{
              scale: [1, 1.12, 1],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              mx-auto
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-full
              bg-white/15
              text-[#f7dfb5]
              backdrop-blur-sm
            "
          >
            <Heart size={28} fill="currentColor" />
          </motion.div>

          {/* Thank you */}
          <p className="mt-8 text-xs font-semibold tracking-[0.3em] text-[#eadcf3]">
            WITH LOVE & GRATITUDE
          </p>

          <h2 className="mt-4 text-4xl italic text-white sm:text-5xl md:text-6xl">
            Thank You
          </h2>

          <div className="mx-auto mt-5 h-px w-20 bg-[#c9a86a]" />

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#f4eaf7]/90 sm:text-base">
            Thank you for being a part of our journey and for sharing
            in the joy of this beautiful new beginning. Your love,
            blessings, and presence mean more to us than words can say.
          </p>

          {/* Couple names */}
          <p className="mt-10 text-3xl italic text-white sm:text-4xl">
            {groom.name}

            <span className="mx-3 text-[#f7dfb5]">&</span>

            {bride.name}
          </p>

          <p className="mt-3 text-xs font-medium tracking-[0.25em] text-[#eadcf3] sm:text-sm">
            {wedding.displayDate}
          </p>

          {/* Decorative heart */}
          <motion.div
            animate={{
              y: [0, -5, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mt-8 text-2xl text-[#f7dfb5]"
          >
            ♡
          </motion.div>

          {/* Back to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="
              mt-10
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/30
              bg-white/10
              px-6
              py-3
              text-sm
              font-medium
              text-white
              backdrop-blur-sm
              transition-all
              hover:-translate-y-1
              hover:bg-white/20
              active:translate-y-0
              focus:outline-none
              focus:ring-2
              focus:ring-white
              focus:ring-offset-2
              focus:ring-offset-[#76578a]
            "
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
            Back to Top
          </button>

          {/* Small closing line */}
          <p className="mt-10 text-xs text-[#eadcf3]/80">
            Made with love for our beautiful beginning ♡
          </p>
        </SectionReveal>
      </div>
    </footer>
  );
}