import React from "react";
import SigninButton from "./SiginButton";

const Navbar = () => {
  return (
    <header className="flex gap-4 p-4 bg-gradient-to-b from-white to-gray-200 shadow">
      <h1>Markilang</h1>
      <SigninButton />
    </header>
  );
};

export default Navbar;
