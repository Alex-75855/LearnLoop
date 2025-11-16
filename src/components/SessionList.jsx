function SessionList({ sessions, selectedCourse, setScreen }) {
    const filtered = sessions.filter(
    s => s.course.toLowerCase() === selectedCourse.toLowerCase()
    );

    return (
    <div>
        <h1>Study Sessions for {selectedCourse}</h1>

        {filtered.length === 0 && (
        <>
            <p>No sessions found.</p>
            <button onClick={() => setScreen("createSession")}>
            Create Your Own Study Group
            </button>
        </>
        )}

        {filtered.map(session => (
        <div key={session.id} className="card">
            <h2>{session.time}</h2>
            <p><strong>Location:</strong> {session.location}</p>
            <p><strong>Topics:</strong> {session.topics.join(", ")}</p>
            <button>Join</button>
        </div>
        ))}

        <button onClick={() => setScreen("createSession")}>
        Create New Session
        </button>
    </div>
    );
}

export default SessionList;
