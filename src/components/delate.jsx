import React from "react";
import { useDispatch } from "react-redux";
import { deletePegawai } from "../pegawaiSlice"; // Menggunakan slice yang sesuai

function Delete({ id }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (window.confirm("Apakah Anda yakin ingin menghapus pegawai ini?")) {
      dispatch(deletePegawai(id));
    }
  };

  return <button onClick={handleDelete}>Delate</button>;
}

export default Delete;
