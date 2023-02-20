// import logo from './logo.svg';
import "./App.css";
import React, { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextFrom from "./components/TextFrom";
import Alert from "./components/Alert";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [Mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#143755";
      showAlert("Dark Mode has been enabled,success");
      document.title = "TextUtils - DarkMode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled,success");
      document.title = "TextUtils - LightMode";
    }
  };



  return (
    <> 
    <BrowserRouter>
    <Navbar title="TextUtils" mode={Mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
        <Routes>
          {/* <Navbar/> */}

          <Route path="/" element={<TextFrom showAlert={showAlert} heading="Enter the text to analyze" mode={Mode} />}/>
          <Route path="/about" element={<About/>} />
        </Routes>
        </div>
        </BrowserRouter>
    </>
  );
}


export default App;
