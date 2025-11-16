import './SessionBlock.css'


export default function SessionBlock({session}) {
  return (
    <div className="sessionBlockContainer">
        <h2>{session.course}</h2>
    </div>
  ); 
}
