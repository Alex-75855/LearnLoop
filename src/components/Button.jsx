import './Button.css'

export default function Button({ text, onClick, style }) {
    return (
      <div className="button">
          {text}
      </div>
    );
  }