import { useRef, useState } from "react";
// import { AnimatePresence, motion } from "motion/react";
import { AnimatePresence } from "motion/react";

import EnvelopeIntro from "./components/EnvelopeIntro";
import SparkleEffect from "./components/SparkleEffect";
import MusicPlayer from "./components/MusicPlayer";
import Hero from "./components/sections/Hero";
import CoupleSection from "./components/sections/CoupleSection";
import Countdown from "./components/Countdown";
import EventsSection from "./components/sections/EventsSection";
import VenueSection from "./components/sections/VenueSection";
import RSVPSection from "./components/sections/RSVPSection";
import FooterSection from "./components/sections/FooterSection";

export default function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [showSparkles, setShowSparkles] = useState(false);

  // Controls the music button UI
  const [isPlaying, setIsPlaying] = useState(false);

  // Gives App.jsx direct access to the <audio> element
  const audioRef = useRef(null);

    // Starts music directly after the user's envelope click
  function handleStartMusic() {
    const audio = audioRef.current;

    if (!audio) return;

    audio.play().catch((error) => {
      console.log("Music could not start automatically:", error);
    });
  }


  // Shows the main invitation after the envelope animation
  function handleInvitationOpened() {
    setIsOpened(true);

    // Show sparkles after the envelope sequence
    setShowSparkles(true);

    window.setTimeout(() => {
      setShowSparkles(false);
    }, 1800);
  }

  // Play or pause music from the floating button
  function handleMusicToggle() {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {
      audio.play().catch((error) => {
        console.log("Unable to play music:", error);
      });
    } else {
      audio.pause();
    }
  }

  function handleAudioPlay() {
    setIsPlaying(true);
  }

  function handleAudioPause() {
    setIsPlaying(false);
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#fffaf5]">
      {/* Envelope animation screen */}
      <AnimatePresence mode="wait">
        {!isOpened && (
          <EnvelopeIntro
             onOpen={handleInvitationOpened}
             onStartMusic={handleStartMusic}
          />
        )}
      </AnimatePresence>

      {/* Main invitation placeholder */}
      {/* {isOpened && (
        <motion.section
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
          }}
          className="flex min-h-screen items-center justify-center px-5 text-center"
        >
          <div>
            <p className="text-sm tracking-[0.2em] text-[#9877b1]">
              THE INVITATION IS OPEN
            </p>

            <h1 className="mt-4 text-4xl italic text-[#76578a]">
              Welcome to Our Celebration
            </h1>

            <p className="mt-4 text-[#927b9c]">
              Our beautiful wedding story will appear here.
            </p>
          </div>
        </motion.section>
      )} */}

      {/* {isOpened && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <Hero />
        </motion.div>
      )} */}

      {isOpened && (
        <>
        <Hero />
        <CoupleSection />
        <Countdown />
        <EventsSection />
        <VenueSection />
        <RSVPSection />
        <FooterSection />
        </>
      )}

      {/* Sparkle effect */}
      <SparkleEffect active={showSparkles} />

      {/* Keep this mounted at all times so the audio exists
          before the guest clicks the envelope */}
      <MusicPlayer
        audioRef={audioRef}
        isPlaying={isPlaying}
        onToggle={handleMusicToggle}
        onAudioPlay={handleAudioPlay}
        onAudioPause={handleAudioPause}
      />
    </main>
  );
}