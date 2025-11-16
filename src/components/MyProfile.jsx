import './MyProfile.css'

export default function MyProfile() {
  return (
    <div className="myProfile">
      <div className="myProfilePictureContainer">
        <img
          className="myProfilePicture"
          src="https://static.vecteezy.com/system/resources/previews/053/630/732/non_2x/a-man-in-a-suit-and-tie-smiling-photo.jpeg"
          alt="John Doe"
        />
      </div>
      <div className="myInformation">
        <h2>John Doe</h2>
        <p className="myProfileMeta">Sauder Commerce • 3rd Year</p>
        <p className="myProfileStatus">Always down for a late-night study sprint.</p>
      </div>
    </div>
  );
}
