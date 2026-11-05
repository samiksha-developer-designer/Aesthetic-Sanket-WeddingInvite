import {
  CalendarDays,
  Clock3,
  MapPin,
  Navigation,
} from "lucide-react";
import { motion } from "motion/react";

import SectionReveal from "../SectionReveal";
import { weddingData } from "../../data/weddingData";

export default function VenueSection() {
  const { venue, haldiVenue } = weddingData;

  return (
    <section
      id="venue"
      className="
        relative
        overflow-hidden
        bg-[#fffaf5]
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
          bg-[radial-gradient(circle_at_top_left,_rgba(234,220,243,0.65),_transparent_38%),radial-gradient(circle_at_bottom_right,_rgba(246,223,229,0.5),_transparent_38%)]
        "
      />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Section heading */}
        <SectionReveal>
          <div className="mx-auto max-w-xl text-center">
            <p className="text-xs font-semibold tracking-[0.3em] text-[#9877b1]">
              CELEBRATION VENUES
            </p>

            <h2 className="mt-4 text-3xl italic text-[#76578a] sm:text-4xl md:text-5xl">
              Join Us at the Celebration
            </h2>

            <div className="mx-auto mt-5 h-px w-20 bg-[#c9a86a]" />

            <p className="mt-5 text-sm leading-7 text-[#927b9c] sm:text-base">
              We would be delighted to celebrate these beautiful
              moments with you.
            </p>
          </div>
        </SectionReveal>

        {/* ================= HALDI VENUE CARD ================= */}
        <SectionReveal delay={0.15}>
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="
              relative
              mx-auto
              mt-12
              max-w-3xl
              overflow-hidden
              rounded-[2rem]
              border
              border-[#e6d7ea]
              bg-white/75
              p-6
              shadow-[0_15px_50px_rgba(118,87,138,0.1)]
              backdrop-blur-sm
              sm:p-10
            "
          >
            {/* Decorative glow */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#eadcf3]/60 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-[#f6dfe5]/50 blur-3xl" />

            <div className="relative z-10 text-center">
              {/* Haldi label */}
              <p className="text-xs font-semibold tracking-[0.3em] text-[#9877b1]">
                HALDI CEREMONY
              </p>

              {/* Location icon */}
              <div
                className="
                  mx-auto
                  mt-5
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-full
                  bg-[#eadcf3]
                  text-[#76578a]
                  shadow-sm
                "
              >
                <MapPin size={28} />
              </div>

              {/* Haldi venue name */}
              <h3 className="mt-6 text-3xl italic text-[#76578a] sm:text-4xl">
                {haldiVenue.name}
              </h3>

              {/* Address */}
              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#927b9c] sm:text-base">
                {haldiVenue.address}
                <br />
                {haldiVenue.city}
              </p>

              {/* Date and Time */}
              <div
                className="
                  mx-auto
                  mt-8
                  grid
                  max-w-xl
                  gap-5
                  text-left
                  sm:grid-cols-2
                "
              >
                {/* Date */}
                <div className="flex items-center gap-3 rounded-xl bg-[#fdf8f2] p-4">
                  <CalendarDays
                    size={20}
                    className="shrink-0 text-[#9877b1]"
                  />

                  <div>
                    <p className="text-xs text-[#9877b1]">
                      DATE
                    </p>

                    <p className="mt-1 text-sm font-medium text-[#76578a]">
                      {haldiVenue.date}
                    </p>
                  </div>
                </div>

                {/* Time */}
                <div className="flex items-center gap-3 rounded-xl bg-[#fdf8f2] p-4">
                  <Clock3
                    size={20}
                    className="shrink-0 text-[#9877b1]"
                  />

                  <div>
                    <p className="text-xs text-[#9877b1]">
                      TIME
                    </p>

                    <p className="mt-1 text-sm font-medium text-[#76578a]">
                      {haldiVenue.time}
                    </p>
                  </div>
                </div>
              </div>

              {/* Get directions button */}
              <a
                href={haldiVenue.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-8
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-[#9877b1]
                  px-7
                  py-3
                  text-sm
                  font-medium
                  text-white
                  shadow-lg
                  transition-all
                  hover:scale-105
                  hover:bg-[#76578a]
                  active:scale-95
                "
              >
                <Navigation size={18} />
                Get Directions
              </a>
            </div>
          </motion.div>
        </SectionReveal>

        {/* ================= WEDDING VENUE CARD ================= */}
        <SectionReveal delay={0.2}>
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="
              relative
              mx-auto
              mt-8
              max-w-3xl
              overflow-hidden
              rounded-[2rem]
              border
              border-[#e6d7ea]
              bg-white/75
              p-6
              shadow-[0_15px_50px_rgba(118,87,138,0.1)]
              backdrop-blur-sm
              sm:p-10
            "
          >
            {/* Decorative glow */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#eadcf3]/60 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-[#f6dfe5]/50 blur-3xl" />

            <div className="relative z-10 text-center">
              {/* Wedding label */}
              <p className="text-xs font-semibold tracking-[0.3em] text-[#9877b1]">
                WEDDING CEREMONY
              </p>

              {/* Location icon */}
              <div
                className="
                  mx-auto
                  mt-5
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-full
                  bg-[#eadcf3]
                  text-[#76578a]
                  shadow-sm
                "
              >
                <MapPin size={28} />
              </div>

              {/* Wedding venue name */}
              <h3 className="mt-6 text-3xl italic text-[#76578a] sm:text-4xl">
                {venue.name}
              </h3>

              {/* Address */}
              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#927b9c] sm:text-base">
                {venue.address}
                <br />
                {venue.city}
              </p>

              {/* Date and Time */}
              <div
                className="
                  mx-auto
                  mt-8
                  grid
                  max-w-xl
                  gap-5
                  text-left
                  sm:grid-cols-2
                "
              >
                {/* Date */}
                <div className="flex items-center gap-3 rounded-xl bg-[#fdf8f2] p-4">
                  <CalendarDays
                    size={20}
                    className="shrink-0 text-[#9877b1]"
                  />

                  <div>
                    <p className="text-xs text-[#9877b1]">
                      DATE
                    </p>

                    <p className="mt-1 text-sm font-medium text-[#76578a]">
                      {venue.date}
                    </p>
                  </div>
                </div>

                {/* Time */}
                <div className="flex items-center gap-3 rounded-xl bg-[#fdf8f2] p-4">
                  <Clock3
                    size={20}
                    className="shrink-0 text-[#9877b1]"
                  />

                  <div>
                    <p className="text-xs text-[#9877b1]">
                      TIME
                    </p>

                    <p className="mt-1 text-sm font-medium text-[#76578a]">
                      {venue.time}
                    </p>
                  </div>
                </div>
              </div>

              {/* Get directions button */}
              <a
                href={venue.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-8
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-[#9877b1]
                  px-7
                  py-3
                  text-sm
                  font-medium
                  text-white
                  shadow-lg
                  transition-all
                  hover:scale-105
                  hover:bg-[#76578a]
                  active:scale-95
                "
              >
                <Navigation size={18} />
                Get Directions
              </a>
            </div>
          </motion.div>
        </SectionReveal>

        {/* Bottom message */}
        <SectionReveal delay={0.25}>
          <div className="mt-12 text-center">
            <p className="text-lg italic text-[#76578a] sm:text-xl">
              We can't wait to celebrate with you ♡
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}