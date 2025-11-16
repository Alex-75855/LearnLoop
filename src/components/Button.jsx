import './Button.css'
import { Link } from "react-router-dom";

export default function Button({ text, to = "/Find_Sessions" }) {
  return (
    <Link to={to} className="button">
      {text}
    </Link>
  );
}
