import "./CreateSession.css";
import { useState } from "react";

function CreateSession({ sessions, setSessions, setScreen, selectedCourse }) {
const [time, setTime] = useState("");
const [location, setLocation] = useState("");
const [topics, setTopics] = useState("");

const handleSubmit = (e) => {
    e.preventDefault();

    const newSession = {
    id: Date.now(),
    course: selectedCourse,
    time,
    location,
    topics: topics.split(",").map((t) => t.trim()),
    };

    setSessions([...sessions, newSession]);
    setScreen("sessionList");
};

return (
    <div className="createSessionContainer">
    <h1 className="createHeader">Create Study Session</h1>

    <form className="createForm" onSubmit={handleSubmit}>
        <input
        className="createInput"
        type="datetime-local"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        />

        <input
        className="createInput"
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        />

        <input
        className="createInput"
        type="text"
        placeholder="Topics (comma separated)"
        value={topics}
        onChange={(e) => setTopics(e.target.value)}
        />

        <button className="createButton">Create</button>
    </form>
    </div>
);
}

export default CreateSession;
