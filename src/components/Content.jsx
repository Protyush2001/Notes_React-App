



import React, { useState, useEffect } from 'react';

function Content({ selectedGroup }) {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  // Load notes when the group changes
  useEffect(() => {
    if (selectedGroup) {
      const storedNotes = JSON.parse(localStorage.getItem(selectedGroup.name)) || [];
      setNotes(storedNotes);
    }
  }, [selectedGroup]);

  // Save notes to localStorage when notes change
  useEffect(() => {
    if (selectedGroup) {
      localStorage.setItem(selectedGroup.name, JSON.stringify(notes));
    }
  }, [notes, selectedGroup]);

  const handleNoteSubmit = () => {
    if (newNote.trim()) {
      const currentDate = new Date();
      const newNoteObj = {
        text: newNote,
        date: currentDate.toLocaleDateString(),
        time: currentDate.toLocaleTimeString(),
        updatedAt: currentDate
      };
      setNotes([...notes, newNoteObj]);
      setNewNote('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleNoteSubmit();
    }
  };

  if (!selectedGroup) {
    return (
      <div
        style={{
          height: "100vh",
          width: "70vw",
          backgroundColor: "#DAE5F5",
          boxSizing: "border-box",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
        }}
      >

<img
        src="./src/image/image-removebg-preview 1.png"
        style={{
          width: "50%",
          maxWidth: "400px",
          height: "auto",
          marginBottom: "20px",
        }}
        alt="Pocket Notes"
      />
        
        <h2>Pocket Notes</h2>
        <p style={{ textAlign: "center", maxWidth: "500px" }}>
         Send and receive messages without keeping your phone online. Use Pocket Notes on up to 4 linked devices and 1 mobile phone.
       </p>
       <div className='Footer' style={{marginTop:"15rem", marginLeft:"3rem"}}>
            <img style = {{height:"1rem"}} src='.\src\image\Vector (3).png' />
            <span style={{marginLeft:"1rem"}}>end-to-end encrypted</span>
         </div>
      </div>
    );
  }

  return (
    <div
      style={{
        height: "100vh",
        width: "70vw",
        backgroundColor: "#DAE5F5",
        boxSizing: "border-box",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px",
      }}
    >


      {/* Header Section */}
      <div style={headerStyle}>
        <div style={groupInfoStyle}>
          <div style={groupIconStyle}>{selectedGroup.name.split(' ').map(word => word[0]).join('').toUpperCase()}</div>
          <h2 style={groupNameStyle}>{selectedGroup.name}</h2>
        </div>
      </div>

   

            {/* Notes Display Section */}
            <div style={notesContainerStyle}>
        {notes.map((note, index) => (
          <div key={index} style={noteCardStyle}>
            <p style={{ margin: "0", fontSize: "14px" }}>{note.text}</p>
            <div style={noteMetaStyle}>
              <span>{note.date}</span>
              <span>{note.time}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Input and submit button */}
      <div style={{ ...inputContainerStyle, marginTop: "" }}>
        <input
          type="text"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter your text here..."
          style={inputStyle}
        />
        <button onClick={handleNoteSubmit} style={submitButtonStyle}>
          ➤
        </button>
      </div>

    
    </div>
  );
}


// Header styles
const headerStyle = {
    backgroundColor: "#003F88",
    // padding: "10px 20px",
    display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    color: "#fff",
    width:'104%',
    height:'10%',
    margin:'0',
    padding:'',
    marginTop:'-20px'
  };
  
  const groupInfoStyle = {
    display: "flex",
    alignItems: "center",
    height:'100%',
    width:'100%',
    
  };
  
  const groupIconStyle = {
    backgroundColor: "#2063FB",
    color: "#fff",
    fontSize: "20px",
    fontWeight: "bold",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "10px",
  };
  
  const groupNameStyle = {
    fontSize: "20px",
    fontWeight: "normal",
    margin: 0,
  };
  
  // Notes display styles
  const notesContainerStyle = {
    padding: "20px",
    flexGrow: 1,
    width:'100%',
    overflowY: "auto",
    backgroundColor: "#F4F4F4",
  };
  
  const noteCardStyle = {
    backgroundColor: "#fff",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "10px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  };
  
  const noteMetaStyle = {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "12px",
    color: "#777",
    marginTop: "5px",
  };
  
  // Input section styles
  const inputContainerStyle = {
    display: "flex",
    // alignItems: "center",
    padding: "50px",
    backgroundColor: "#003F88",
    width:'100%',
    marginBottom:'-18px'
  };
  
  const inputStyle = {
    // flex: 1,
    width:'150%',
    height:'230%',
    padding: "10px",
    // marginRight: "10px",
    borderRadius: "8px",
    border: "none",
    outline: "none",
    fontSize: "14px",
     backgroundColor: "white",
    //  marginBottom:'-40px',
     marginTop:'-40px',
     marginRight:'-58px',
     marginLeft:'-10px',
     color:'black'
  };
  
  const submitButtonStyle = {
    backgroundColor: "white",
    color: "grey",
    border: "none",
    borderRadius: "50%",
    padding: "10px",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "22px",
  };

  
  

export default Content;
