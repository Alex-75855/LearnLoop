import './MyProfile.css'

export default function MyProfile() {
  return (
    <div className="myProfile">
      <div className="myProfilePictureContainer">
        <img className="myProfilePicture" src="https://static.vecteezy.com/system/resources/previews/053/630/732/non_2x/a-man-in-a-suit-and-tie-smiling-photo.jpeg"/>
      </div>
      <div className="myInformation">
        <h2>John Doe</h2>
      </div>
    </div>
  );
}
