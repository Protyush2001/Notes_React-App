import React, { useState } from 'react';

function GroupModal({ onClose, onSave }) {
  const [groupName, setGroupName] = useState('');
  const [selectedColor, setSelectedColor] = useState(null);
  
  const colors = ['#d1a8ff', '#ff95c5', '#69f0ff', '#ffbeaa', '#337aff', '#87aaff'];

  const handleOutsideClick = (e) => {
    if (e.target.id === 'modal-background') {
      onClose();
    }
  };

  const handleSave = () => {
    if (groupName.trim() && selectedColor) {
      onSave({ name: groupName, color: selectedColor });
      setGroupName('');
      onClose();
    }
  };

  return (
    <div id="modal-background" style={modalBackgroundStyle} onClick={handleOutsideClick}>
      <div style={modalContentStyle}>
        <h3>Create New Group</h3>
        <div style={formGroupStyle}>
          <label>Group Name</label>
          <input
            type="text"
            placeholder="Enter group name"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label>Choose Color</label>
          <div style={colorPickerContainer}>
            {colors.map((color, index) => (
              <div
                key={index}
                onClick={() => setSelectedColor(color)}
                style={{
                  ...colorCircleStyle,
                  backgroundColor: color,
                  border: selectedColor === color ? '2px solid #000' : 'none'
                }}
              />
            ))}
          </div>
        </div>
        <div style={buttonGroupStyle}>
          <button onClick={onClose} style={cancelButtonStyle}>Cancel</button>
          <button onClick={handleSave} style={saveButtonStyle}>Create</button>
        </div>
      </div>
    </div>
  );
}

const modalBackgroundStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
};

const modalContentStyle = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '8px',
  width: '400px',
  textAlign: 'center',
};

const formGroupStyle = {
  marginBottom: '15px',
  
};

const inputStyle = {
  width: '95%',
  padding: '10px',
  fontSize: '16px',
  backgroundColor:'white',
  color:'black',
  borderStyle:'none',
  border:'1px solid black'
};

const colorPickerContainer = {
  display: 'flex',
  justifyContent: 'center',
};

const colorCircleStyle = {
  width: '30px',
  height: '30px',
  borderRadius: '50%',
  margin: '0 5px',
  cursor: 'pointer',
};

const buttonGroupStyle = {
  display: 'flex',
  justifyContent: 'space-between',
};

const cancelButtonStyle = {
  padding: '10px 20px',
  backgroundColor: 'red',
  color: '#fff',
  border: 'none',
  cursor: 'pointer',
};

const saveButtonStyle = {
  padding: '10px 20px',
  backgroundColor: 'blue',
  color: '#fff',
  border: 'none',
  cursor: 'pointer',
};



export default GroupModal;
