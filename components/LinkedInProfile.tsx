"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { GlareCard } from "./ui/GlareCard";

interface LinkedInProfile {
  profile_picture: string;
  name: string;
  bio: string | null;
  followers: number;
  posts: number;
  location: string | null;
  created_at: string;
  hireable: boolean;
  projects: number;
}

export default function LinkedInProfileComponent() {
  //   const [profile, setProfile] = useState<LinkedInProfile | null>(null);
  //   const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Replace with actual LinkedIn profile data
  const profile: LinkedInProfile = {
    profile_picture:
      "https://media.licdn.com/dms/image/v2/D5635AQHVUwZrq4X6ew/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1721897078613?e=1729177200&v=beta&t=8rD8-ekuHbgD7vXWL64hp0cy8olGFRb1O1UNgDG4xUw",
    name: "Sajad Ali Ismail",
    bio: "Node.js & React Developer | Full-Stack Engineer | Mechanical Engineer",
    followers: 944,
    posts: 18,
    location: "Ernakulam",
    created_at: "2013-08-23T15:25:49Z",
    hireable: true,
    projects: 5,
  };

  //   useEffect(() => {
  //     setProfile(linkedinProfileData);
  //     setLoading(false);
  //     //     // Simulate fetching LinkedIn data
  //     //     const fetchLinkedInProfile = async () => {
  //     //       try {
  //     //         // You can fetch actual data here
  //     //         // const response = await fetch('YOUR_LINKEDIN_API_URL');
  //     //         // const data = await response.json();
  //     //         // setProfile(data);

  //     //         // Using mock data for now
  //     //         setProfile(linkedinProfileData);
  //     //       } catch (err) {
  //     //         setError("Error fetching LinkedIn data. Please try again later.");
  //     //       } finally {
  //     //         setLoading(false);
  //     //       }
  //     //     };

  //     //     fetchLinkedInProfile();
  //   }, []);

  //   if (loading) {
  //     return <div>Loading...</div>;
  //   }

  //   if (error || !profile) {
  //     return <div>Error loading profile.</div>;
  //   }

  function getMemberSince(dateString: string): string {
    const createdAt = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    return createdAt.toLocaleDateString(undefined, options);
  }

  return (
    <>
      <div className="bg-black-100 px-5 md:px-20 pb-10">
        <GlareCard className="bg-black-100">
          <div className="p-4 flex flex-col">
            <div className="flex flex-row justify-center gap-4 py-4">
              <div className="ring-2 ring-primary rounded-full">
                <Image
                  src={profile.profile_picture}
                  width={50}
                  height={50}
                  alt={profile.name}
                  className="rounded-full"
                />
              </div>
              <a
                href="https://linkedin.com/in/sajadaliismail"
                className="text-xl cursor-pointer"
              >
                {profile.name}
                <div className="text-xs">Networking Enthusiast</div>
              </a>
            </div>
            <div className="py-2">
              <div className="flex flex-row items-center gap-4 justify-around content-center mb-2">
                <div className="flex justify-between gap-6 text-muted-foreground">
                  <div>
                    <span className="text-md font-semibold">Followers</span>{" "}
                    <span className="text-green-500 mr-1">
                      {profile.followers}
                    </span>
                  </div>
                  <div>
                    <span className="text-md font-semibold">Posts</span>{" "}
                    <span className="text-yellow-400">{profile.posts}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="">
                  <div className="bg-card rounded-lg p-1 text-sm font-thin shadow-sm">
                    <div className="flex items-center justify-between">
                      {profile.bio}
                    </div>
                  </div>
                  <div className="bg-card rounded-lg p-1 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Location</span>
                      <Badge variant="secondary">{profile.location}</Badge>
                    </div>
                  </div>
                  <div className="bg-card rounded-lg p-1 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Projects</span>
                      <Badge variant="secondary">{profile.projects}</Badge>
                    </div>
                  </div>
                  <div className="bg-card rounded-lg p-1 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Member since</span>
                      <Badge>{getMemberSince(profile.created_at)}</Badge>
                    </div>
                  </div>
                  <div className="bg-card rounded-lg p-1 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Open to Work</span>
                      <Badge
                        className={
                          profile.hireable
                            ? "bg-green-600 h-4"
                            : "bg-red-600 h-4"
                        }
                      >
                        {profile.hireable ? "Yes" : "No"}
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
