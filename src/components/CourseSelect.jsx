import "./CourseSelect.css";
import { useState } from "react";

function CourseSelect({ sessions, setSelectedCourse, setScreen, onJoinSession }) {

  // This stores whatever the user is typing
    const [search, setSearch] = useState("");

  // Filter sessions based on search box
    const filteredSessions = sessions.filter(session =>
    session.course.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="pageContainer">
        
      {/* --- Search + Create Row --- */}
        <h1>Study Sessions</h1>
        <div className="searchRow">
        <input
            type="text"
            placeholder="Search for a course..."
            value={search}
            onChange={(e) => {
            setSearch(e.target.value);
            setSelectedCourse(e.target.value);
            }}
            className="searchInput"
        />

        <button
            onClick={() => setScreen("createSession")}
            className="createButton"
        >
            + Create Session
        </button>
        </div>

      {/* --- Session Cards --- */}
        
        <div>
            <h2>Sessions for: {search}</h2>

            {filteredSessions.length === 0 ? (
            <p>No sessions found.</p>
            ) : (
            filteredSessions.map((session) => (
                <div
                key={session.id}
                className="sessionCard"
                
                >
                <h3>{session.time}</h3>
                <p><strong>Location:</strong> {session.location}</p>
                <p><strong>Topics:</strong> {session.topics.join(", ")}</p>

                <button
                  className={`sessionButton${session.isAttending ? ' joined' : ''}`}
                  onClick={() => onJoinSession(session.id)}
                  disabled={session.isAttending}
                >
                    {session.isAttending ? 'Joined' : 'Join Session'}
                </button>
                </div>
            ))
            )}
        </div>
        
    </div>
    );
}

export default CourseSelect;
