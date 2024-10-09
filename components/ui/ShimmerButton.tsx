import React from "react";

const ShimmerButton = ({
  title,
  icon,
  position,
  handleCopy,
  otherClasses = "", // Default to empty string if not provided
}: {
  title: string;
  icon: React.ReactNode;
  position: "left" | "right"; // Restrict position to specific values
  handleCopy?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button
      className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
      onClick={handleCopy} // Make sure this gets called
    >
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg text-sm font-medium text-white gap-2 ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default ShimmerButton;
