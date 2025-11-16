import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

import Dashboard from './Dashboard'
import FindSessions from './Sessions';

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/Find_Sessions" element={<FindSessions />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
