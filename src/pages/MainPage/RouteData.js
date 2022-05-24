import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import PrivateRoute from '../../route/PrivateRoute';
// import FeedDetailsPage from '../FeedDetailsPage/FeedDetailsPage';
// import PrivateRoute from '../../route/PrivateRoute';

const FeedsPage = React.lazy(() => import('../FeedsPage/FeedsPage'));
const UserProfile = React.lazy(() => import('../UserProfile/UserProfile'));
const FeedDetailsPage = React.lazy(() => import('../FeedDetailsPage/FeedDetailsPage'));

function NoMatch() {
    return (
      <div>
        <h2>404.. This page is not found!</h2>
        <p>
          <Link to="/">Go to the home page</Link>
        </p>
      </div>
    );
  }

//Routing Data
const RouteData = () =>{
    return(
        <Routes>  
           <Route exact path='/user' element={<PrivateRoute/>}>                
              {/* <Route exact path="/user/profile/:id"  element={<UserProfile/>}/>  */}
            </Route>
            <Route exact path="/profile/:userId"  element={<UserProfile/>}/>
            <Route exact path="/posts/user/:username"  element={<FeedsPage/>}/>
            <Route exact path="/post/:postId"  element={<FeedDetailsPage/>}/> 
            <Route exact path='/home' element={<FeedsPage/>}/>
            <Route exact path='/' element={<FeedsPage/>}/>
            <Route exact path='*' element={<NoMatch/>}/>
        </Routes>
   );
}
export default RouteData;