
// import { Music2, Pause, Play } from "lucide-react";

// export default function MusicPlayer({
//   audioRef,
//   isPlaying,
//   onToggle,
//   onAudioPlay,
//   onAudioPause,
// }) {
//   return (
//     <>
//       {/* Background wedding music */}
//       <audio
//         ref={audioRef}
//         src="/audio/wedding-music.mp3"
//         loop
//         // preload="none"
//         preload="metadata"
//         onPlay={onAudioPlay}
//         onPause={onAudioPause}
//       />

//       {/* Music control button */}
//       <button
//         type="button"
//         onClick={onToggle}
//         aria-label={
//           isPlaying ? "Pause wedding music" : "Play wedding music"
//         }
//         aria-pressed={isPlaying}
//         className="
//           fixed
//           bottom-5
//           right-5
//           z-[70]
//           flex
//           h-12
//           w-12
//           items-center
//           justify-center
//           rounded-full
//           bg-[#9877b1]
//           text-white
//           shadow-lg
//           transition-transform
//           hover:scale-110
//           active:scale-95
//         "
//       >
//         {isPlaying ? (
//           <Pause size={20} />
//         ) : (
//           <Play size={20} />
//         )}
//       </button>

//       {/* Music status */}
//       <div
//         className="
//           pointer-events-none
//           fixed
//           bottom-6
//           right-[76px]
//           z-[70]
//           rounded-full
//           bg-white/90
//           px-3
//           py-2
//           text-xs
//           text-[#76578a]
//           shadow
//         "
//         aria-live="polite"
//       >
//         {isPlaying ? (
//           <span className="flex items-center gap-2">
//             <Music2 size={14} />
//             Music playing
//           </span>
//         ) : (
//           "Play wedding music"
//         )}
//       </div>
//     </>
//   );
// }

import { Music2, Pause, Play, Volume2 } from "lucide-react";

export default function MusicPlayer({
  audioRef,
  isPlaying,
  onToggle,
  onAudioPlay,
  onAudioPause,
}) {
  return (
    <>
      {/* Background wedding music */}
      <audio
        ref={audioRef}
        src="/audio/wedding-music.mp3"
        loop
        preload="metadata"
        onPlay={onAudioPlay}
        onPause={onAudioPause}
      />

      {/* Music control */}
      <div className="fixed bottom-5 right-5 z-[70] flex items-center gap-2">
        {/* Music status */}
        <div
          className="
            hidden rounded-full bg-white/90 px-3 py-2
            text-xs text-[#76578a] shadow-md
            backdrop-blur-sm sm:block
          "
        >
          {isPlaying ? (
            <span className="flex items-center gap-2">
              <Music2 size={14} />
              Music playing
            </span>
          ) : (
            "Play music"
          )}
        </div>

        {/* Play / Pause button */}
        <button
          type="button"
          onClick={onToggle}
          aria-label={
            isPlaying
              ? "Pause wedding music"
              : "Play wedding music"
          }
          aria-pressed={isPlaying}
          className="
            flex h-12 w-12 items-center justify-center
            rounded-full bg-[#9877b1] text-white
            shadow-lg transition-all
            hover:scale-110 hover:bg-[#76578a]
            active:scale-95
          "
        >
          {isPlaying ? (
            <Pause size={20} />
          ) : (
            <Play size={20} />
          )}
        </button>
      </div>
    </>
  );
}