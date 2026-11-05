import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { weddingData } from "../data/weddingData";

function getTimeRemaining(targetDate) {
  const difference = new Date(targetDate).getTime() - Date.now();

  // Wedding date has arrived or passed
  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isComplete: true,
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor(
      (difference / (1000 * 60 * 60)) % 24
    ),
    minutes: Math.floor(
      (difference / (1000 * 60)) % 60
    ),
    seconds: Math.floor((difference / 1000) % 60),
    isComplete: false,
  };
}

export default function Countdown() {
  const targetDate = weddingData.wedding.ceremonyDateTime;

  const [timeLeft, setTimeLeft] = useState(() =>
    getTimeRemaining(targetDate)
  );

  useEffect(() => {
    // Update immediately and then every second
    const updateCountdown = () => {
      setTimeLeft(getTimeRemaining(targetDate));
    };

    updateCountdown();

    const intervalId = window.setInterval(
      updateCountdown,
      1000
    );

    // Clean up the interval when the component unmounts
    return () => {
      window.clearInterval(intervalId);
    };
  }, [targetDate]);

  const countdownItems = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section
      id="countdown"
      className="
        relative
        overflow-hidden
        bg-[#fffaf5]
        px-4
        py-20
        sm:px-6
        sm:py-24
        lg:px-8
      "
    >
      {/* Soft decorative background */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,_rgba(234,220,243,0.65),_transparent_55%)]
        "
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-semibold tracking-[0.3em] text-[#9877b1]">
            COUNTING DOWN TO
          </p>

          <h2 className="mt-4 text-3xl italic text-[#76578a] sm:text-4xl md:text-5xl">
            Our Beautiful Beginning
          </h2>

          <div className="mx-auto mt-5 h-px w-20 bg-[#c9a86a]" />

          <p className="mt-5 text-sm text-[#927b9c] sm:text-base">
            Every moment brings us closer to our forever.
          </p>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="
            mx-auto
            mt-12
            grid
            max-w-3xl
            grid-cols-2
            gap-4
            sm:grid-cols-4
            sm:gap-5
          "
        >
          {countdownItems.map((item) => (
            <div
              key={item.label}
              className="
                rounded-2xl
                border
                border-[#e6d7ea]
                bg-white/70
                px-4
                py-6
                shadow-[0_10px_30px_rgba(118,87,138,0.08)]
                backdrop-blur-sm
                sm:px-5
                sm:py-8
              "
            >
              <motion.p
                key={item.value}
                initial={{ opacity: 0.5, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="
                  text-4xl
                  font-medium
                  text-[#76578a]
                  sm:text-5xl
                "
              >
                {String(item.value).padStart(2, "0")}
              </motion.p>

              <p className="mt-3 text-[10px] font-semibold tracking-[0.2em] text-[#9877b1] sm:text-xs">
                {item.label.toUpperCase()}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Message when countdown reaches zero */}
        {timeLeft.isComplete && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 text-xl italic text-[#76578a]"
          >
            The celebration has begun! ♡
          </motion.p>
        )}

        {/* Decorative heart */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mt-10 text-2xl text-[#c9a86a]"
        >
          ♡
        </motion.div>
      </div>
    </section>
  );
}