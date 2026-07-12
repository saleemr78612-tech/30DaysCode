import React from "react";
import { Link } from "react-router-dom";

export default function Day5() {
  return (
    <div>
      <nav>
        <ul
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            listStyle: "none",
          }}
        >
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <main>
        <h1>This Is Home Page</h1>
      </main>
    </div>
  );
}