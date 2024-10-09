"use client";

import { cn } from "@/lib/utils";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";

export const TypewriterEffectSmooth = ({
  words,
  className,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
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
        <div className="absolute top-0 left-0 overflow-hidden break-words whitespace-normal text-xl md:text-3xl w-full text-center">
          {renderWords()}
        </div>
        <div className="invisible">{renderWords()}</div>
      </div>
    </div>
  );
};

function stagger(duration: number) {
  return (i: number) => i * duration;
}
