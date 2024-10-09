

import React from 'react';

function NoteItem({ short, label, color }) {
  return (
    <li style={noteItemContainerStyle}>
      <div style={{ ...noteItemAvatarStyle, backgroundColor: color }}>
        {short}
      </div>
      <div style={noteItemLabelStyle}>
        {label}
      </div>
    </li>
  );
}

const noteItemContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '15px', // Add spacing between note items
};

const noteItemAvatarStyle = {
  padding: '10px',
  borderRadius: '50%', // Circular avatar
  width: '40px', // Fixed width for circular shape
  height: '40px', // Fixed height for circular shape
  color: '#fff',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '14px', // Smaller font size for initials
  fontWeight: 'bold', // Bold initials
  backgroundColor: '#2063FB', // Default background color for the circle
};

const noteItemLabelStyle = {
  fontSize: '14px',
  fontWeight: 'normal',
  marginLeft: '15px', // Add space between avatar and label
  color: '#000', // Black font for the label text
};


export default NoteItem;
