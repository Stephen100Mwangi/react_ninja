import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import useFetch from './useFetch';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Home = ({title}) => {

    // const [data,is_pending,_error]= useFetch("http://localhost:3500/test");

    // Items
    const [myBlog,setBlog]  = useState(null);

    // Conditional Loading message
    const [is_pending,setPending] = useState(true);
    const [_error,setError] = useState(null);

    const history = new useHistory();

    function handleDelete(id) {
        const list_items = myBlog.filter((item)=> item.id !== id);
        setBlog(list_items);
        fetch(" http://localhost:3500/test/" + myBlog.id, {
            method:"DELETE"
        }).then(()=>{
            history.push('/');
        })
        
    }

    function handleCheck(id) {
        const list_items = myBlog.map((item)=> (item.id === id)? {...item,checked:!item.checked} : item)
        setBlog(list_items);
    }

    // UseEffect
    // Runs on every render
    // useEffect(()=>{console.log("Render occured");},[]);

    // Fetch data using useEffect
    try {
        useEffect(()=>{

            setTimeout(() => {
                fetch("http://localhost:3500/test")
                // response object
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
    
    //                 // update data
                    setBlog(data);
    
                    setPending(false);
                })
            }, 10);
          
        },[])
    } catch (error) {
        console.log(error.message);
        setError(error.message);
        setPending(false);
        
    }

    // Conditional Templates

    
  return (
    <div>
          {/* <NavBar/> */}

          {/* Conditional Template */}
          {/* Sets loading as the fetch API tries to fetch data */}
          {is_pending && <div>Loading.....</div>}
          {_error &&  <div>{_error}</div>}
        <h2>{title}</h2>
        <div style={{width:"500px",margin:"20px"}}>
            {/* {myBlog &&  myBlog.map((item)=> */}
            {myBlog &&  myBlog.map((item)=>
            <li key={item.id} style={{listStyle:"none",margin:"10px",border:"1px solid black",padding:"5px",borderRadius:"10px"}}>{item.id} <input type="checkbox" name="" onChange={()=>handleCheck(item.id)} checked={item.checked} id="" /> <Link to={`/blogs/${item.id}`} style={{textDecoration:"none"}}>{item.title}</Link> <br /> <p>{item.content || item.body}</p> <br /> <p>{item.author && "Written By "+ item.author}</p> <button style={{backgroundColor:"red",padding:"10px 20px",borderRadius:"20px",textDecoration:"none",outline:"none",border:"none",color:"white"}} onClick={()=>handleDelete(item.id)}>Delete Blog</button></li>
        )} 
       
        </div> 
       
      
    </div>
  )
}

export default Home
