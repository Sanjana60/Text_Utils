import './App.css';
// import About from './components/About';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import Alert from './components/Alert';

function App() {

  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showalert =(message,type) =>{
    setalert({
      msg:message,
      ty:type}
      
      )
    

  }
  const tooglemode =()=>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      showalert("Dark Mode has been enabled","Success");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showalert("Light Mode has been enabled","Success");
    }
  }
  return (
    <>
    <NavBar title ="TextUtils" mode={mode} tooglemode={tooglemode} about ="AboutUs"/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <TextForm heading = "Enter the text to Analyze" mode={mode} showalert={showalert}/>
    {/* <About/> */}
    </div>

    
    </>
  );
}

export default App;
