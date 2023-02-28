import './App.css';
import About from './components/About';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import Alert from './components/Alert';
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

function App() {

  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showalert =(message,type) =>{
    setalert({
      msg:message,
      ty:type}
      
      )
    setTimeout(() => {
      setalert("")
    }, 1200);

  }
  const tooglemode =()=>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      showalert("Dark Mode has been enabled","Success");
      document.title = 'Text Utils- Dark Mode'
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showalert("Light Mode has been enabled","Success");
      document.title = 'Text Utils- Light Mode'
    }
  }

  const info=()=>{
      document.body.style.backgroundColor = 'aqua';
      showalert("Aqua Mode has been enabled","Success");
      document.title = 'Text Utils- Aqua Mode'
  }
  const danger=()=>{
    document.body.style.backgroundColor = 'red';
    showalert("Red Mode has been enabled","Success");
    document.title = 'Text Utils- Red Mode'
}
const warning=()=>{
  document.body.style.backgroundColor = 'yellow';
  showalert("Yellow Mode has been enabled","Success");
  document.title = 'Text Utils- Yellow Mode'
}
  return (
    <>
    <Router>
    <NavBar title ="TextUtils" mode={mode} tooglemode={tooglemode} info={info} danger={danger} warning={warning} about ="AboutUs"/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Switch>
      <Route exact path="/about">
      <About/>
      </Route>
      <Route path="/">
      <TextForm heading = "Enter the text to Analyze" mode={mode} showalert={showalert}/>
      </Route>
    </Switch>
    
    
    </div>

    </Router>
    </>
  );
}

export default App;
