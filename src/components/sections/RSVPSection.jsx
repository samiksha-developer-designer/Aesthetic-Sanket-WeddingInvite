import { MessageCircle, Heart } from "lucide-react";
import { motion } from "motion/react";

import SectionReveal from "../SectionReveal";
import { weddingData } from "../../data/weddingData";

export default function RSVPSection() {
  const { groom, bride, rsvp } = weddingData;

  const whatsappUrl = `https://wa.me/${rsvp.phone}?text=${encodeURIComponent(
    rsvp.message
  )}`;

  return (
    <section
      id="rsvp"
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
      {/* Decorative background */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top_left,_rgba(246,223,229,0.7),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(234,220,243,0.7),_transparent_40%)]
        "
      />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <SectionReveal>
          {/* Decorative heart */}
          <motion.div
            animate={{
              scale: [1, 1.12, 1],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#eadcf3] text-[#76578a]"
          >
            <Heart size={28} fill="currentColor" />
          </motion.div>

          {/* Heading */}
          <p className="mt-8 text-xs font-semibold tracking-[0.3em] text-[#9877b1]">
            WILL YOU JOIN US?
          </p>

          <h2 className="mt-4 text-3xl italic text-[#76578a] sm:text-4xl md:text-5xl">
            Your Presence Means the World to Us
          </h2>

          <div className="mx-auto mt-5 h-px w-20 bg-[#c9a86a]" />

          {/* Invitation message */}
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#927b9c] sm:text-base">
            Our special day would not be complete without the people
            we love. We would be truly honored to have you celebrate
            this beautiful beginning with us.
          </p>

          {/* Couple names */}
          <p className="mt-7 text-xl italic text-[#76578a] sm:text-2xl">
            {groom.name} <span className="mx-2 text-[#c9a86a]">&</span>{" "}
            {bride.name}
          </p>

          {/* RSVP card */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="
              mx-auto
              mt-10
              max-w-xl
              rounded-[2rem]
              border
              border-[#e6d7ea]
              bg-white/75
              p-6
              shadow-[0_15px_50px_rgba(118,87,138,0.08)]
              backdrop-blur-sm
              sm:p-10
            "
          >
            <p className="text-base italic text-[#76578a] sm:text-lg">
              Kindly let us know if you will be able to join our
              celebration.
            </p>

            {/* WhatsApp RSVP button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-7
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-[#9877b1]
                px-7
                py-3.5
                text-sm
                font-medium
                text-white
                shadow-lg
                transition-transform
                hover:scale-105
                active:scale-95
                focus:outline-none
                focus:ring-2
                focus:ring-[#9877b1]
                focus:ring-offset-2
              "
            >
              <MessageCircle size={20} />
              RSVP on WhatsApp
            </a>

            <p className="mt-5 text-xs leading-5 text-[#9877b1]">
              Tap the button to send your confirmation directly on
              WhatsApp.
            </p>
          </motion.div>

          {/* Closing message */}
          <p className="mt-10 text-lg italic text-[#76578a] sm:text-xl">
            We can't wait to celebrate, laugh, and create beautiful
            memories with you ♡
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}