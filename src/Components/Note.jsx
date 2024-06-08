import React, { useState } from 'react';
import './note.css';
function NotePad() {
  
    // this is use states
  const [notes, setNotes] = useState([]);
  const [inputValue, setInputValue] = useState('');

    
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      setNotes([...notes, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div className="notepad">
    
        {/* this is header top of notepad */}
      <h1>Manender Bhati Notepad</h1>

      {/* this if form */}
      <form onSubmit={handleSubmit}>
        
    {/* input field for write */}
        <input
          type="text"
          placeholder="Enter your note"
          value={inputValue}
          onChange={handleChange}
        />

        {/* button for submit note */}
        <button type="submit">Add Note</button>
      
      </form>

      {/* in this we iterate on array and all notes display  */}
      <div className="note-list">
        {notes.map((note, index) => (
          <div className="note" key={index}>
            {note}
          </div>
        ))}
      </div>
    </div>
  );
}

export default NotePad;
