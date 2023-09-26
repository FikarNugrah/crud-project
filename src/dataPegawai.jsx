// DATA PEGAWAI
import React, { useState, useEffect } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getPegawai } from "./pegawaiSlice";
import Delete from "./components/delate";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

export default function DataPegawai() {
  const navigate = useNavigate();
  const pegawai = useSelector((state) => state.pegawai);
  const isLoading = useSelector((state) => state.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPegawai());
  }, [dispatch]);

  const handleEditClick = (id) => {
    const editPegawai = pegawai.find((dataPegawai) => dataPegawai.id === id);
    if (editPegawai) {
      navigate(`/crud-project/update/${id}`, {
        state: { data: editPegawai },
      });
    }
  };

  return (
    <div className="container">
      <div className="table-area">
        <Table style={{ fontFamily: "Poppins" }}>
          <TableHead style={{ backgroundColor: "#e4e3e3" }}>
            <TableRow>
              <TableCell style={{ textAlign: "center", fontFamily: "Poppins" }}>
                No.
              </TableCell>
              <TableCell style={{ textAlign: "center", fontFamily: "Poppins" }}>
                Nama
              </TableCell>
              <TableCell style={{ textAlign: "center", fontFamily: "Poppins" }}>
                Provinsi
              </TableCell>
              <TableCell style={{ textAlign: "center", fontFamily: "Poppins" }}>
                Kabupaten / Kota
              </TableCell>
              <TableCell style={{ textAlign: "center", fontFamily: "Poppins" }}>
                Kecamatan
              </TableCell>
              <TableCell style={{ textAlign: "center", fontFamily: "Poppins" }}>
                Kelurahan
              </TableCell>
              <TableCell style={{ textAlign: "center", fontFamily: "Poppins" }}>
                Jalan
              </TableCell>
              <TableCell style={{ textAlign: "center", fontFamily: "Poppins" }}>
                Fitur
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan="8">Loading...</TableCell>
              </TableRow>
            ) : pegawai.length === 0 ? (
              <TableRow>
                <TableCell colSpan="8">Data kosong</TableCell>
              </TableRow>
            ) : (
              pegawai.map((list, i) => (
                <TableRow key={list.id}>
                  <TableCell style={{ textAlign: "center" }}>
                    {i + 1}.
                  </TableCell>
                  <TableCell style={{ textAlign: "center" }}>
                    {list.nama}
                  </TableCell>
                  <TableCell style={{ textAlign: "center" }}>
                    {list.provinsi}
                  </TableCell>
                  <TableCell style={{ textAlign: "center" }}>
                    {list.kabupaten}
                  </TableCell>
                  <TableCell style={{ textAlign: "center" }}>
                    {list.kecamatan}
                  </TableCell>
                  <TableCell style={{ textAlign: "center" }}>
                    {list.kelurahan}
                  </TableCell>
                  <TableCell style={{ textAlign: "center" }}>
                    {list.jalan}
                  </TableCell>
                  <TableCell
                    style={{
                      justifyContent: "center",
                      display: "flex",
                      gap: "10px",
                    }}
                  >
                    <Delete id={list.id} />
                    <button onClick={() => handleEditClick(list.id)}>
                      Edit
                    </button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
        <button className="add" onClick={() => navigate("/crud-project/post")}>
          Add Pegawai
        </button>
      </div>
    </div>
  );
}
