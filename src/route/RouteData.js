import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
// import MockAPI from '../Helpers/Helpers/MockMan';
import MainPage from '../pages/MainPage';
// import MainPage from '../pages/MainPage/index';
// import Dashboard from '../Pages/Dashboard/index';

// const LoginPage = React.lazy(() => import('../Pages/Authentication/Login/Login'));
// const SignUpPage = React.lazy(() => import('../Pages/Authentication/SignUp/SignUp'));

const NoMatch = () => {
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
            {/* <Route exact path='/signup' element={<SignUpPage/>}/> 
            <Route exact path='/login' element={<LoginPage/>}/>  */}
            {/* <Route exact path='/mockman' element={<MockAPI/>}/> */}
            <Route path='/*' element={<MainPage/>}/>
        </Routes>
   );
}
export default RouteData;