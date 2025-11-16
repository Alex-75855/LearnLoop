import "./CourseSelect.css";
import { useState } from "react";
import { people } from "../data/data";

function CourseSelect({ sessions, setSelectedCourse, setScreen, onStartJoin }) {
  const [search, setSearch] = useState("");

  const filteredSessions = sessions.filter((session) =>
    session.course.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="pageContainer">
      <div className="headerRow">
        <div>
          <p className="breadcrumb">Find a group</p>
          <h1>Study Sessions</h1>
        </div>
        <button onClick={() => setScreen("createSession")} className="createButton">
          + Create Session
        </button>
      </div>

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
      </div>

      <div className="sessionListSection">
        <h2>Sessions for: {search || "All courses"}</h2>

        {filteredSessions.length === 0 ? (
          <p className="emptyCopy">No sessions found. Try another course!</p>
        ) : (
          filteredSessions.map((session) => {
            const organizer = people[session.organizerId];
            const attendeeIds = session.attendees || [];
            const attendeePeople = attendeeIds
              .map((id) => people.find((person) => person.id === id))
              .filter(Boolean);
            const allParticipants = organizer
              ? [organizer, ...attendeePeople]
              : attendeePeople;
            const topics = session.topics || [];

            return (
              <div key={session.id} className="sessionCard">
                <div className="sessionCardHeader">
                  <div>
                    <p className="sessionCourse">{session.course}</p>
                    <p className="sessionMeta">
                      <span>{session.time}</span>
                      <span className="separator">•</span>
                      <span>{session.location}</span>
                    </p>
                  </div>

                  <button
                    className={`sessionButton${session.isAttending ? " joined" : ""}`}
                    onClick={() => onStartJoin(session)}
                    disabled={session.isAttending}
                  >
                    {session.isAttending ? "Joined" : "Join Session"}
                  </button>
                </div>

                <div className="sessionCardBody">
                  <div className="sessionAttendeesGroup">
                    <span className="sessionCardLabel">Study Crew</span>
                    <div className="sessionAvatarStack">
                      {allParticipants.map((person) => (
                        <img
                          key={`${session.id}-${person.id}`}
                          className="sessionAvatar"
                          src={person.picture}
                          alt={person.name}
                        />
                      ))}
                    </div>
                  </div>

                  {topics.length > 0 && (
                    <div className="sessionTopics">
                      {topics.map((topic, index) => (
                        <span key={`${session.id}-topic-${index}`} className="sessionTopicPill">
                          {topic}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default CourseSelect;
