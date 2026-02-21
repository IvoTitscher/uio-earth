import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "The basic IDea",
};

export default function TheBasicIdeaPage() {
  return (
    <div className="mx-auto max-w-[650px]">
      <h1 className="mb-[clamp(1.8rem,1.8rem+((1vw-0.48rem)*2.885),3rem)]">
        The basic IDea
      </h1>

      <div className="prose space-y-6">
        <p>
          Imagine people living in the flight path of an airport. For example,
          the Rhine-Main Airport in Frankfurt, Germany. Maybe they personally
          rarely or never fly. But they are affected by the airport&apos;s impact
          every day. It&apos;s noisy, it stinks, and the air they breathe is
          sometimes unpleasant and perhaps even harmful.
        </p>

        <figure>
          <Image
            src="https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=1024&q=80"
            alt="Airplane flying over residential area near an airport"
            className="w-full"
            width={1024}
            height={679}
          />
          <figcaption className="mt-2 text-sm text-gray-500">
            Photo by{" "}
            <a
              href="https://unsplash.com/@martinrajdl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Martin Rajdl
            </a>{" "}
            on{" "}
            <a
              href="https://unsplash.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Unsplash
            </a>
          </figcaption>
        </figure>

        <h5>
          <strong>
            They should be compensated for this impact. Right?
          </strong>
        </h5>

        <p>
          And that is exactly what the Frankfurt airport company FraPort is
          doing. More than 12,000 homeowners receive several thousand euros just
          for the aircraft noise they have to endure outside their homes. FraPort
          also assumes the costs of structural changes for noise protection
          inside and many other things.
        </p>

        <p>
          FraPorts business is airport operation. They serve airlines that serve
          people that want to fly. They pay for that and Fraport makes a profit
          on that. And they compensate the general public.
        </p>

        <h5>
          <strong>All people are impacted by pollution.</strong>
        </h5>

        <h5>
          <strong>All people deserve a compensation!</strong>
        </h5>

        <figure>
          <Image
            src="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=1024&q=80"
            alt="Industrial pollution affecting communities"
            className="w-full"
            width={1024}
            height={768}
          />
          <figcaption className="mt-2 text-sm text-gray-500">
            Photo by{" "}
            <a
              href="https://unsplash.com/@yarkozelen"
              target="_blank"
              rel="noopener noreferrer"
            >
              Yaroslav Boshnakov
            </a>{" "}
            on{" "}
            <a
              href="https://unsplash.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Unsplash
            </a>
          </figcaption>
        </figure>

        <p>
          All people in the world are exposed to pollution from others who
          pollute the air, water and soil. These people also have a right to
          compensation. UIO represents the interests of all people and their
          right to compensation. This is driven by the{" "}
          <a
            href="https://rebalancing.earth/"
            target="_blank"
            rel="noopener noreferrer"
          >
            rebalancing.earth
          </a>{" "}
          initiative.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <span>Posted</span>
            <time dateTime="2021-12-16">2021-12-16</time>
          </div>
        </div>
      </div>
    </div>
  );
}
