import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  function handleChanges(event) {
    const { name, value } = event.target;

    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }
  function formSubmit(event) {
    event.preventDefault();
    if (note.title && note.content) {
      props.onAdd(note);
      setNote({ title: "", content: "" });
    }
  }

  return (
    <div>
      <form onSubmit={formSubmit}>
        <input
          onChange={handleChanges}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={handleChanges}
          name="content"
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
