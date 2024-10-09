import dynamic from "next/dynamic";

const BentoGridComponent = dynamic(() => import("./BentoGrid"), {
  ssr: false,
});

export default function AboutMe() {
  return (
    <div className="w-full">
      <BentoGridComponent />
    </div>
  );
}
