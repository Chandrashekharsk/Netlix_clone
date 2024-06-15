import LogAuth from "./pages/auth/logAuth/LogAuth.jsx"
import First from "./pages/first/First"
import {Routes, Route, useNavigate} from "react-router-dom"
import Player from "./pages/player/Player.jsx"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../fireDbConfig.js"
import { useEffect } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const navigate = useNavigate();

  useEffect(()=>{
    onAuthStateChanged(auth, async(user)=>{
      if(user){
        console.log("Logged In Successfully");
        navigate("/");
      }else{
        console.log("Logged Out Successfully")
        navigate("/login")
      }
    })
  }, [])

  return (
    <>
    <ToastContainer theme="dark" />
    <Routes>
      <Route path="/" element={<First/>} />
      <Route path="/login" element={<LogAuth/>} />
      <Route path="/player/:id" element={<Player/>} />
    </Routes>
    </>
  )
}

export default App
