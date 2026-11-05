import { motion } from "motion/react";
import SectionReveal from "../SectionReveal";
import { weddingData } from "../../data/weddingData";

export default function CoupleSection() {
  const { groom, bride } = weddingData;

  return (
    <section
      id="couple"
      className="
        relative
        overflow-hidden
        bg-[#fdf8f2]
        px-4
        py-20
        sm:px-6
        sm:py-24
        lg:px-8
        lg:py-28
      "
    >
      {/* Soft decorative background */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top_left,_rgba(234,220,243,0.7),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(255,225,230,0.45),_transparent_35%)]
        "
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section heading */}
        <SectionReveal>
          <div className="mx-auto max-w-xl text-center">
            <p className="text-xs font-semibold tracking-[0.3em] text-[#9877b1]">
              THE HAPPY COUPLE
            </p>

            <h2 className="mt-4 text-3xl italic text-[#76578a] sm:text-4xl md:text-5xl">
              Two Hearts, One Beautiful Journey
            </h2>

            <div className="mx-auto mt-5 h-px w-20 bg-[#c9a86a]" />

            <p className="mt-5 text-sm leading-7 text-[#927b9c] sm:text-base">
              Two beautiful souls, brought together by love and
              ready to begin a lifetime of laughter, memories,
              and togetherness.
            </p>
          </div>
        </SectionReveal>

        {/* Couple cards */}
        <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-14">
          {/* Groom card */}
          <SectionReveal delay={0.1}>
            <motion.article
              whileHover={{
                y: -6,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[2rem]
                border
                border-[#e6d7ea]
                bg-white/70
                p-5
                shadow-[0_15px_50px_rgba(118,87,138,0.08)]
                backdrop-blur-sm
                sm:p-8
              "
            >
              {/* Decorative circle */}
              <div className="absolute -left-12 -top-12 h-32 w-32 rounded-full bg-[#eadcf3]/70 blur-2xl" />

              <div className="relative flex flex-col items-center text-center">
                {/* Image */}
                <div
                  className="
                    relative
                    w-full
                    max-w-[260px]
                    overflow-hidden
                    rounded-[1.5rem]
                    bg-[#f5edf7]
                    sm:max-w-[300px]
                  "
                >
                  <img
                    src="/images/groom.webp"
                    alt={groom.name}
                    width="600"
                    height="700"
                    loading="lazy"
                    decoding="async"
                    className="
                      h-auto
                      w-full
                      object-contain
                      transition-transform
                      duration-500
                      group-hover:scale-[1.03]
                    "
                  />
                </div>

                {/* Name */}
                <h3 className="mt-6 text-3xl italic text-[#76578a] sm:text-4xl">
                  {groom.name}
                </h3>

                <p className="mt-2 text-xs font-semibold tracking-[0.25em] text-[#9877b1]">
                  THE GROOM
                </p>

                <p className="mt-5 max-w-sm text-sm leading-7 text-[#927b9c]">
                  With a heart full of dreams and a smile that
                  makes every moment brighter, he is ready to
                  begin his forever.
                </p>
              </div>
            </motion.article>
          </SectionReveal>

          {/* Bride card */}
          <SectionReveal delay={0.2}>
            <motion.article
              whileHover={{
                y: -6,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[2rem]
                border
                border-[#ead9df]
                bg-white/70
                p-5
                shadow-[0_15px_50px_rgba(118,87,138,0.08)]
                backdrop-blur-sm
                sm:p-8
              "
            >
              {/* Decorative circle */}
              <div className="absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-[#f6dfe5]/60 blur-2xl" />

              <div className="relative flex flex-col items-center text-center">
                {/* Image */}
                <div
                  className="
                    relative
                    w-full
                    max-w-[260px]
                    overflow-hidden
                    rounded-[1.5rem]
                    bg-[#fff1f3]
                    sm:max-w-[300px]
                  "
                >
                  <img
                    src="/images/bride.webp"
                    alt={bride.name}
                    width="600"
                    height="700"
                    loading="lazy"
                    decoding="async"
                    className="
                      h-auto
                      w-full
                      object-contain
                      transition-transform
                      duration-500
                      group-hover:scale-[1.03]
                    "
                  />
                </div>

                {/* Name */}
                <h3 className="mt-6 text-3xl italic text-[#76578a] sm:text-4xl">
                  {bride.name}
                </h3>

                <p className="mt-2 text-xs font-semibold tracking-[0.25em] text-[#9877b1]">
                  THE BRIDE
                </p>

                <p className="mt-5 max-w-sm text-sm leading-7 text-[#927b9c]">
                  Full of warmth, grace, and joy, she brings a
                  little more magic to every moment and is ready
                  to write her beautiful forever story.
                </p>
              </div>
            </motion.article>
          </SectionReveal>
        </div>

        {/* Bottom message */}
        <SectionReveal delay={0.2}>
          <div className="mt-14 text-center">
            <p className="text-xl italic text-[#76578a] sm:text-2xl">
              And together, their forever begins...
            </p>

            <motion.span
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mt-4 inline-block text-2xl text-[#c9a86a]"
            >
              ♡
            </motion.span>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}