import './Sessions.css'

import { useState } from 'react'
import CourseSelect from './components/CourseSelect'
import SessionList from './components/SessionList'
import CreateSession from './components/CreateSession'
import { sessions as initialSessions } from './data/data'

 

export default function FindSessions() {
  const [sessions, setSessions] = useState(initialSessions)
  const [selectedCourse, setSelectedCourse] = useState('')
  const [screen, setScreen] = useState('selectCourse')

  function handleJoinSession(sessionId) {
    setSessions((prevSessions) =>
      prevSessions.map((session) =>
        session.id === sessionId ? { ...session, isAttending: true } : session
      )
    )
  }

  return (
    <div className="sessionsContainer">
      {screen === 'selectCourse' && (
        <CourseSelect 
          sessions={sessions}
          onJoinSession={handleJoinSession}
          setSelectedCourse={setSelectedCourse} 
          setScreen={setScreen} 
        />
      )}

      {screen === 'sessionList' && (
        <SessionList 
          sessions={sessions}
          onJoinSession={handleJoinSession}
          selectedCourse={selectedCourse}
          setScreen={setScreen}
        />
      )}

      {screen === 'createSession' && (
        <CreateSession 
          sessions={sessions}
          setSessions={setSessions}
          setScreen={setScreen}
          selectedCourse={selectedCourse}
        />
      )}
    </div>
  );
}
