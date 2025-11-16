import './MyProfile.css'

export default function MyProfile() {
  return (
    <div className="myProfile">
      <img className="myProfilePicture" src="https://static.vecteezy.com/system/resources/thumbnails/020/765/399/small/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg"/>
      <div className="myInformation">
        <h2>My Name</h2>
        <p>Some text about me</p>
      </div>
    </div>
  );
}
