import React, { useState } from "react";

function NewNote({ onSave, onCancel }) {
  const [text, setText] = useState("");

  return (
    <div className="modal-overlay"> 
      <div className="new-note-box" style={{ border: '1px solid #ccc', padding: '20px', background: 'white', position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 100 }}>
        <h3 style={{ textAlign: 'center' }}>New Note</h3>
        <textarea 
          style={{ width: '100%', minHeight: '100px' }}
          placeholder="Input your note"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between' }}>
          <button onClick={onCancel}>Cancel</button>
          <button onClick={() => onSave(text)}>Apply</button>
        </div>
      </div>
    </div>
  );
}

export default NewNote;
