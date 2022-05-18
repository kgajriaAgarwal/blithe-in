import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
// import PrivateRoute from '../../route/PrivateRoute';

const FeedsPage = React.lazy(() => import('../FeedsPage/FeedsPage'));
const UserProfile = React.lazy(() => import('../UserProfile/UserProfile'));

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
           {/* <Route exact path='/user' element={<PrivateRoute/>}>                
              <Route exact path="/user/liked-videos"  element={<LikedVideosPage/>}/> 
              <Route exact path='/user/playlists' element={<PlayList/>}/>
              <Route exact path='/user/watchlater' element={<WatchLater/>}/>
              <Route exact path='/user/history' element={<History/>}/>
            </Route>
            <Route exact path="/video/:videoId"  element={<Video/>}/> 
            <Route exact path="/videos/:categoryId"  element={<VideoListingPage/>}/>  */}
            <Route exact path='/profile' element={<UserProfile/>}/>
            <Route exact path='/home' element={<FeedsPage/>}/>
            <Route exact path='/' element={<FeedsPage/>}/>
        </Routes>
   );
}
export default RouteData;