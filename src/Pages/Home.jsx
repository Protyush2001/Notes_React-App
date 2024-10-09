// import React from 'react';
// import Sidebar from '../components/Sidebar';
// import Content from '../components/Content';

// function Home() {
//   return (
//     <div
//       style={{
//         height: "100vh",
//         width: "100vw",
//         display: "flex",
//         padding: "0",
//         margin: "0",
//         boxSizing: "border-box",
//         overflow: "hidden",
//       }}
//     >
//       <Sidebar />
//       <Content />
//     </div>
//   );
// }

// export default Home;



import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Content from '../components/Content';

function Home() {
  const [selectedGroup, setSelectedGroup] = useState(null);

  return (
    <div style={{ height: "100vh", width: "100vw", display: "flex", overflow: "hidden" }}>
      <Sidebar onGroupSelect={setSelectedGroup} />
      <Content selectedGroup={selectedGroup} />
    </div>
  );
}

export default Home;
