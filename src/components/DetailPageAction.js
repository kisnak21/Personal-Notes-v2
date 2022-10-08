import React from "react";
import PropTypes from "prop-types";
import { FiActivity, FiArchive, FiDelete } from "react-icons/fi";
import Swal from "sweetalert2";

function DetailPageAction({
  id,
  title,
  archived,
  archiveNote,
  unArchiveNote,
  deleteNote,
}) {
  function onArchiveNoteHandler() {
    Swal.fire({
      title: `Arsip catatan "${title}"?`,
      text: "Apakah kamu yakin?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya",
      cancelButtonText: "Tidak",
    }).then((result) => {
      if (result.isConfirmed) {
        archiveNote(id);
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Catatan kamu "${title}" sudah diarsipkan`,
          showConfirmButton: false,
          timer: 1000,
        });
      }
    });
  }

  function onUnarchiveNoteHandler() {
    unArchiveNote(id);
  }

  function onDeleteNoteHandler(id) {
    Swal.fire({
      title: `Hapus catatan "${title}"?`,
      text: "Apakah kamu yakin?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya",
      cancelButtonText: "Tidak",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteNote(id);
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Catatan kamu "${title}" sudah dihapus`,
          showConfirmButton: false,
          timer: 1000,
        });
      }
    });
  }

  return (
    <div className='detail-page__action'>
      {archived ? (
        <button
          className='action'
          type='button'
          title='Aktifkan'
          onClick={onUnarchiveNoteHandler}
        >
          <FiActivity />
        </button>
      ) : (
        <button
          className='action'
          type='button'
          title='Arsipkan'
          onClick={onArchiveNoteHandler}
        >
          <FiArchive />
        </button>
      )}
      <button
        className='action'
        type='button'
        title='Hapus'
        onClick={onDeleteNoteHandler}
      >
        <FiDelete />
      </button>
    </div>
  );
}

DetailPageAction.proptype = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  archive: PropTypes.bool.isRequired,
  archiveNote: PropTypes.func.isRequired,
  unArchiveNote: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
};

export default DetailPageAction;
