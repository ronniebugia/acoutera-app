import React from 'react';
import './css/style.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Sidebar/>
      <Dashboard/>
    </div>
  );
}

export default App;
