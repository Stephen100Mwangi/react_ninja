import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const NavBar = ({title}) => {
    function handleClick() {
        alert("Hello");
    }
    function handleClick2(name) {
        console.log(name);
        setName("Mwangi");
        
    }

    // UseState Hook
    const [name,setName] = useState("Steve");
   
  return (
    <div style={{display:"flex",gap:"50px",alignItems:"center"}}>
        <h1>Better Blogs</h1>
        <Link to="/newblog" style={{backgroundColor:"orange",padding:"10px 20px",borderRadius:"20px",textDecoration:"none",fontWeight:"bold"}} onClick={()=>handleClick2("Joe")}>New Blog</Link>
        <small>Copyright {name}</small>
        <Link to="/create">Click me</Link>
    </div>

  )
}

export default NavBar
