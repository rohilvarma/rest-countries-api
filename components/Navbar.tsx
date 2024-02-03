import ToggleTheme from "./ToggleTheme"

const Navbar = () => {
  return <nav className=" shadow-md py-8 bg-white dark:bg-dark_blue-dark">
    <div className="container flex justify-between items-center">
    <span className="font-semibold text-lg">
      Where in the world?
    </span>
    <ToggleTheme />
    </div>
  </nav>
}

export default Navbar