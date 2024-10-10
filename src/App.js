// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   // Switch,
//   Route,
//   // Link,
//   Routes
// } from "react-router-dom";











function App() {
const[mode,setmode]=useState("light")
const[alert,setalert]=useState(null)
const showalert=(message,type="success")=>{
setalert({
  msg:message ,
type:type
})
// console.log(type);

setTimeout(()=>{setalert(null)},2000)
}


const togglemode=()=>{
  if(mode==="light")
  {setmode("dark")
document.body.style.backgroundColor="black"
document.body.style.color="white"
showalert("dark mode enabled","success")
  // setInterval(()=>{document.title="textutil amzing"},2000);
  // setInterval(()=>{document.title=" Install textutil amzing"},1500);

}

else{
  setmode("light")
  document.body.style.backgroundColor="white"
  document.body.style.color="black"
  showalert("Light mode enabled","success")

}

}



const togglemode2=()=>{
  if(mode==="light")
  {setmode("info")
document.body.style.backgroundColor=("#1b055e")  
//  "#394773"
document.body.style.color="white"
showalert("Blue mode enabled","success")
  }
else{
  setmode("light")
  document.body.style.backgroundColor="white"
  document.body.style.color="black"
  showalert("Light mode enabled","success")
}
}


const togglemode3=()=>{
  if(mode==="light")
  {setmode("success")
document.body.style.backgroundColor=("#0cb339")  
//  "#394773"
document.body.style.color="white"
showalert("Blue mode enabled","success")
  }
else{
  setmode("light")
  document.body.style.backgroundColor="white"
  document.body.style.color="black"
  showalert("Light mode enabled","success")
}
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
   <>
 {/* <Router> */}
            <Navbar title="TextUtils" mode={mode} togglemode={togglemode} toggleblue={togglemode2} togglegreen={togglemode3} />
            <Alert alert={alert}></Alert>
            <div className="container">
                {/* <Routes>
                    <Route  exact path="/about" element={<About/>} />
                    <Route exact path="/" element={<TextForm heading="Enter Text to analysis" mode={mode} showalert={showalert} />} />
                </Routes> */}
                <TextForm heading="Enter Text to analysis" mode={mode} showalert={showalert} />
            </div>
        {/* </Router> */}


{/* <About mode={mode}></About> */}











   </>















  );
}

export default App;
