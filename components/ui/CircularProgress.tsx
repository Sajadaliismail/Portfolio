interface CircularProgressProps {
  progress: number; // Progress value between 0 and 100
  size?: number; // Size of the circle
  strokeWidth?: number; // Thickness of the circle
  color?: string; // Color of the progress
}

export default function CircularProgress({
  progress,
  size = 100,
  strokeWidth = 8,
  color = "text-blue-500",
}: CircularProgressProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative">
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          className="text-gray-200"
          stroke="currentColor"
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className={`${color} transition-all duration-300`}
          strokeLinecap="round"
          stroke="currentColor"
          fill="none"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xs font-boldtext-gray-200">
          {Math.round(progress)}%
        </span>
      </div>
    </div>
  );
}
