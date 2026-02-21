import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UIO CHARTER & PURPOSE",
};

export default function CharterPage() {
  return (
    <div className="mx-auto max-w-[650px]">
      <h1 className="mb-[clamp(1.8rem,1.8rem+((1vw-0.48rem)*2.885),3rem)]">
        UIO CHARTER &amp; PURPOSE
      </h1>

      <div className="prose space-y-6">
        <h5>
          WE THE PEOPLES OF THE UNITED INDIVIDUALS ORGANISATION DETERMINED
        </h5>

        <ul className="list-disc space-y-2 pl-6">
          <li>
            to protect future generations from the destruction of ecosystems and
            to keep planet earth habitable
          </li>
          <li>
            to establish conditions under which pollution and destruction of
            natural resources were compensated, and
          </li>
          <li>
            to regain faith in fundamental{" "}
            <a
              href="https://en.wikipedia.org/wiki/Human_rights"
              target="_blank"
              rel="noopener noreferrer"
            >
              human rights
            </a>
            , in the{" "}
            <a
              href="https://en.wikipedia.org/wiki/Human_dignity"
              target="_blank"
              rel="noopener noreferrer"
            >
              dignity
            </a>{" "}
            and worth of the human person, in the equal rights of men and women,
            by distributing the incoming compensation equally
          </li>
          <li>
            to promote social progress and better standards of life in a
            sustainable environment.
          </li>
        </ul>

        <h5>
          WE THE PEOPLES OF THE UNITED INDIVIDUALS ORGANIZATION TRUST
        </h5>

        <ul className="list-disc space-y-2 pl-6">
          <li>
            in the commitment of all nation-states to fulfill their
            constitutional purpose and cooperate,
          </li>
          <li>
            in the commitment and support of all for-profit organizations to
            drive the change towards a sustainable economy by{" "}
            <a
              href="https://www.ifrs.org/projects/completed-projects/2021/sustainability-reporting/#final-stage"
              target="_blank"
              rel="noopener noreferrer"
            >
              corporate sustainability reporting
            </a>
          </li>
          <li>
            in the forces of free markets to decouple growth and prosperity from
            pollution and destruction of natural resources
          </li>
          <li>
            in our own force and our inalienable right to natural resource to
            establish a system of{" "}
            <a
              href="https://trueprice.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              trueprice
            </a>{" "}
            and compensation
          </li>
        </ul>

        <h5>MISCELLANEOUS PROVISIONS</h5>

        <p>
          Membership is automatic and regardless of age, race, sex, language,
          religion, or location.
        </p>

        <p>
          The UIO considers every living human being as a passive member. The UIO
          invites everybody to become active members by uniquely identifying
          themselves.
        </p>

        <p>
          Active members have the right to their individual wallets in which
          polluters and destructors of natural resources directly transfer their
          compensation.
        </p>

        <p>Active members also have one vote each in the general assembly.</p>

        <p>
          The UIO asks all members as mothers and fathers, employees, managers,
          shareholders, board members, job seekers, and consumers to support the
          purpose of the UIO to establish a system of compensation for pollution
          to rebalance the global social and ecosystems.
        </p>

        <p>
          At the same time, the UIO distances itself from any kind of violence to
          enforce its interests. The UIO seeks cooperation with all states,
          economic and social associations, and other interest groups.
        </p>

        <p>
          There is general agreement that UIO demands are not legally
          enforceable, but this does not preclude them from being designated as
          legally binding by nation-states and enforced on behalf of the UIO.
        </p>

        <h5>LEGAL AND ORGANIZATIONAL FORM</h5>

        <p>
          The UIO is supra-national and apolitical. It is primarily a technical
          platform that enables the value flow of natural resource offsets to
          each individual. The value flow is automatically executed as soon as an
          offset payment is received.
        </p>

        <p>
          The UIO will be organized as a decentralized autonomous organization
          (DAO) based on a blockchain. No value is ever stored at the UIO or any
          related bank. All necessary functions are created as a blockchain-based
          open-source smart contract and executed automatically immediately.
        </p>
      </div>
    </div>
  );
}
