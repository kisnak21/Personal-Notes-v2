import React from "react";
import { addNote } from "../utils/local-data";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import NoteInput from "../components/NoteInput";

function AddPage() {
  const navigate = useNavigate();

  function onAddHandler(note) {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Catatan kamu berhasil ditambah",
      showConfirmButton: false,
      timer: 1000,
    }).then(() => {
      addNote(note);
      navigate("/");
    });
  }

  return (
    <section>
      <NoteInput addNote={onAddHandler} />
    </section>
  );
}

export default AddPage;
