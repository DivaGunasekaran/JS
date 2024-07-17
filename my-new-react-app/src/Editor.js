import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import styles

function Edtr() {
  const [text, setText] = useState('');

  const handleChange = (value) => {
    setText(value);
  };

  return (
    <div className="App">
      <h1>ReactQuill Example</h1>
      <ReactQuill
        value={text}
        onChange={handleChange}
        placeholder="Write something..."
      />
    </div>
  );
}

export default Edtr;
