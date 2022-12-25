import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark text-light p-3">
      <a className="navbar-brand" href="/">
        RockPaperScissor
      </a>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              AI
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              User
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
