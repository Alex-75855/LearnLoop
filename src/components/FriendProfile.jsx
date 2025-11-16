import './FriendProfile.css'


export default function FriendProfile({person}) {
  return (
    <div className="friendProfile">
      <div className="friendProfilePictureContainer">
        <img className="friendProfilePicture" src={person.picture}/>
      </div>
      <div className="friendInformation">
        <h2>{person.name}</h2>
        <p>Some text about friend</p>
      </div>
    </div>
  );
} 