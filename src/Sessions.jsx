import './Sessions.css'

import { useState } from 'react'
import CourseSelect from "./components/CourseSelect";
import SessionList from "./components/SessionList";
import CreateSession from "./components/CreateSession";
import { sampleSessions } from "./data/SampleSessions";

 

export default function FindSessions() {
  const [count, setCount] = useState(0)
  const [sessions, setSessions] = useState(sampleSessions);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [screen, setScreen] = useState("selectCourse");

  return (
    <div className="sessionsContainer" >
      {screen === "selectCourse" && (
        <CourseSelect 
          sessions={sessions}
          setSelectedCourse={setSelectedCourse} 
          setScreen={setScreen} 
        />
      )}

      {screen === "sessionList" && (
        <SessionList 
          sessions={sessions}
          selectedCourse={selectedCourse}
          setScreen={setScreen}
        />
      )}

      {screen === "createSession" && (
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