import Link from "next/link";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="nav">
      <ul>
        <li>
          <Link href="/"> Home</Link>
        </li>
        <li>
          <Link href="/todos"> Todos</Link>
        </li>
        <li>
          <Link href="/contact"> Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
