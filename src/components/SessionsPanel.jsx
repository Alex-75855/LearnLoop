import './SessionsPanel.css'

import Button from './Button';

export default function SessionsPanel() {
  return (
    <div className="sessions-panel">
      <h2>My sessions</h2>
      <ul>
        <li>My Session</li>
        <li>My Session</li>
        <li>My Session</li>
      </ul>
      <Button
      text="Find Sessions"
      />
    </div>
  );
}
