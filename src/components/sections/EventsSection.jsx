import { CalendarDays, Clock3, MapPin } from "lucide-react";
import { motion } from "motion/react";

import SectionReveal from "../SectionReveal";
import { weddingData } from "../../data/weddingData";

export default function EventsSection() {
  const { events } = weddingData;

  return (
    <section
      id="events"
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
          bg-[radial-gradient(circle_at_top_right,_rgba(234,220,243,0.65),_transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(246,223,229,0.5),_transparent_35%)]
        "
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section heading */}
        <SectionReveal>
          <div className="mx-auto max-w-xl text-center">
            <p className="text-xs font-semibold tracking-[0.3em] text-[#9877b1]">
              SAVE THE DATES
            </p>

            <h2 className="mt-4 text-3xl italic text-[#76578a] sm:text-4xl md:text-5xl">
              Join Us for Every Celebration
            </h2>

            <div className="mx-auto mt-5 h-px w-20 bg-[#c9a86a]" />

            <p className="mt-5 text-sm leading-7 text-[#927b9c] sm:text-base">
              From joyful celebrations to the beginning of our forever,
              every moment will be more special with you by our side.
            </p>
          </div>
        </SectionReveal>

        {/* Event cards */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:gap-10">
          {events.map((event, index) => (
            <SectionReveal
              key={event.id}
              delay={index * 0.08}
            >
              <motion.article
                whileHover={{
                  y: -6,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="
                  group
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-[#e6d7ea]
                  bg-white/75
                  shadow-[0_15px_45px_rgba(118,87,138,0.08)]
                  backdrop-blur-sm
                "
              >
                {/* Event illustration */}
                <div
                  className="
                    relative
                    overflow-hidden
                    bg-[#f7f0f8]
                    px-5
                    pt-6
                    sm:px-8
                    sm:pt-8
                  "
                >
                  <img
                    src={event.image}
                    alt={`${event.title} celebration`}
                    width="800"
                    height="600"
                    loading="lazy"
                    decoding="async"
                    className="
                      mx-auto
                      h-[230px]
                      w-full
                      object-contain
                      transition-transform
                      duration-500
                      group-hover:scale-[1.04]
                      sm:h-[280px]
                    "
                  />

                  {/* Decorative glow */}
                  <div className="pointer-events-none absolute inset-x-[20%] bottom-0 h-16 rounded-full bg-[#eadcf3]/60 blur-2xl" />
                </div>

                {/* Event details */}
                <div className="px-6 py-7 sm:px-8 sm:py-8">
                  <p className="text-xs font-semibold tracking-[0.25em] text-[#9877b1]">
                    {event.subtitle.toUpperCase()}
                  </p>

                  <h3 className="mt-3 text-3xl italic text-[#76578a] sm:text-4xl">
                    {event.title}
                  </h3>

                  <div className="mt-5 h-px w-14 bg-[#c9a86a]" />

                  {/* Event information */}
                  <div className="mt-6 space-y-4 text-sm text-[#927b9c]">
                    {/* Date */}
                    <div className="flex items-center gap-3">
                      <CalendarDays
                        size={18}
                        className="shrink-0 text-[#9877b1]"
                      />

                      <span>{event.displayDate}</span>
                    </div>

                    {/* Time */}
                    <div className="flex items-center gap-3">
                      <Clock3
                        size={18}
                        className="shrink-0 text-[#9877b1]"
                      />

                      <span>{event.time}</span>
                    </div>

                    {/* Venue */}
                    <div className="flex items-start gap-3">
                      <MapPin
                        size={18}
                        className="mt-0.5 shrink-0 text-[#9877b1]"
                      />

                      <span>{event.venue}</span>
                    </div>
                  </div>
                </div>
              </motion.article>
            </SectionReveal>
          ))}
        </div>

        {/* Bottom message */}
        <SectionReveal>
          <div className="mt-14 text-center">
            <p className="text-xl italic text-[#76578a] sm:text-2xl">
              Your presence will make our celebrations complete ♡
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}