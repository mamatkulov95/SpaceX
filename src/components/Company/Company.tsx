import { Link } from "react-router-dom";
import "./Company.css";

export default function Company() {
  return (
    <div className="company">
      <h1>Sagirov</h1>
      <Link className="click-here" to="/">
        Click here for home
      </Link>
    </div>
  );
}
