import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <NavBar title ="TextUtils" about ="AboutUs"/>

    <div className="container my-3">
    <TextForm heading = "Enter the text to Analyze"/>
    </div>

    
    </>
  );
}

export default App;
