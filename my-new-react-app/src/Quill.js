import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import styles

function MyEditor() {
  const [editorHtml, setEditorHtml] = useState('');

  const handleChange = (html) => {
    setEditorHtml(html);
  };

  return (
    <div>
      <h2>ReactQuill Example</h2>
      <ReactQuill 
        theme="snow" // Specify theme name
        value={editorHtml} 
        onChange={handleChange} 
      />
      <div dangerouslySetInnerHTML={{ __html: editorHtml }} />
    </div>
  );
}

export default MyEditor;
