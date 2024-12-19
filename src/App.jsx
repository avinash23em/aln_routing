import { use } from 'react'
import { useState } from 'react'
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Exams from './components/Exams';
import Programs from './components/Programs';
import { BrowserRouter,Routes,Route, Link,useNavigate } from 'react-router-dom'

function App() {
 

  return (
    <div>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Layout/>}/>
        <Route path="/exams" element={<Exams/>}/>
        <Route path="/programs" element={<Programs/>}/>
      </Routes>
    </BrowserRouter>
    </div>
    
  )

  function Landing(){
      return <div> welcome to allen </div>
  }
  function Class11prog(){
    return <div>
      welcome to class 11 prog
    </div>
  }
  function Class12prog(){
    const navigate=useNavigate();
    function redirect(){
      navigate("/")
    }
    return <div>
      welcome to class 12 prog of this batch 
      <button on onClick={redirect}> redirect to home</button>
    </div>
  }

}

export default App
