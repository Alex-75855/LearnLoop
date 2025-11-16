import './Dashboard.css'
import SessionsPanel from './components/sessionsPanel'
import FriendsPanel from './components/friendsPanel'

export default function Dashboard() {
  return (
    <div id="panelContainer">
      <SessionsPanel />
      <FriendsPanel />
    </div>
  )
}