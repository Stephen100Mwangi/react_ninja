import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const NotFound = () => {
  return (
    <div>
      <p>Not Found</p>
      <Link to="/">Go Back  to homepage....</Link>
    </div>
  )
}

export default NotFound
