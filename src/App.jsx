import Sidebar from "./components.jsx/Sidebar"
import "./App.css"
import Header from "./components.jsx/Header"
import NoteCard from "./components.jsx/NoteCard"
import NoteForm from "./components.jsx/NoteForm"
import { useEffect, useState } from "react"

function App() {

    const [notes,setNotes] = useState(() => {
        const savedNotes = localStorage.getItem("notes");
        return savedNotes ? JSON.parse(savedNotes) : [];
    });
    const [isFormOpen,setIsFormOpen] = useState(false);
    const [selectedNote,setSelectedNote] = useState(null);
    const [activeFilter, setActiveFilter] = useState("all");

    useEffect(() => {
      localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    const filteredNotes =
    activeFilter === "favorites"
    ? notes.filter((note) => note.isFavorite)
    : notes;

    function handleNewNote(){
      setSelectedNote(null);
      setIsFormOpen(true);
    }

    function handleEditNote(note) {
      setSelectedNote(note);
      setIsFormOpen(true);
    }

    function handleDeleteNote(id){
      setNotes((previousNotes) => previousNotes.filter((note) => note.id !== id));
    }

  function handleSaveNote(noteData){
    if(selectedNote){
      setNotes((previousNotes) =>
        previousNotes.map((note) =>
          note.id === selectedNote.id ? noteData : note
        )
      );
    }else{
      setNotes((previousNotes) => [noteData, ...previousNotes]);
    }
    setIsFormOpen(false);
    setSelectedNote(null);
  }
  function handleCloseForm() {
    setIsFormOpen(false);
    setSelectedNote(null);
  }

  return (
    <div className="app">
      <Sidebar 
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      <main className="main-content">
        <Header onNewNote={handleNewNote}/>
        <div className="notes-grid">
            {filteredNotes.map((note) => (
            <NoteCard
              key={note.id}
              title={note.title}
              content={note.content}
              color={note.color}
              onClick={() => handleEditNote(note)}
              onDelete={() => handleDeleteNote(note.id)}
            />
          ))}
        </div>
      </main>
      {isFormOpen && (
        <NoteForm
          note={selectedNote}
          onSave={handleSaveNote}
          onClose={handleCloseForm}
        />
      )}
    </div>
  )
}

export default App
