import React from 'react';
import './css/style.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';


function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <Navbar/>
      <div className="row main">
        <Sidebar/>
        <Dashboard/>
      </div>
    </div>
  );
}

export default App;
