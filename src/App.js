import './App.css';
// import About from './components/About';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'

function App() {

  const [mode, setmode] = useState('light');
  const tooglemode =()=>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = 'grey';
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
    <NavBar title ="TextUtils" mode={mode} tooglemode={tooglemode} about ="AboutUs"/>

    <div className="container my-3">
    <TextForm heading = "Enter the text to Analyze"/>
    {/* <About/> */}
    </div>

    
    </>
  );
}

export default App;
