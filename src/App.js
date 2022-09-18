import logo from './logo.svg';
import './App.css';
import React from 'react'

import Navbar from'./component/Navbar';
import Text from './component/text';
import { useState } from 'react';
import About from './component/About';
import Navbar2 from './component/Navbar2';

function App() {
  const [mode,setMode]=useState('light');
  const toggleMode=()=>{
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#2e2727';
      document.body.style.color='white';
    }
    
    else {
      setMode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
    }
  }
  return (
  <>
{/* <Navbar mode={mode} toggleMode={toggleMode}/> */}
<Navbar2 mode={mode} toggleMode={toggleMode}/>
<div className="container my-5">

{/* <Text  mode={mode} /> */}
<Text  mode={mode} toggleMode={toggleMode} />

{/* <About mode={mode}/> */}
</div>
  </>
  );
}

export default App;
