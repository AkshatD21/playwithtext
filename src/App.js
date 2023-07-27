import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Textform from './components/Textform';
import React, {useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";


function App() {

  const [mode , setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg : message,
      type : type
    })

    setTimeout(() => {
      setAlert(null);
    } ,1500);
  }

  const togglemode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled" , "success");
      // document.title = ('TextConv - Dark Mode')
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled" , "success")
      // document.title = ('TextConv - Light Mode')
    }

  }
  return (
    <>
    <Router>
    <Navbar title = "TextConv" mode = {mode} togglemode={togglemode} />
    <Alert alert={alert} />
    <div className="container my-3">
    <Routes>
          <Route path="/about" element={<About  mode={mode} />} />
          <Route path="/" element={<Textform heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />} />
      </Routes>
    </div>
    </Router>

    {/* <Navbar title = "TextConv" mode = {mode} togglemode={togglemode} />
    <Alert alert={alert} />
    <div className="container my-3"></div>
    <Textform heading="Enter text to analyze"  mode={mode} showAlert={showAlert} /> */}
    </>
  );
}

export default App;
