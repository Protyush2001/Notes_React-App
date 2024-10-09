


import React, { useState, useEffect } from 'react';
import NoteItem from './NoteItem';
import GroupModal from './GroupModal';

function Sidebar({ onGroupSelect }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [groups, setGroups] = useState([]);
  
  useEffect(() => {
    const storedGroups = JSON.parse(localStorage.getItem('groups')) || [];
    setGroups(storedGroups);
  }, []);

  useEffect(() => {
    localStorage.setItem('groups', JSON.stringify(groups));
  }, [groups]);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const addGroup = (newGroup) => {
    setGroups([...groups, newGroup]);
  };

  return (
    <div style={sidebarStyle}>
      <h2>Pocket Notes</h2>
      <ul style={{ listStyle: 'none', padding: '0' }}>
        {groups.map((group, index) => (
          <li key={index} onClick={() => onGroupSelect(group)}>
            <NoteItem
              short={group.name.split(' ').map(word => word[0]).join('').toUpperCase()}
              label={group.name}
              color={group.color}
            />
          </li>
        ))}
      </ul>
      <div><button onClick={openModal} style={addButtonStyle}>+</button></div>
      {isModalOpen && <GroupModal onClose={closeModal} onSave={addGroup} />}
    </div>
  );
}

const sidebarStyle = {
  // width: isMobile ? '80px' : '250px', // Adjust based on screen size
  width: '30vw',
  height: '100vh',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  borderRight: '1px solid #ccc',
  // position: 'sticky',
  // top: '0'
};

const addButtonStyle = {
  fontSize: '50px',
  backgroundColor: 'blue',
  borderRadius: '50%',
  color: 'white',
  border: 'none',
  width: '50px',
  height: '50px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '20%',
  marginLeft: '80%',
  position:'sticky',
  // left:'8rem',
  // bottom:'1rem',
  zIndex:'1000'
};

export default Sidebar;
