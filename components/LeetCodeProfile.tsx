"use client";

import { useState, useEffect } from "react";

import { CalendarDays, Award, Target, Zap } from "lucide-react";
import Image from "next/image";
import { Badge } from "./ui/badge";
import CircularProgress from "./ui/CircularProgress";
import { GlareCard } from "./ui/GlareCard";

interface LeetCodeStats {
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  totalEasy: number;
  mediumSolved: number;
  totalMedium: number;
  hardSolved: number;
  totalHard: number;
  acceptanceRate: number;
  ranking: number;
  contributionPoints: number;
  reputation: number;
}

export default function EnhancedLeetCodeProfile() {
  const [stats, setStats] = useState<LeetCodeStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const username = "sajadaliismail"; // Replace with your LeetCode username

  useEffect(() => {
    const fetchLeetCodeStats = async () => {
      try {
        const response = await fetch(
          `https://leetcode-stats-api.herokuapp.com/${username}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch LeetCode data");
        }
        const data = await response.json();
        setStats(data);
      } catch (err) {
        setError("Error fetching LeetCode data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchLeetCodeStats();
  }, [username]);

  if (loading) {
    return null;
  }

  if (error || !stats) {
    return null;
  }

  return (
    <>
      <div className="bg-black-100 px-5 md:px-20 pb-10">
        <GlareCard
          externalLink="https://leetcode.com/sajadaliismail/"
          className="bg-black-100"
        >
          <div className="p-4 flex flex-col">
            <div className=" flex flex-row justify-center gap-4 py-4">
              <div className=" ring-2 ring-primary rounded-full">
                <Image
                  src={`https://assets.leetcode.com/users/sajadaliismail/avatar_1716204193.png`}
                  width={50}
                  height={50}
                  alt={username}
                  className="rounded-full"
                />
              </div>
              <div className="text-xl cursor-pointer ">
                Sajad Ali Ismail
                <div className="text-xs">LeetCode Enthusiast</div>
              </div>
            </div>
            <div className="py-2">
              <div className="flex flex-row items-center gap-4 justify-around content-center mb-2">
                <h3 className="text-md font-semibold ">
                  <div className=" w-5 text-primary" />
                  Problem Solving Progress
                </h3>
                <div className="flex justify-start  text-sm  text-muted-foreground">
                  <span>
                    <span className="text-green-500 mr-1">
                      {" "}
                      {stats.totalSolved}
                    </span>
                    solved{" "}
                    <span className="mr-1 text-yellow-400">
                      {stats.totalQuestions}
                    </span>
                    total{" "}
                  </span>
                </div>
                <CircularProgress
                  progress={(stats.totalSolved / stats.totalQuestions) * 100}
                  size={40}
                  color="text-green-600"
                />
              </div>

              <div className="flex flex-row justify-around ">
                {[
                  {
                    label: "Easy",
                    solved: stats.easySolved,
                    total: stats.totalEasy,
                    color: "text-green-500",
                  },
                  {
                    label: "Medium",
                    solved: stats.mediumSolved,
                    total: stats.totalMedium,
                    color: "text-yellow-500",
                  },
                  {
                    label: "Hard",
                    solved: stats.hardSolved,
                    total: stats.totalHard,
                    color: "text-red-500",
                  },
                ].map((difficulty) => (
                  <div
                    key={difficulty.label}
                    className="flex flex-col rounded-lg p-1 shadow-sm items-center "
                  >
                    <div className={`text-lg font-bold ${difficulty.color}`}>
                      {difficulty.solved}
                    </div>
                    <div className={`text-xs font-medium ${difficulty.color}`}>
                      {difficulty.label}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      ({difficulty.total})
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-1">
              <div className="">
                <div className="bg-card rounded-lg p-1 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Acceptance Rate</span>
                    <Badge variant="secondary">
                      {stats.acceptanceRate.toFixed(1)}%
                    </Badge>
                  </div>
                </div>
                <div className="bg-card rounded-lg p-1 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Ranking</span>
                    <Badge variant="secondary">
                      {stats.ranking.toLocaleString()}
                    </Badge>
                  </div>
                </div>
                <div className="bg-card rounded-lg p-1 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Contribution</span>
                    <Badge variant={"destructive"}>
                      {stats.contributionPoints}
                    </Badge>
                  </div>
                </div>
                <div className="bg-card rounded-lg p-1 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Reputation</span>
                    <Badge variant="secondary">{stats.reputation}</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </GlareCard>
      </div>
    </>
  );
}
