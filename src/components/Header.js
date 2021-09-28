import React from "react";
import { GiWallet } from "react-icons/gi";
import { SiReact } from "react-icons/si";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="header-logo">
          <h1>Xpenser</h1>
          <GiWallet className="wallet-logo" />
        </div>
        <div>
          <SiReact className="git-logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
