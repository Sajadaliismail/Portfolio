import EnhancedGitHubProfile from "./GitHubProfile";
import EnhancedLeetCodeProfile from "./LeetCodeProfile";
import LinkedInProfileComponent from "./LinkedInProfile";

export default function Profiles() {
  return (
    <section id="profiles" className="bg-black-100">
      <h1 className="md:heading text-2xl text-center py-8 ">
        A Showcase of My{" "}
        <span className="text-purple-400">Professional Journey</span>
      </h1>
      <div className=" h-[80vh] py-10 flex flex-col md:flex-row w-full bg-black-100 justify-center  ">
        <EnhancedLeetCodeProfile />
        <EnhancedGitHubProfile />
        <LinkedInProfileComponent />
      </div>
    </section>
  );
}
