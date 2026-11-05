import { useState } from "react";
import { motion } from "motion/react";

export default function EnvelopeIntro({ onOpen, onStartMusic, }) {
  const [isOpening, setIsOpening] = useState(false);

  function handleOpen() {
    // Prevent multiple clicks while the animation is running
    if (isOpening) return;

    setIsOpening(true);

    // Start music directly from the visitor's click
    onStartMusic();

    /*
      Wait for the complete envelope animation.
      After the flap opens and the card slides out,
      tell App.jsx to show the main invitation.
    */
    window.setTimeout(() => {
      onOpen();
    }, 1800);
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-8"
    >
      {/* Background color */}
      <div className="absolute inset-0 bg-[#fffaf5]" />

      {/* Floral background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage:
            "url('/images/floral-background.webp')",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex w-full max-w-md flex-col items-center text-center">
        {/* Heading */}
        <motion.div
          animate={
            isOpening
              ? { opacity: 0, y: -20 }
              : { opacity: 1, y: 0 }
          }
          transition={{ duration: 0.4 }}
        >
          <p className="mb-3 text-xs font-medium tracking-[0.25em] text-[#9877b1] sm:text-sm">
            A SPECIAL INVITATION
          </p>

          <h1 className="mb-8 text-3xl italic text-[#76578a] sm:text-4xl">
            A Celebration of Love
          </h1>
        </motion.div>

        {/* Perspective wrapper for 3D flap */}
        <div
          className="relative h-[250px] w-full max-w-[360px] sm:h-[290px] sm:max-w-[430px]"
          style={{
            perspective: 1000,
          }}
        >
          {/* Envelope back */}
          <div className="absolute inset-0 rounded-b-xl bg-[#eadcf3] shadow-xl" />

          {/* Invitation card */}
          <motion.div
            initial={{
              y: 25,
              opacity: 1,
            }}
            animate={
              isOpening
                ? {
                    y: -130,
                    // If the card moves too far upward
                    // y: -150,
                    opacity: 1,
                  }
                : {
                    y: 25,
                    opacity: 1,
                  }
            }
            transition={{
              duration: 0.9,
              delay: 0.55,
              ease: "easeInOut",
            }}
            className="absolute left-[8%] top-[12%] z-10 h-[76%] w-[84%] rounded-lg bg-[#fffdf9] shadow-lg"
          >
            <div className="flex h-full flex-col items-center justify-center px-4">
              <p className="text-[10px] tracking-[0.2em] text-[#9877b1] sm:text-xs">
                YOU ARE INVITED
              </p>

              <p className="mt-3 text-xl italic text-[#76578a] sm:text-2xl">
                Our Wedding
              </p>

              <div className="mt-4 h-px w-16 bg-[#d8c4e3]" />

              <p className="mt-3 text-xs text-[#927b9c]">
                A promise of forever
              </p>
            </div>
          </motion.div>

          {/* Left fold */}
          <div
            className="
              absolute inset-0 z-20 bg-[#e2cfe9]
              [clip-path:polygon(0_0,50%_58%,0_100%)]
            "
          />

          {/* Right fold */}
          <div
            className="
              absolute inset-0 z-20 bg-[#dec8e7]
              [clip-path:polygon(100%_0,50%_58%,100%_100%)]
            "
          />

          {/* Bottom fold */}
          <div
            className="
              absolute inset-0 z-30 bg-[#eadcf3]
              [clip-path:polygon(0_100%,50%_58%,100%_100%)]
            "
          />

          {/* Top envelope flap */}
          <motion.div
            animate={{
              rotateX: isOpening ? 180 : 0,
            }}
            transition={{
              duration: 0.7,
              ease: "easeInOut",
            }}
            style={{
              transformOrigin: "top center",
              backfaceVisibility: "hidden",
            }}
            className="
              absolute left-0 top-0 z-40 h-[62%] w-full
              origin-top bg-[#d9c1e4]
              [clip-path:polygon(0_0,100%_0,50%_100%)]
            "
          />

          {/* Wax seal */}
          <motion.button
            type="button"
            onClick={handleOpen}
            animate={{
              opacity: isOpening ? 0 : 1,
              scale: isOpening ? 0 : 1,
            }}
            transition={{ duration: 0.25 }}
            disabled={isOpening}
            aria-label="Open wedding invitation"
            className="
              absolute left-1/2 top-[50%] z-50
              flex h-14 w-14
              -translate-x-1/2 -translate-y-1/2
              items-center justify-center rounded-full
              border-4 border-[#b79565]
              bg-[#9877b1] text-xl text-white
              shadow-lg transition-transform
              hover:scale-110 active:scale-95
              disabled:cursor-default
            "
          >
            ♡
          </motion.button>
        </div>

        {/* Open button */}
        <motion.button
          type="button"
          onClick={handleOpen}
          animate={{
            opacity: isOpening ? 0 : 1,
            y: isOpening ? 10 : 0,
          }}
          whileHover={!isOpening ? { scale: 1.04 } : undefined}
          whileTap={!isOpening ? { scale: 0.96 } : undefined}
          disabled={isOpening}
          className="
            mt-10 rounded-full bg-[#9877b1]
            px-8 py-3 text-sm font-medium
            tracking-wide text-white shadow-lg
            transition-colors hover:bg-[#76578a]
            disabled:cursor-default
          "
        >
          Open Invitation
        </motion.button>

        <motion.p
          animate={{
            opacity: isOpening ? 0 : 1,
          }}
          className="mt-4 text-xs text-[#927b9c]"
        >
          Tap the seal or open your invitation
        </motion.p>
      </div>
    </motion.section>
  );
}