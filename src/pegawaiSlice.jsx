// PEGAWAI SLICE
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Buat async thunk untuk mengambil data pegawai dari API
export const getPegawai = createAsyncThunk("pegawai/getPegawai", async () => {
  const response = await axios.get(
    "https://61601920faa03600179fb8d2.mockapi.io/pegawai"
  );
  return response.data;
});

// Buat async thunk untuk menambahkan pegawai baru
export const addPegawai = createAsyncThunk(
  "pegawai/addPegawai",
  async (newPegawai) => {
    const response = await axios.post(
      "https://61601920faa03600179fb8d2.mockapi.io/pegawai",
      newPegawai
    );
    return response.data;
  }
);

// Buat async thunk untuk menghapus pegawai
export const deletePegawai = createAsyncThunk(
  "pegawai/deletePegawai",
  async (id) => {
    await axios.delete(
      `https://61601920faa03600179fb8d2.mockapi.io/pegawai/${id}`
    );
    return id;
  }
);

// Buat async thunk untuk memperbarui pegawai
export const updatePegawai = createAsyncThunk(
  "pegawai/updatePegawai",
  async ({ id, updatedData }) => {
    const response = await axios.put(
      `https://61601920faa03600179fb8d2.mockapi.io/pegawai/${id}`,
      updatedData
    );
    // console.log(response.data);
    return response.data;
  }
);

const pegawaiSlice = createSlice({
  name: "pegawai",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPegawai.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(addPegawai.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(deletePegawai.fulfilled, (state, action) => {
        return state.filter((pegawai) => pegawai.id !== action.payload);
      })
      .addCase(updatePegawai.fulfilled, (state, action) => {
        const index = state.findIndex(
          (pegawai) => pegawai.id === action.payload.id
        );
        if (index !== -1) {
          state[index] = action.payload;
        }
      });
  },
});

export default pegawaiSlice.reducer;
