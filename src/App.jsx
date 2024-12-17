import { useState } from 'react'
import { BrowserRouter,Routes,Route, Link } from 'react-router-dom'

function App() {
 

  return (
    <div>
    <BrowserRouter>
    <Link to='/'> allen</Link>
    <Link to='/class 11'>class 11</Link>
    <Link to='/class 12'> class 12</Link>
    <Routes>
      <Route path="/neet/coaching 11" element={<class11prog/>}/>
      <Route path="/neet/coaching 12" element={<class12prog/>}/>
      <Route path="/" element={<landing/>}/>

    </Routes>
    </BrowserRouter>
    </div>
    
  )
}
  function landing(){
      return <div> welcome to allen </div>
  }
  function class11prog(){
    return <div>
      welcome to class 11 prog
    </div>
  }
  function class12prog(){
    return <div>
      welcome to class 12 prog
    </div>
  }



export default App
