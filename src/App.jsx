import { useState } from 'react'
import { BrowserRouter,Routes,Route, Link } from 'react-router-dom'

function App() {
 

  return (
    <div>
    <BrowserRouter>
    <Link to='/'> allen </Link>
    <Link to='/class 11'>class 11</Link>
    <Link to='/class 12'> class 12</Link>
    <Routes>
      <Route path="/class 11" element={<Class11prog/>}/>
      <Route path="/class 12" element={<Class12prog/>}/>
      <Route path="/" element={<Landing/>}/>

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
    return <div>
      welcome to class 12 prog
    </div>
  }

}

export default App
