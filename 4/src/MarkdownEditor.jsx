import React, { useRef, useEffect } from 'react';
import Editor from '@toast-ui/editor';
const MarkdownEditor = ({ onContentChange }) => {
  const editorRef = useRef(null);
  useEffect(() => {
    const editor = new Editor({
      el: editorRef.current,
      hideModeSwitch: true,
    });
    editor.addHook('change', () => {
      const content = editor.getMarkdown();
      onContentChange(content);
    });
    return () => {
      editor.destroy();
    };
  }, []);
  return <div ref={editorRef} />;
};
export default MarkdownEditor;