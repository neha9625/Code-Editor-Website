const initialData = [
  {
    name: 'src',
    type: 'folder',
    children: [
      {
        name: 'components',
        type: 'folder',
        children: [
          { name: 'App.js', type: 'file' },
          { name: 'Header.js', type: 'file' },
        ],
      },
      { name: 'index.js', type: 'file' },
      { name: 'styles.css', type: 'file' },
    ],
  },
  {
    name: 'public',
    type: 'folder',
    children: [
      { name: 'index.html', type: 'file' },
      { name: 'favicon.ico', type: 'file' },
    ],
  },
];

export default initialData;
