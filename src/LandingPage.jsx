import './LandingPage.css';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="landingContainer">
      <div className="landingContent">
        <p className="eyebrow">Welcome to</p>
        <h1 className="landingTitle">Learn Loop</h1>
        <p className="landingParagraph">
          Learn Loop keeps every study session, classmate, and course in one friendly dashboard so you can
          discover new groups, plan ahead, and stay motivated together.
        </p>
        <Link to="/dashboard" className="landingCTA">
          Launch Learn Loop
        </Link>
      </div>
    </div>
  );
}
