import React from "react";
import NoteItemBody from "./NoteItemBody";
import PropTypes from "prop-types";
import { showFormattedDate } from "../utils";

function NoteItem({ title, body, onDelete, createdAt, id }) {
  return (
    <div className='note-item'>
      <NoteItemBody
        id={id}
        title={title}
        body={body}
        createdAt={showFormattedDate(createdAt)}
        onDelete={onDelete}
      />
    </div>
  );
}

NoteItem.proptype = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default NoteItem;
