import React, { useState } from 'react';

// Component to render a folder or file
const FileExplorer = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <FolderOrFile key={item.name} item={item} />
      ))}
    </div>
  );
};

// Component to render each folder or file
const FolderOrFile = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle folder open/close
  const toggleOpen = () => setIsOpen(!isOpen);

  // If the item is a folder, render it differently
  if (item.type === 'folder') {
    return (
      <div>
        <div onClick={toggleOpen} style={{ cursor: 'pointer' }}>
          {isOpen ? '📂' : '📁'} {item.name}
        </div>
        <div style={{ marginLeft: '20px', display: isOpen ? 'block' : 'none' }}>
          {item.children && item.children.map((child) => (
            <FolderOrFile key={child.name} item={child} />
          ))}
        </div>
      </div>
    );
  }

  // If the item is a file, just render the file name
  return <div>📄 {item.name}</div>;
};

export default FileExplorer;
