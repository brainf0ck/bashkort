import react from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import KuraiContent from './components/KuraiContent/KuraiContent';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import SkotContent from './components/SkotContent/SkotContent';
import { Routes, Route } from "react-router-dom";
import MuzContent from './components/MuzContent/MuzContent';
import MedContent from './components/MedContent/MedContent';
import LitContent from './components/LitContent/LitContent';
import PrazdContent from './components/PrazdContent/PrazdContent';
import TeatrContent from './components/TeatrContent/TeatrContent';

function App() {
  return (
      <div className="app_wrapper">
        <Header />
        <Sidebar />
        <div className='content'> 
          <Routes>
            <Route path="/" element={<KuraiContent/>} />
            <Route path="/kurai_content" element={<KuraiContent/>} />
            <Route path="/skot_content" element={<SkotContent />} />
            <Route path="/muz_content" element={<MuzContent />} />
            <Route path="/med_content" element={<MedContent />} />
            <Route path="/lit_content" element={<LitContent />}/>
            <Route path="/prazd_content" element={<PrazdContent />} />
            <Route path="/teatr_content" element={<TeatrContent />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
