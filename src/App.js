import './App.css';
import Home from './Home';
import Lesson001 from './Lesson001';
import Create from './Create';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import NavBar from './NavBar';
import NewBlog from './NewBlog';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  return (
    // Wrap everything in the Router tags
    // Each component should be wrapped in Switch tag then Route tag
    <Router>
      <section>
          {/* <Lesson001></Lesson001> */}
          <NavBar/>
      </section>
      {/* Switch component ensures that only one route component shows in the browser at only one time */}
      <Switch>
        {/* Route for each page */}
        <Route path="/navbar">
          <NavBar></NavBar>
        </Route>
        {/* exact keyword is used to ensure that home opens only when requested but not all the time */}
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/create">
          <Create></Create>
        </Route>
        <Route path="/newblog">
          <NewBlog></NewBlog>
        </Route>

        {/* Route parameters - Page renders regardless of the id */}
        <Route path="/blogs/:id">
          <BlogDetails></BlogDetails>

        </Route>

        {/* Path is  astrerix.Placed at the bottom*/}
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>

    </Router>
   
  );
}

export default App;
