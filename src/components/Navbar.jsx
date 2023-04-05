import React from "react";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [user, setUser] = setUser({ name: "bob" });
  return (
    <nav className="navbar">
      <h5>CONTEXT API</h5>
      <NavLinks user={user} logout={logout} />
    </nav>
  );
};

export default Navbar;
