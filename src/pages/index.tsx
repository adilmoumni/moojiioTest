import Layout from "@/components/UI/layouts";
import LayoutCardsGrid from "@/components/UI/layouts/LayoutCardGrid";
import MoojiioCard from "@/components/UI/card/MoojiioCard";
import { useRouter } from "next/router";
import MoojiioInput from "@/components/UI/fields/MoojiioInput";
import { useState } from "react";
import MoojiioButton from "@/components/UI/button/MoojiioButton";

export default function Home() {
  const router = useRouter();
  // Props for fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Redrection action
  const handleClick = () => router.push("/profile");
  return (
    <Layout>
      <LayoutCardsGrid className="grid gap-5 md:grid-cols-2 md:w-9/12">
        <MoojiioCard className="flex flex-col items-center justify-center">
          {/* Logo */}
          <img src="/assets/logo-dark.svg" alt="logo-black" className="mb-6" />

          {/* Text and subtitles */}
          <div className="text-2xl font-medium tracking-normal text-center not-italic text-t-primary">
            Welcome to Mooji!
          </div>
          <div className="not-italic font-normal text-sm text-center text-t-second mb-4 mt-2">
            Easily grow the skills and habits that <br /> will serve you at
            work.
          </div>

          {/* Email field  */}
          <MoojiioInput
            name={""}
            value={email}
            placeholder="workemail@email.com"
            onChange={(value) => setEmail(value)}
          />
          {/* Password field */}
          <MoojiioInput
            name={""}
            type="password"
            value={password}
            placeholder="Password"
            onChange={(value) => setPassword(value)}
          />
          {/* Clickable text */}
          <div className="text-t-second hover:underline cursor-pointer">
            Can't find your password?
          </div>

          {/* Button */}
          <MoojiioButton
            onClick={handleClick}
            label="Sign in"
            classNames="mt-10"
          >
            <img
              src="/assets/icon-button.svg"
              className="mx-2"
              alt="logo-black"
            />
          </MoojiioButton>
        </MoojiioCard>

        {/* second side */}
        <div className="rounded-2xl hidden md:block bg-[url('/assets/block-img.svg')] bg-cover" />
      </LayoutCardsGrid>
    </Layout>
  );
}
