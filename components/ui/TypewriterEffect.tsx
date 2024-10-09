"use client";

import { cn } from "@/lib/utils";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(""),
  }));

  useEffect(() => {
    animate(
      "span",
      { opacity: 1 },
      {
        duration: 0.05,
        delay: stagger(0.05),
      }
    );
  }, [animate]);

  const renderWords = () => {
    return (
      <div className="inline">
        {wordsArray.map((word, idx) => {
          return (
            <span key={`word-${idx}`} className="inline-block mr-2 mb-2">
              {word.text.map((char, index) => (
                <motion.span
                  initial={{ opacity: 0 }}
                  key={`char-${index}`}
                  className={cn(` text-white`, word.className)}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          );
        })}
      </div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div ref={scope} className="relative">
        <div className="absolute top-0 left-0 overflow-hidden break-words whitespace-normal text-xs md:text-2xl w-full text-center">
          {renderWords()}
        </div>
        <div className="invisible">{renderWords()}</div>
      </div>
      {/* <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block h-[1em] w-[2px] translate-y-[0.1em] bg-blue-500",
          cursorClassName
        )}
      /> */}
    </div>
  );
};

function stagger(duration: number) {
  return (i: number) => i * duration;
}
