"use client";

import { useState, useEffect } from "react";

import { CalendarDays, Award, Target, Zap } from "lucide-react";
import Image from "next/image";
import { Badge } from "./ui/badge";
import CircularProgress from "./ui/CircularProgress";
import { GlareCard } from "./ui/GlareCard";

interface UserProfile {
  avatar_url: string;
  bio: string | null;
  blog: string;
  company: string | null;
  created_at: string;
  email: string | null;
  events_url: string;
  followers: number;
  followers_url: string;
  following: number;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  hireable: boolean;
  html_url: string;
  id: number;
  location: string | null;
  login: string;
  name: string;
  node_id: string;
  organizations_url: string;
  public_gists: number;
  public_repos: number;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  twitter_username: string | null;
  type: string;
  updated_at: string;
  url: string;
}

export default function EnhancedGitHubProfile() {
  const [stats, setStats] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const username = "sajadaliismail";

  function getMemberSince(dateString: string): string {
    const createdAt = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    return createdAt.toLocaleDateString(undefined, options);
  }

  useEffect(() => {
    const fetchLeetCodeStats = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`
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
    return <div>asfas</div>;
  }

  if (error || !stats) {
    return <div>asf</div>;
  }

  return (
    <>
      <div className="bg-black-100 px-5 md:px-20 pb-10">
        <GlareCard
          externalLink="https://github.com/Sajadaliismail/"
          className="bg-black-100"
        >
          <div className="p-4 flex flex-col">
            <div className=" flex flex-row justify-center gap-4 py-4">
              <div className=" ring-2 ring-primary rounded-full">
                <Image
                  src={stats.avatar_url}
                  width={50}
                  height={50}
                  alt={username}
                  className="rounded-full"
                />
              </div>
              <div className="text-xl cursor-pointer ">
                Sajad Ali Ismail
                <div className="text-xs">Code Explorer</div>
              </div>
            </div>
            <div className="py-2">
              <div className="flex flex-row items-center gap-4 justify-around content-center mb-2">
                <div className="flex justify-between gap-6 text-muted-foreground">
                  <div>
                    <span className="text-md font-semibold ">Followers</span>{" "}
                    <span className="text-green-500 mr-1">
                      {stats.followers}
                    </span>
                  </div>
                  <div>
                    <span className="text-md font-semibold mr-1 ">
                      Following
                    </span>

                    <span className=" text-yellow-400">{stats.following}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="">
                  <div className="bg-card rounded-lg p-1 text-sm font-thin shadow-sm">
                    <div className="flex items-center justify-between">
                      {stats.bio}
                    </div>
                  </div>
                  <div className="bg-card rounded-lg p-1 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">
                        Public Repositories
                      </span>
                      <Badge variant="secondary">{stats.public_repos}</Badge>
                    </div>
                  </div>
                  <div className="bg-card rounded-lg p-1 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Location</span>
                      <Badge variant="secondary">{stats.location}</Badge>
                    </div>
                  </div>

                  <div className="bg-card rounded-lg p-1 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Member since</span>

                      <Badge>{getMemberSince(stats.created_at)}</Badge>
                    </div>
                  </div>
                  <div className="bg-card rounded-lg p-1 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">
                        Ready for Work
                      </span>

                      <Badge
                        className={
                          stats.hireable ? "bg-green-600 h-4" : "bg-red-600 h-4"
                        }
                      >
                        {stats.hireable ? "Yes" : "No"}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </GlareCard>
      </div>
    </>
  );
}
