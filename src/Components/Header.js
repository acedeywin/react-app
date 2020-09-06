import React from "react";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className="border-b p-3 justify-between items-center">
      <Navigation />
    </header>
  );
}

export default Header;
