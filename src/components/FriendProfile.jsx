import './FriendProfile.css'

export default function FriendProfile() {
  return (
    <div className="friendProfile">
      <img className="friendProfilePicture" src="https://static.vecteezy.com/system/resources/thumbnails/020/765/399/small/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg"/>
      <div className="friendInformation">
        <h2>Friend Name</h2>
        <p>Some text about friend</p>
      </div>
    </div>
  );
}