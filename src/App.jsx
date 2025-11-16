import './App.css'

import FriendsPanel from './components/FriendsPanel'
import SessionsPanel from './components/SessionsPanel'

function App() {
  return (
    <div id="panelContainer">
      <SessionsPanel />
      <FriendsPanel />
    </div>
  )
}

export default App
