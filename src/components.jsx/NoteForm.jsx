import { useState } from "react"
import "./NoteForm.css"

function NoteForm({note,onSave,onClose}) {
  
    const [title,setTitle] = useState(note?.title || "");
    const [content,setContent] = useState(note?.content || "");
    const [color,setColor] = useState(note?.color || "#ffffff");
    const [isFavorite,setIsFavorite] = useState(note?.isFavorite || false);
    const [error,setError] = useState("");

    function handleSubmit(e){
        e.preventDefault();

        if(!title.trim() || !content.trim()){
            setError("Please enter both title and content.");
            return;
        }
        onSave({
            id: note?.id ?? Date.now(),
            title: title.trim(),
            content: content.trim(),
            color,
            isFavorite,
        });
    }

    return(
        <div className="model" onClick={onClose}>
            <form 
              className="note-form"
              onSubmit={handleSubmit}
              onClick={(e) => e.stopPropagation()}
            >
                <h2>{note ? "Edit Note" : "Create New Note"}</h2>

                <label>Title</label>
                <input
                 type="text"
                 placeholder="Enter note title"
                 value={title}
                 onChange={(e) => setTitle(e.target.value)}
                ></input>

                <label>Content</label>
                <textarea
                 placeholder="Write your note..."
                 value={content}
                 onChange={(e) => setContent(e.target.value)}
                 rows="6"
                ></textarea>

                {error && <p className="form-error">{error}</p>}

                <label>Choose Note Color</label>
                <div className="color-options">
                    {["#ffffff", "#fef3c7", "#dcfce7", "#dbeafe", "#fce7f3"].map(
                        (noteColor) => (
                            <button
                                key={noteColor}
                                type="button"
                                className={`color-option ${color === noteColor ? "selected" : ""}`}
                                style={{backgroundColor: noteColor}}
                                onClick={() => setColor(noteColor)}
                            ></button>
                        )
                    )}
                </div>

                <label className="favorite-option">
                    <input
                        type="checkbox"
                        checked={isFavorite}
                        onChange={(e) => setIsFavorite(e.target.checked)}
                    ></input>
                    Add to Favourites
                </label>

                <div className="form-actions">
                    <button type="button" onClick={onClose} className="cancel-btn">
                        Cancel
                    </button>

                    <button type="submit" className="save-btn">
                        Save Note
                    </button>
                </div>
            </form>
        </div>
    )

  
}

export default NoteForm