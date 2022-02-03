import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar"; //so that Navbar ka raita ek jagah pr hi na fail jae it shuld be short and organized and also we can use navbar again
import TextArea from "./components/TextArea";
import Alert from "./components/Alert";
import About from "./components/About";
import Study from "./components/Study";
import Fun from "./components/Fun";
import Eat from "./components/Eat";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
  // Link
} from "react-router-dom";


//Here function start
function App() {
  //Here states vgera hai

  //for light or dark mode
  const [mode, setmode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "rgb(24, 20, 84)";
      showAlert("Dark mode has been enabled", 'primary')
      // document.title = "TextUtils-Dark Mode"
    }
    else {
      setmode("light");
      document.body.style.backgroundColor = "rgb(255, 149, 188)";
      showAlert("Light mode has been enabled", 'primary')
      // document.title = "TextUtils-Light Mode"
    }
  };

  //for alert
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }


  // Here start the return function
  return (
    <>

      {/* navbar */}
      {/* <Navbar title="Navbar1" aboutText="About1" mode={mode} toggleMode={toggleMode} text={mode == "light" ? "dark" : "light"} /> */}

      {/* alert */}
      {/* <Alert alert={alert} /> */}

      {/* Textarea */}
      {/* <div className="container my-3"> */}
        {/* <About /> */}
         {/* <TextArea
          showAlert={showAlert} heading=" About Yourself" text={mode == "light" ? "dark" : "light"} mode={mode == "light" ? "white" : "black"} /> */}
      {/* </div> */}
    
     <Router> 
           <Navbar title="Navbar1" aboutText="About1" mode={mode} toggleMode={toggleMode} text={mode === "light" ? "dark" : "light"}
           bgColor={mode==="light"?"info":"dark"} />
           {/* alert */}
          <Alert alert={alert} />
      <Routes>
      <Route
       exact path='/about' 
        element={
          <About  mode={mode} toggleMode={toggleMode} text={mode === "light" ? "dark" : "light"}/>
        }
      />
        <Route
       exact path='/study' 
        element={
          <Study
          text={mode === "light" ? "dark" : "light"}
          />
        }
      />
      <Route
       exact path='/fun' 
        element={
          <Fun text={mode === "light" ? "dark" : "light"} />
        }
      />
      <Route
       exact path='/eat'
        element={
          <Eat text={mode === "light" ? "dark" : "light"} />
        }
      /> 
      <Route 
        exact path='/' 
         element={ 
          <TextArea
          showAlert={showAlert} heading="TextUtils- Convert | UpperCase to LowerCase | LowerCase to UpperCase" textColor={mode === "light" ? "dark" : "light"} mode={mode === "light" ? "#efdeff" : "rgb(11, 15, 48)"} />
         }
      /> 

     </Routes>
     </Router> 


    </>
  );
}

export default App;



// {/*use of props*/ }
//  {/* <Navbar title="Navbar2" aboutText="About2" /> */ }



