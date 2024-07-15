import Link from "next/link"
export default function Footer() {
  return (
    <footer className="bg-red-700">
      <section className="flex flex-col sm:flex-row justify-between items-center h-28 text-center font-normal  container mx-auto">
        <span>&copy; 2024 ShoeSafari All Rights Resevered</span>
        <span className="flex gap-2 text-sm ">
          <Link href="/" className="hover:underline hover:underline-offset-1 transition ease-out">
            Term of use
          </Link>
          <Link href="/" className="hover:underline hover:underline-offset-1 transition ease-out">
            Privacy Policy
          </Link>
          <Link href="/" className="hover:underline hover:underline-offset-1 transition ease-out">
            About us
          </Link>
          <Link href="/" className="hover:underline hover:underline-offset-1 transition ease-out">
            24/7 Customer Service
          </Link>
        </span>
      </section>
    </footer>
  );
}
