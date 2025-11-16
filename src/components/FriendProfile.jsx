import './FriendProfile.css'


import './FriendProfile.css'
import { sessions } from "../data/data";

export default function FriendProfile({ person }) {

  // Count how many sessions this person is attending
  const attendanceCount = sessions.filter(
    session => session.attendees.includes(person.id)
  ).length;

  return (
    <div className="friendProfile">
      <div className="friendProfilePictureContainer">
        <img className="friendProfilePicture" src={person.picture} />
      </div>

      <div className="friendInformation">
        <h2>{person.name}</h2>

        <p>
          Sessions attending:{" "}
          {attendanceCount > 0 ? attendanceCount : "None"}
        </p>
      </div>
    </div>
  );
}

