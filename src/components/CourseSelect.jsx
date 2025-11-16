import { useState } from "react";

function CourseSelect({ setSelectedCourse, setScreen }) {
const [course, setCourse] = useState("");

const handleSubmit = (e) => {
    e.preventDefault();
    setSelectedCourse(course);
    setScreen("sessionList");
};

return (
    <div>
    <h1>Select Your Course</h1>

    <form onSubmit={handleSubmit}>
        <input 
        type="text"
        placeholder="CHEM 154"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
        />
        <button>Find Study Groups</button>
    </form>
    </div>
);
}

export default CourseSelect;
