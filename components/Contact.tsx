import { companies } from "@/data";
import { BackgroundGradient } from "./ui/CardWithbgGradient";
import { cn } from "@/lib/utils";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { TextArea } from "./ui/textArea";
import { HtmlHTMLAttributes, useState } from "react";

export default function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(e.target.name, e.target.value);
  };
  const handleSubmit = async () => {
    const data = {};

    try {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
      } else {
        console.log("Error sending email:", result.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section id="contact" className="bg-black-100">
      <h1 className="md:heading text-4xl text-center py-8 ">
        Get in <span className="text-purple-400">Touch</span>
      </h1>
      <div className="flex flex-col mt-5 pb-20 md:flex-row w-full bg-black-100 justify-around items-center gap-5">
        <form onSubmit={handleSubmit} className="my-8 w-[50vw] ">
          <LabelInputContainer>
            <Input
              value={name}
              name="name"
              id="name"
              placeholder="Your Name"
              type="text"
              onChange={handleChange}
              required={true}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Input
              value={email}
              id="email"
              name="email"
              placeholder="example@gmail.com"
              type="email"
              required={true}
              onChange={handleChange}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Input
              id="subject"
              value={subject}
              name="subject"
              placeholder="Subject"
              type="text"
              onChange={handleChange}
              required={true}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <TextArea
              value={content}
              id="content"
              name="content"
              placeholder="Your message"
              required={true}
              onChange={handleChange}
            />
          </LabelInputContainer>

          <button
            className="bg-gradient-to-br relative group/btn from-blue-900 to-gray-800 block bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Send Email &rarr;
            <BottomGradient />
          </button>
        </form>
      </div>
    </section>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full my-2", className)}>
      {children}
    </div>
  );
};
