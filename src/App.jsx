// APP
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DataPegawai from "./dataPegawai";
import FormPost from "./components/formPost";
import FormPut from "./components/formPut";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/crud-project/" element={<DataPegawai />} />
          <Route path="/crud-project/post" element={<FormPost />} />
          <Route path="/crud-project/update/:id" element={<FormPut />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
