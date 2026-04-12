import Link from "next/link";

export const runtime = "edge";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="font-mono-custom text-[#2E2E2E] mb-6">404</p>
        <h1 className="font-serif text-3xl md:text-4xl text-[#E8E5DF] font-light mb-6">
          Page Not Found
        </h1>
        <p className="text-sm text-[#888888] mb-10">
          お探しのページは見つかりませんでした。
        </p>
        <Link
          href="/"
          className="text-xs tracking-[0.2em] uppercase text-[#E8E5DF] hover:opacity-60 transition-opacity link-underline"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
