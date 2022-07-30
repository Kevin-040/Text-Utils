import './App.css';
import Navbar from "./Components/Navbar"
import TextForm from './Components/TextForm';
import About from "./Components/About";
import Alert from "./Components/Alert";
import {useState} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  // code inside "return" block is called "JSX"
  // only return One Tag (In our case "div" tag)  OR  You can add blank tag => <></>

  const [alert, setAlert] = useState(null);  // useState of Type "Object"
  const[Mode, setMode] = useState('light');

  const showAlert = (message,type) =>{
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(()=>{
      setAlert(null);
    }, 1500)
  }

  const toggleMode = () => {
    if (Mode === 'light') {
        setMode('dark');
        document.body.style.backgroundColor = 'black';
        document.title="TextUtils-DarkMode";
    }
    else {
        setMode('light');
        document.body.style.backgroundColor = 'white';
        document.title="TextUtils-LightMode";
    }
};

  return (                
    <>
    <Router>
    <Navbar title="TextUtils" aboutText = "About Us" mode={Mode} toggle_mode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container">
      
        <Routes>
          <Route exact path="/about" element={<About mode={Mode}/>}/>
          <Route exact path="/" element={<TextForm heading="TextUtils : Word Counter | Character Counter | Text Modification" alert={showAlert} mode={Mode}/>}/>
        </Routes>
    </div>
    </Router>
    </>
  );

  
}

export default App;
