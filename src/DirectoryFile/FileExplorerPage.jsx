import React, { useState } from 'react';
import FileExplorer from './FileExplorer';
import initialData from './Directory.js';

const FileExplorerPage = () => {
  const [data, setData] = useState(initialData);
  // Function to add a new file or folder
  const addItem = (path, name, type) => {
    const newData = [...data];

    const addRecursively = (items, pathParts) => {
      const [current, ...rest] = pathParts;
      const item = items.find((i) => i.name === current && i.type === 'folder');

      if (!item) return;

      if (rest.length === 0) {
        if (!item.children) {
          item.children = [];
        }
        item.children.push({ name, type, children: type === 'folder' ? [] : null });
      } else {
        addRecursively(item.children, rest);
      }
    };

    const pathParts = path.split('/');
    addRecursively(newData, pathParts);
    setData(newData);
  };

  return (
    <div>
      <h1>File Explorer</h1>
      <FileExplorer data={data} onAdd={addItem} />
    </div>
  );
};

export default FileExplorerPage;
