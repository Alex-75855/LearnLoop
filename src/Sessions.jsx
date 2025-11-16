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
  const [pendingAssignment, setPendingAssignment] = useState(null)

  function handleJoinSession(sessionId) {
    setSessions((prevSessions) =>
      prevSessions.map((session) =>
        session.id === sessionId ? { ...session, isAttending: true } : session
      )
    )
  }

  function startJoinFlow(session) {
    if (session.isAttending) return
    const topics = session.topics || []
    if (topics.length > 0) {
      const randomTopic = topics[Math.floor(Math.random() * topics.length)]
      setPendingAssignment({ session, topic: randomTopic })
    } else {
      handleJoinSession(session.id)
    }
  }

  function handleConfirmAssignment() {
    if (!pendingAssignment) return
    handleJoinSession(pendingAssignment.session.id)
    setPendingAssignment(null)
  }

  function handleCloseModal() {
    setPendingAssignment(null)
  }

  return (
    <div className="sessionsContainer">
      {screen === 'selectCourse' && (
        <CourseSelect 
          sessions={sessions}
          onStartJoin={startJoinFlow}
          setSelectedCourse={setSelectedCourse} 
          setScreen={setScreen} 
        />
      )}

      {screen === 'sessionList' && (
        <SessionList 
          sessions={sessions}
          onStartJoin={startJoinFlow}
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

      {pendingAssignment && (
        <div className="topicModalOverlay" onClick={handleCloseModal}>
          <div className="topicModal" onClick={(e) => e.stopPropagation()}>
            <h3>You’ve been assigned:</h3>
            <p className="modalTopic">{pendingAssignment.topic}</p>
            <p className="modalCourse">{pendingAssignment.session.course}</p>
            <button className="modalAction primary" onClick={handleConfirmAssignment}>
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
