import React from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import AddPage from "./pages/AddPage";
import DetailPage from "./pages/DetailPage";
import ArchivePage from "./pages/ArchivePage";

function App() {
  return (
    <div className='app-container'>
      <header>
        <h1>Aplikasi Catatan</h1>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/add' element={<AddPage />} />
          <Route path='/archive' element={<ArchivePage />} />
          <Route path='/notes/:id' element={<DetailPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
