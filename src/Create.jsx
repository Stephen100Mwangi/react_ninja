import React, { useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Create = () => {

  // States
  const [title,setTitle] = useState("");
  const [body,setBody] = useState("");
  const [author,setAuthor] = useState("Mwangi Steve");

  const [isLoading,setLoading] = useState("");

  // To go back to index page after successful upload
  const history = useHistory();

  function handleSubmit(e) {
    // Prevents form from refreshing when submit button is clicked
    e.preventDefault();
    // Create new object
    setLoading(true);

    const blog ={title,body,author}
    // console.log(blog);

    // Send data to our server using POST Requests
    fetch('http://localhost:3500/test',{
      // Define methods and tackle the data
      method:'POST',
      headers:{'Content-Type':'application/json'},
      // Change object to JSON string
      body: JSON.stringify(blog)
    }).then(()=>{

     
      // When complete
      console.log("New Blog added");

       // Show loading Message
       setLoading(false);
      
    })

    // history.go(-1); //Go back to previous page
    // To go to index
    history.push('/');

    
  }

  return (
    <div>
      <p>Router 001</p>
      {/* Controlled Inputs */}
      <form 
         onSubmit={handleSubmit}
         style={{width:"300px",display:"flex",flexDirection:"column",padding:"20px",border:"1px solid black",gap:"20px",margin:"20px"}}> 
        <label>Blog Title</label>
        <input 
            style={{padding:"10px 20px"}}
            type="text"
            required
            // Controlled input
            value={title}

            // Modify the value
            onChange={(e)=>setTitle(e.target.value)}
           
        />
         <label>Blog Body</label>
        <textarea 
            style={{padding:"10px 20px"}}
            type="text"
            required
            value={body}
            onChange={(e)=>setBody(e.target.value)}
        />
         <label>Blog Author</label>
        <select
           value={author}
           onChange={(e)=>setAuthor(e.target.value)}
        >
          <option value="Steve">Steve</option>
          <option value="wahome M">Wahome M</option>
          <option value="Mwangi Steve">Mwangi Steve</option>
        </select>
        <button style={{padding:"10px",backgroundColor:"orange",borderRadius:"20px",outline:"none",border:"none"}}>Add Blog</button>

        {isLoading && <p>Upload in progress.Please wait</p>}
      </form>

     
      

      {/* Output */}
      <p>Title: {title}</p>
      <p>Body: {body}</p>
      <p>Author: {author}</p>
    </div>
  )
}

export default Create
