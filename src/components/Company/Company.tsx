import { Link } from "react-router-dom";
import "./Company.css";

export default function Company() {
  return (
    <div className="company">
      <h1>
        “You want to wake up in the morning and think the future is going to be
        great - and that’s what being a spacefaring civilization is all about.
        It’s about believing in the future and thinking that the future will be
        better than the past. And I can’t think of anything more exciting than
        going out there and being among the stars.” -Elon Musk
      </h1>
      <Link className="click-here" to="/">
        Click here for home
      </Link>
    </div>
  );
}
