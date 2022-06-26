import { NavLink } from "react-router-dom";

const NavbarContext = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contact">Contatos</NavLink>
      <NavLink to="/about">Sobre</NavLink>
    </nav>
  );
};

export default NavbarContext;
