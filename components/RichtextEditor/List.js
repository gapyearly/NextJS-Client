import React, { useState, useEffect, useRef } from "react";

export default function MyEditor({ data, onChange }) {
  const editorRef = useRef();
  const [editorLoaded, setEditorLoaded] = useState(false);
  const { CKEditor, ClassicEditor } = editorRef.current || {};

  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
      ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
    };
    setEditorLoaded(true);
  }, []);

  return editorLoaded ? (
    <CKEditor
      editor={ClassicEditor}
      data={data}
      config={{ toolbar }}
      onChange={(event, editor) => {
        const data = editor.getData();
        onChange(data);
      }}
    />
  ) : (
    <div>Editor loading</div>
  );
}
const toolbar = {
  items: [
    // "heading",
    // "|",
    // "bold",
    // "italic",
    // "underline",
    // "link",
    "bulletedList",
    // "numberedList",
    // "blockQuote",
    // "|",
    // "alignment",
    // "indent",
    // "outdent",
    // "|",
    // "specialCharacters",

    // "insertTable",
    // "fullScreen",
    // "undo",
    // "redo",
  ],
};
