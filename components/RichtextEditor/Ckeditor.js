import React, { useState, useEffect, useRef } from "react";

export default function MyEditor({ ref }) {
  const editorRef = useRef();
  ref = editorRef;
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
    <CKEditor editor={ClassicEditor} data="" config={{ toolbar }} />
  ) : (
    <div>Editor loading</div>
  );
}
const toolbar = {
  items: [
    "heading",
    "|",
    "bold",
    "italic",
    "underline",
    "link",
    "bulletedList",
    "numberedList",
    "|",
    "alignment",
    "indent",
    "outdent",
    "|",
    "specialCharacters",
    "blockQuote",
    "insertTable",
    "fullScreen",
    "undo",
    "redo",
  ],
};
