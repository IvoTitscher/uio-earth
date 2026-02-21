import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-[650px]">
      <h1 className="mb-[clamp(1.8rem,1.8rem+((1vw-0.48rem)*2.885),3rem)]">
        Contact
      </h1>

      <div className="prose space-y-6">
        <p>
          The UIO is driven by the{" "}
          <a
            href="https://rebalancing.earth/"
            target="_blank"
            rel="noopener noreferrer"
          >
            rebalancing.earth
          </a>{" "}
          initiative. You can reach us there or join the conversation on{" "}
          <a
            href="https://discord.gg/3fc9fvPSK3"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discord
          </a>
          .
        </p>
      </div>
    </div>
  );
}
