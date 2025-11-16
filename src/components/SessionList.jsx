import "./SessionList.css";
import "./CourseSelect.css";
import { people } from "../data/data";

function SessionList({ sessions, selectedCourse, setScreen, onStartJoin }) {
  const normalizedCourse = (selectedCourse || "").toLowerCase();
  const filtered = sessions.filter(
    (s) => s.course.toLowerCase() === normalizedCourse
  );
  const courseLabel = selectedCourse || "Your Course";

  return (
    <div className="sessionListContainer">
      <div className="sessionListHeader">
        <div>
          <p className="breadcrumb">Study Sessions</p>
          <h1>{courseLabel}</h1>
        </div>

        <button className="createButton ghost" onClick={() => setScreen("createSession")}>
          + Create Session
        </button>
      </div>

      {filtered.length === 0 && (
        <div className="sessionListEmpty">
          <p className="noSessions">No sessions found for this course.</p>
          <button
            className="sessionButton"
            onClick={() => setScreen("createSession")}
          >
            Start the first one
          </button>
        </div>
      )}

      <div className="sessionListGrid">
        {filtered.map((session) => {
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
            <div key={session.id} className="sessionCard sessionCardList">
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
                  className={`sessionButton${
                    session.isAttending ? " joined" : ""
                  }`}
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
        })}
      </div>
    </div>
  );
}

export default SessionList;
