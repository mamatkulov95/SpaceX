import { Link } from "react-router-dom";

import data from "@/assets/data.json";
import "./Hero.css";

export default function Hero() {
  const { rightContent } = data;

  return (
    <div className="hero">
      <div className="left-content">
        <h1 className="left-title">ПУТЕШЕСТВИЕ</h1>
        <p className="left-title left-title-subcontent">на красную планету</p>
        <Link className="left-btn" to={"/about"}>
          <span>Начать путашествие</span>
        </Link>
      </div>{" "}
      <div className="right-content">
        <div className="content-data">
          {rightContent.map(({ name, number, content }, index) => (
            <div key={index}>
              <p>{name}</p>
              <p className="content-numbers">{number}</p>
              <p>{content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
