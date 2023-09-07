import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addPegawai } from "../pegawaiSlice"; // Menggunakan slice yang sesuai
import axios from "axios";

export default function FormPost() {
  const navigate = useNavigate();
  const [newPegawai, setNewPegawai] = useState({
    nama: "",
    provinsi: "",
    kabupaten: "",
    kecamatan: "",
    kelurahan: "",
    jalan: "",
  });

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewPegawai((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/crud-project/");
    // Dispatch action dari slice untuk menambah pegawai
    dispatch(addPegawai(newPegawai));

    // Mengosongkan form
    setNewPegawai({
      nama: "",
      provinsi: "",
      kabupaten: "",
      kecamatan: "",
      kelurahan: "",
      jalan: "",
    });
  };

  return (
    <div className="form-area">
      <div className="form">
        <form onSubmit={handleSubmit}>
          <h4>POST</h4>
          <label htmlFor="nama">
            <p>nama:</p>
            <input
              type="text"
              name="nama"
              id="nama"
              value={newPegawai.nama}
              onChange={handleInputChange}
            />
          </label>
          <label htmlFor="provinsi">
            <p>provinsi:</p>
            <input
              type="text"
              name="provinsi"
              id="provinsi"
              value={newPegawai.provinsi}
              onChange={handleInputChange}
            />
          </label>
          <label htmlFor="kabupaten">
            <p>kabupaten:</p>
            <input
              type="text"
              name="kabupaten"
              id="kabupaten"
              value={newPegawai.kabupaten}
              onChange={handleInputChange}
            />
          </label>
          <label htmlFor="kecamatan">
            <p>kecamatan:</p>
            <input
              type="text"
              name="kecamatan"
              id="kecamatan"
              value={newPegawai.kecamatan}
              onChange={handleInputChange}
            />
          </label>
          <label htmlFor="kelurahan">
            <p>kelurahan:</p>
            <input
              type="text"
              name="kelurahan"
              id="kelurahan"
              value={newPegawai.kelurahan}
              onChange={handleInputChange}
            />
          </label>
          <label htmlFor="jalan">
            <p>jalan:</p>
            <input
              type="text"
              name="jalan"
              id="jalan"
              value={newPegawai.jalan}
              onChange={handleInputChange}
            />
          </label>
          <div className="btn-post">
            <button type="submit">Post</button>
            <button onClick={() => navigate("/crud-project/")}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}
