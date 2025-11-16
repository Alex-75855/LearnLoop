import './FriendsPanel.css'
import MyProfile from "./MyProfile"
import FriendProfile from "./FriendProfile"

export default function FriendsPanel() {
  return (
    <div className="friends-panel">
      <MyProfile />
      <h2>Friends</h2>
      <ul className="friends-list">
        <li><FriendProfile /></li>
        <li><FriendProfile /></li>
        <li><FriendProfile /></li>
      </ul>
    </div>
  );
}
