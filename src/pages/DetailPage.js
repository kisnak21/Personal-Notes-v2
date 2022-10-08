import React from "react";
import PropTypes from "prop-types";
import { useNavigate, useParams } from "react-router-dom";
import { showFormattedDate } from "../utils";
import DetailPageAction from "../components/DetailPageAction";
import {
  archiveNote,
  deleteNote,
  getNote,
  unarchiveNote,
} from "../utils/local-data";

function DetailPageWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();

  function onArchiveNoteHandler(id) {
    archiveNote(id);
    navigate("/");
  }

  function onUnarchiveNoteHandler(id) {
    unarchiveNote(id);
    navigate("/");
  }

  function onDeleteNoteHandler(id) {
    deleteNote(id);
    navigate("/");
  }

  return (
    <DetailPage
      id={id}
      onArchiveNoteHandler={onArchiveNoteHandler}
      onUnarchiveNoteHandler={onUnarchiveNoteHandler}
      onDeleteNoteHandler={onDeleteNoteHandler}
    />
  );
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getNote(props.id),
    };
  }

  render() {
    return (
      <section className='detail-page'>
        <h3 className='detail-page__title'>{this.state.notes.title}</h3>
        <p className='detail-page__createdAt'>
          {showFormattedDate(this.state.notes.createdAt)}
        </p>
        <div className='detail-page__body'>{this.state.notes.body}</div>
        <DetailPageAction
          id={this.state.notes.id}
          title={this.state.notes.title}
          archive={this.state.notes.archived}
          archiveNote={this.props.onArchiveNoteHandler}
          unarchiveNote={this.props.onUnarchiveNoteHandler}
          deleteNote={this.props.onDeleteNoteHandler}
        />
      </section>
    );
  }
}

DetailPage.propTypes = {
  id: PropTypes.string.isRequired,
  onArchiveNoteHandler: PropTypes.func.isRequired,
  onUnarchiveNoteHandler: PropTypes.func.isRequired,
  onDeleteNoteHandler: PropTypes.func.isRequired,
};

export default DetailPageWrapper;
