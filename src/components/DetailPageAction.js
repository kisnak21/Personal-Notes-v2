import React from "react";
import PropTypes from "prop-types";
import { FiDelete } from "react-icons/fi";
import Swal from "sweetalert2";

function DetailPageAction({ id, title, deleteNote }) {
  const onDeleteNoteHandler = () => {
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
  };

  return (
    <div className='detail-page__action'>
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
  deleteNote: PropTypes.func.isRequired,
};

export default DetailPageAction;
