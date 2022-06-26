import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      {/* <Link to="/">Home</Link>
      <Link to="/About">About</Link>*/}
      <NavLink to="/">Home</NavLink>
      <NavLink to="/About">Sobre</NavLink>
    </nav>
  );
};
