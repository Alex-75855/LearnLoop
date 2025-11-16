import './FriendsPanel.css'
import MyProfile from "./MyProfile"
import FriendProfile from "./FriendProfile"
import { people } from '../data/data';

export default function FriendsPanel() {
  const friends = people.filter(p => p.isFriend);
  return (
    <div className="friends-panel">
      <MyProfile />
      <ul className="friends-list">
        <li><h2>Friends</h2></li>
        {friends.map(friend => (
          <li key={friend.name}>
            <FriendProfile person={friend} />
          </li>
        ))}
      </ul>
    </div>
  );
}
