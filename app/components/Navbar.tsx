import Link from "next/link";
import { FaTwitter, FaGithub, FaInstagram, FaLaptop } from "react-icons/fa"

export default function Navbar() {
  return (
    <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
      <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
        <h1 className="text-2xl font-bold text-white grid place-content-center mb-2 md:mb-0">
          <Link href="/" className="text-white/90 no-underline hover:text-white">Thomas Khaemba</Link>
        </h1>
        <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-2xl" >
          <Link href="https://twitter.com/ingasia26" className="text-white/90 hover:text-white">
            <FaTwitter />
          </Link>
          <Link className="text-white/90 hover:text-white" href="http://www.github.com/tomito26">
            <FaGithub />
          </Link>
          <Link className="text-white/90 hover:text-white" href="https://www.instagram.com/_ingasia">
            <FaInstagram />
          </Link>
          <Link href="http://thomaskhaemba.netlify.app/" className="text-white/90 hover:text-white">
            <FaLaptop/>
          </Link>
        </div>
      </div>
    </nav>
  )
}
