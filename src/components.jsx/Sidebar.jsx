import "./Sidebar.css"
import {Star,Search} from 'lucide-react'

function Sidebar({ activeFilter, onFilterChange }) {
  return (
    <aside className="sidebar">
        <h2 className="sidebar-title">
            <Star size={20} className="shrink-0"></Star>Notes App</h2>
        <nav className="sidebar-nav">
            <button 
                className={`sidebar-btn ${activeFilter === "all" ? "active" : ""}`}
                onClick={() => onFilterChange("all")}
            >
            <Search size={16}></Search>All Notes</button>
            <button 
                className={`sidebar-btn ${activeFilter === "favorites" ? "active" : ""}`}
                onClick={() => onFilterChange("favorites")}
            >
            <Star size={16}></Star>Favourites</button>
        </nav>
    </aside>
  )
}

export default Sidebar