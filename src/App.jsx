import { BrowserRouter, Routes, Route } from "react-router-dom";
import{useState}from "react";
import Navbar from "./components/navbar";
import Home from "./components/home";

import About from "./components/about";
function App(){
  const[show,setshow]=useState(true);

  return(
<>
<Navbar show={show} setshow={setshow}/>
<Routes>
  <Route path="/" element={show&&<Home/>}></Route>
  <Route path="/about" element={<About/>}></Route>
 </Routes>  
 </>
  
  )
}
export default App;