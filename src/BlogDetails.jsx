import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {

    // To dynamically select a blog depending on the id import userParams
    const {id} = useParams();

    // To reuse a component we import it
    const {data,_error,is_pending} = useFetch('http://localhost:3500/test/' + id);
  return (
    <div className='blog-details'>

      <h2>Blog Details - { id } </h2>

      {is_pending && <div>Loading please .....</div>}
      {_error && <div>{ _error }</div>}
      {data && (<div><h3>{ data.title }</h3>{ data.content }</div>)}
     
    </div>
  )
}

export default BlogDetails
