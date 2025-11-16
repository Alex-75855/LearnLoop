import "./SessionList.css";

function SessionList({ sessions, selectedCourse, setScreen, onJoinSession }) {
  const filtered = sessions.filter(
    (s) => s.course.toLowerCase() === selectedCourse.toLowerCase()
  );

  return (
    <div className="session-list-container">
      <h1>Study Sessions for {selectedCourse}</h1>

      {filtered.length === 0 && (
        <>
          <p className="no-sessions">No sessions found.</p>
          <button
            className="create-button"
            onClick={() => setScreen("createSession")}
          >
            Create Your Own Study Group
          </button>
        </>
      )}

      {filtered.map((session) => (
        <div key={session.id} className="card">
          <h2>{session.time}</h2>
          <p>
            <strong>Location:</strong> {session.location}
          </p>
          <p>
            <strong>Topics:</strong> {session.topics.join(", ")}
          </p>

          <button
            className={`sessionButton${session.isAttending ? ' joined' : ''}`}
            onClick={() => onJoinSession(session.id)}
            disabled={session.isAttending}
          >
            {session.isAttending ? 'Joined' : 'Join'}
          </button>
        </div>
      ))}

      <button
        className="create-button"
        onClick={() => setScreen("createSession")}
      >
        Create New Session
      </button>
    </div>
  );
}

export default SessionList;
