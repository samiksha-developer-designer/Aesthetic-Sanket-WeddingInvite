// import { motion } from "motion/react";
// import { ChevronDown } from "lucide-react";
// import { weddingData } from "../../data/weddingData";

// export default function Hero() {
//   function scrollToNextSection() {
//     document
//       .getElementById("couple")
//       ?.scrollIntoView({
//         behavior: "smooth",
//       });
//   }

//   return (
//     <section
//       id="home"
//       className="
//         relative flex min-h-screen items-center justify-center
//         overflow-hidden bg-[#fffaf5] px-5 py-12
//         sm:px-8
//       "
//     >
//       {/* Soft floral background */}
//       <div
//         className="
//           pointer-events-none absolute inset-0
//           bg-cover bg-center bg-no-repeat opacity-[0.12]
//         "
//         style={{
//           backgroundImage:
//             "url('/images/floral-background.webp')",
//         }}
//       />

//       {/* Soft background overlay */}
//       <div className="pointer-events-none absolute inset-0 bg-[#fffaf5]/70" />

//       {/* Main content */}
//       <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center text-center">
//         {/* Small heading */}
//         <motion.p
//           initial={{ opacity: 0, y: 15 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="
//             text-[10px] font-medium tracking-[0.3em]
//             text-[#9877b1] sm:text-xs
//           "
//         >
//           TOGETHER WITH LOVE
//         </motion.p>

//         {/* Names */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{
//             duration: 0.7,
//             delay: 0.15,
//           }}
//           className="mt-5"
//         >
//           <h1
//             className="
//               text-4xl font-normal italic leading-tight
//               text-[#76578a]
//               sm:text-5xl
//               md:text-6xl
//               lg:text-7xl
//             "
//           >
//             {weddingData.groom.name}
//             <span className="mx-3 text-[#b79565]">&</span>
//             {weddingData.bride.name}
//           </h1>
//         </motion.div>

//         {/* Decorative line */}
//         <motion.div
//           initial={{ scaleX: 0 }}
//           animate={{ scaleX: 1 }}
//           transition={{
//             duration: 0.8,
//             delay: 0.4,
//           }}
//           className="mt-5 h-px w-24 bg-[#d8c4e3] sm:w-32"
//         />

//         {/* Couple illustration */}
//         <motion.div
//           initial={{
//             opacity: 0,
//             scale: 0.92,
//             y: 30,
//           }}
//           animate={{
//             opacity: 1,
//             scale: 1,
//             y: 0,
//           }}
//           transition={{
//             duration: 0.8,
//             delay: 0.3,
//           }}
//           className="
//             relative mt-7 w-full
//             max-w-[280px]
//             sm:max-w-[340px]
//             md:max-w-[390px]
//             lg:max-w-[430px]
//           "
//         >
//           {/* Soft glow */}
//           <div className="absolute inset-8 rounded-full bg-[#eadcf3]/50 blur-3xl" />

//           <img
//             src="/images/couple-illustration.webp"
//             alt={`${weddingData.groom.name} and ${weddingData.bride.name}`}
//             width="700"
//             height="700"
//             fetchPriority="high"
//             className="relative z-10 mx-auto w-full object-contain drop-shadow-xl"
//           />
//         </motion.div>

//         {/* Tagline */}
//         <motion.div
//           initial={{ opacity: 0, y: 15 }}
//           animate={{ opacity: 0.9, y: 0 }}
//           transition={{
//             duration: 0.7,
//             delay: 0.65,
//           }}
//           className="mt-3"
//         >
//           <p
//             className="
//               text-xl italic text-[#76578a]
//               sm:text-2xl md:text-3xl
//             "
//           >
//             {weddingData.wedding.tagline}
//           </p>

//           <p className="mt-3 text-xs tracking-[0.15em] text-[#927b9c] sm:text-sm">
//             JOIN US AS WE BEGIN OUR FOREVER
//           </p>
//         </motion.div>

//         {/* Scroll button */}
//         <motion.button
//           type="button"
//           onClick={scrollToNextSection}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1 }}
//           className="
//             mt-8 flex flex-col items-center gap-1
//             text-xs tracking-wider text-[#9877b1]
//             transition-colors hover:text-[#76578a]
//           "
//           aria-label="Scroll to couple details"
//         >
//           SCROLL TO EXPLORE

//           <motion.span
//             animate={{ y: [0, 6, 0] }}
//             transition={{
//               duration: 1.5,
//               repeat: Infinity,
//             }}
//           >
//             <ChevronDown size={20} />
//           </motion.span>
//         </motion.button>
//       </div>
//     </section>
//   );
// }

import { motion } from "motion/react";
import SectionReveal from "../SectionReveal";
import { weddingData } from "../../data/weddingData";

export default function Hero() {
  const { groom, bride, wedding } = weddingData;

  return (
    <section
      id="home"
      className="
        relative
        isolate
        flex
        min-h-screen
        items-center
        justify-center
        overflow-hidden
        bg-[#fffaf5]
        px-4
        py-16
        sm:px-6
        lg:px-8
      "
    >
      {/* Soft floral background */}
      <div
        className="
          absolute
          inset-0
          -z-20
          bg-cover
          bg-center
          bg-no-repeat
          opacity-20
        "
        style={{
          backgroundImage:
            "url('/images/floral-background.webp')",
        }}
      />

      {/* Soft color overlay */}
      <div className="absolute inset-0 -z-10 bg-[#fffaf5]/70" />

      {/* Decorative glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          -z-10
          h-[350px]
          w-[350px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#eadcf3]/50
          blur-3xl
          sm:h-[500px]
          sm:w-[500px]
        "
      />

      {/* Main hero content */}
      <SectionReveal className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">

        {/* Small heading */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="
            text-[10px]
            font-semibold
            tracking-[0.35em]
            text-[#9877b1]
            sm:text-xs
          "
        >
          TOGETHER WITH OUR FAMILIES
        </motion.p>

        {/* Main names */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="
            mt-5
            text-4xl
            font-normal
            italic
            leading-tight
            text-[#76578a]
            sm:text-5xl
            md:text-6xl
          "
        >
          {groom.name}

          <span className="mx-3 text-2xl not-italic sm:text-3xl">
            &
          </span>

          {bride.name}
        </motion.h1>

        {/* Couple illustration */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            delay: 0.45,
            duration: 0.9,
            ease: "easeOut",
          }}
          className="
            relative
            mt-8
            w-full
            max-w-[280px]
            sm:max-w-[360px]
            md:max-w-[420px]
          "
        >
          <img
            src="/images/couple-illustration.webp"
            alt={`${groom.name} and ${bride.name}`}
            width="840"
            height="840"
            decoding="async"
            className="h-auto w-full object-contain"
          />

          {/* Decorative small glow */}
          <div
            className="
              absolute
              inset-x-[15%]
              bottom-2
              -z-10
              h-12
              rounded-full
              bg-[#d8c4e3]/50
              blur-2xl
            "
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="
            mt-6
            text-lg
            italic
            text-[#76578a]
            sm:text-xl
          "
        >
          {wedding.tagline}
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.85, duration: 0.7 }}
          className="mt-5 h-px w-20 bg-[#c9a86a]"
        />

        {/* Wedding date */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="
            mt-5
            text-sm
            font-medium
            tracking-[0.2em]
            text-[#927b9c]
            sm:text-base
          "
        >
          {wedding.displayDate}
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-10 flex flex-col items-center"
        >
          <span className="text-[10px] tracking-[0.2em] text-[#9877b1]">
            SCROLL TO CELEBRATE
          </span>

          <motion.div
            animate={{
              y: [0, 7, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              mt-3
              h-9
              w-5
              rounded-full
              border
              border-[#9877b1]/60
              p-1
            "
          >
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#9877b1]
              "
            />
          </motion.div>
        </motion.div>
      </SectionReveal>
    </section>
  );
}