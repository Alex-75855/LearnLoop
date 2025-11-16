import './Button.css'
import { Link } from "react-router-dom";


export default function Button({ text, onClick, style }) {
    return (
        <Link to="/Find_Sessions">
            <div className="button">
                {text}
            </div>
        </Link>
    );
  }