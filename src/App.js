import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import Home from './Components/Home/Home';
import { useState } from 'react';
import Footer from './Components/Footer/Footer';

function App() {
const [sidebar,setSidebar]=useState(false)
const handleSidebar=()=>{
  setSidebar(!sidebar)
  console.log("Clicked")
}
  return (
    <div className="App">
      {sidebar&&<Sidebar handleSidebar={handleSidebar}/>}
      <Navbar handleSidebar={handleSidebar}/> 
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;

