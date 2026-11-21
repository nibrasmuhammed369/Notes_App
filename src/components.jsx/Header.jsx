import { Plus } from "lucide-react"
import "./Header.css"

function Header({onNewNote}) {
  return (
    <header className="header">
        <h1 className="header-title">My Notes</h1>
        <button className="new-note-btn" onClick={onNewNote}>
            <Plus size={16}></Plus>New Note</button>
    </header>
  )
}

export default Header