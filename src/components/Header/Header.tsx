import { Link } from "react-router-dom";
import { NavMenu } from "@/assets/interface";
import data from "@/assets/data.json";

import companyLogo from "/photos/company-logo.svg";
import "./Header.css";

export default function Header() {
  const { navMenus } = data;

  return (
    <div className="header">
      <div className="main-header">
        <Link to="/" className="company-logo">
          <img src={companyLogo} alt="company-logo" />
        </Link>

        <ul className="nav-menu">
          {navMenus.map(({ path, label }: NavMenu, index: number) => (
            <Link to={path} className="nav-menus" key={index}>
              {label}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
