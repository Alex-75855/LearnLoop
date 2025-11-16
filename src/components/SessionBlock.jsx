import './SessionBlock.css'
import { people } from '../data/data';
import Button from './Button';

export default function SessionBlock({ session }) {
  return (
    <div className="sessionBlockContainer">
      <div className="column">
        <div className="courseInformation">
            <h2>{session.course}</h2>
            <h4>Time: {session.time}</h4>
            <h4>Location: {session.location}</h4>
        </div>

        <div className="attendees">
            <div className='inlineOrganizerPictureContainer'>
            <img className="inlineFriendPicture"
                    src={people[session.organizerId].picture}
                    alt={people[session.organizerId].name}
                    />
            </div>
                {session.attendees.map(id => {
                const person = people.find(p => p.id === id);
                return (
                    <div className="inlineFriendPictureContainer">
                        <img className="inlineFriendPicture"
                        key={id}
                        src={person.picture}
                        alt={person.name}
                        />
                    </div>
                );
                })}
        </div>
      </div>

      <div className="column2">
            {session.topics.map((topic, index) => (
            <p key={index} className='topic'>{topic}</p>
            ))}
        </div>
    </div>
  );
}
