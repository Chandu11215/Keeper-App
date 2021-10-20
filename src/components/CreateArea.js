import React, { useState } from "react";
import AddIcon from '@material-ui/icons//Add';
import Fab from '@material-ui/core/Fab'
import Zoom from '@material-ui/core/Zoom'



const CreateArea = (props) => {

  const [expanded, setExpanded] = useState(false)

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  const expand = () => {
    setExpanded(true)
  }

  const submitNote = (e) => {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    e.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {
          expanded && (
            <input
              name="title"
              onChange={handleChange}
              value={note.title}
              placeholder="Title"
            />
          )
        }
        <textarea
          onClick={expand}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={expanded ? 3 : 1}
        />
        <Zoom in={expanded}>
          <Fab onClick={submitNote}>
            <AddIcon/>
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea
