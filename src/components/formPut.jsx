// from put
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updatePegawai } from "../pegawaiSlice";

export default function FormPut() {
  const navigate = useNavigate();
  const location = useLocation();
  const { data } = location.state; // destructuring

  const [updatedData, setUpdatedData] = useState(
    data || {
      nama: "",
      provinsi: "",
      kabupaten: "",
      kecamatan: "",
      kelurahan: "",
      jalan: "",
    }
  );

  useEffect(() => {
    if (data) {
      setUpdatedData(data);
    }
  }, [data]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const dispatch = useDispatch();

  const handleUpdate = () => {
    if (data && data.id) {
      dispatch(updatePegawai({ id: data.id, updatedData }));
    }
    navigate("/crud-project/", { replace: true });
  };

  return (
    <div className="form-area">
      <div className="form">
        <div className="input-area">
          <h4>UPDATE</h4>
          <label htmlFor="nama">
            <p>nama:</p>
            <input
              type="text"
              name="nama"
              id="nama"
              value={updatedData.nama}
              onChange={handleInputChange}
            />
          </label>
          <label htmlFor="provinsi">
            <p>provinsi:</p>
            <input
              type="text"
              name="provinsi"
              id="provinsi"
              value={updatedData.provinsi}
              onChange={handleInputChange}
            />
          </label>
          <label htmlFor="kabupaten">
            <p>kabupaten / kota:</p>
            <input
              type="text"
              name="kabupaten"
              id="kabupaten"
              value={updatedData.kabupaten}
              onChange={handleInputChange}
            />
          </label>
          <label htmlFor="kecamatan">
            <p>kecamatan:</p>
            <input
              type="text"
              name="kecamatan"
              id="kecamatan"
              value={updatedData.kecamatan}
              onChange={handleInputChange}
            />
          </label>
          <label htmlFor="kelurahan">
            <p>kelurahan:</p>
            <input
              type="text"
              name="kelurahan"
              id="kelurahan"
              value={updatedData.kelurahan}
              onChange={handleInputChange}
            />
          </label>
          <label htmlFor="jalan">
            <p>jalan:</p>
            <input
              type="text"
              name="jalan"
              id="jalan"
              value={updatedData.jalan}
              onChange={handleInputChange}
            />
          </label>
          <button onClick={handleUpdate}>Update</button>
          <button onClick={() => navigate("/crud-project/", { replace: true })}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
