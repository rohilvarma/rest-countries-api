import ToggleTheme from "./ToggleTheme"
import Link from "next/link"
const Navbar = () => {
  return <nav className=" shadow-md py-8 bg-white dark:bg-dark_blue-dark">
    <div className="container flex justify-between items-center">
    <Link href={'/'} className="font-black text-lg lg:text-2xl">
      Where in the world?
    </Link>
    <ToggleTheme />
    </div>
  </nav>
}

export default Navbar