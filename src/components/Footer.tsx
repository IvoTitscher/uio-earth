import Link from "next/link";

export default function Footer() {
  return (
    <footer className="pt-[clamp(1.8rem,1.8rem+((1vw-0.48rem)*2.885),3rem)]">
      <div className="flex items-center justify-between py-6">
        <Link href="/" className="text-base font-normal no-underline">
          UIO
        </Link>
        <p className="text-sm text-gray-500">
          &copy; United Individuals Organisation
        </p>
      </div>
    </footer>
  );
}
