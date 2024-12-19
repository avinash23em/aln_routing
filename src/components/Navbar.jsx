import React from "react";
import { Link } from "react-router-dom";
function Navbar(){
    return(
        <nav>
            <Link to="/exams"> Exams</Link>
            <Link to="/ programs "> programs</Link>
            <Link to="/tests"> test</Link>
        </nav>
    )
    

}
export default Navbar