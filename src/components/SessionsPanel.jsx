import './SessionsPanel.css'
import { sessions } from '../data/data';
import SessionBlock from './SessionBlock';

import Button from './Button';

export default function SessionsPanel() {
  const planned = sessions.filter(s => s.isAttending);
  return (
    <div className="sessions-panel">
      <h2>My sessions</h2>
      <ul>
      {planned.map(session => (
          <li key={session.id}>
            <SessionBlock session={session} />
          </li>
        ))}
      </ul>
      <Button
      text="Find Sessions"
      />
    </div>
  ); 
}

