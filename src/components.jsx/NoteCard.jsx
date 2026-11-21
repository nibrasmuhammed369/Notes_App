import { Edit, Edit2, Trash } from "lucide-react"
import "./NoteCard.css"

function NoteCard({ title, content, color, onClick, onDelete }) {
  return (
    <div
      className="note-card"
      style={{ backgroundColor: color }}
    >
      <h3>{title}</h3>
      <p>{content}</p>
      <div className="btn">
          <button onClick={onClick}><Edit2 size={16}></Edit2></button>
          <button 
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
          ><Trash size={16}></Trash></button>
      </div>
    </div>
  )
}

export default NoteCard