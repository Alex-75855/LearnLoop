import './FriendProfile.css'
import { sessions } from "../data/data";

export default function FriendProfile({ person }) {
  const attendanceCount = sessions.filter(
    session => session.attendees.includes(person.id)
  ).length;

  return (
    <div className="friendProfile">
      <div className="friendProfilePictureContainer">
        <img className="friendProfilePicture" src={person.picture} alt={person.name} />
      </div>

      <div className="friendInformation">
        <h2>{person.name}</h2>
        <p className="friendSubtitle">{person.major}</p>

        <p className="friendSessions">
          Sessions attending:{" "}
          <span className="friendSessionsCount">
            {attendanceCount > 0 ? attendanceCount : "None"}
          </span>
        </p>
      </div>
    </div>
  );
}
