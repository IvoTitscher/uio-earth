import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[650px]">
      <h1 className="mb-[clamp(1.8rem,1.8rem+((1vw-0.48rem)*2.885),3rem)]">
        About
      </h1>

      <div className="prose">
        <p>
          The UIO intends to represent all people. This is work in progress that
          has just begun.
        </p>
      </div>
    </div>
  );
}
