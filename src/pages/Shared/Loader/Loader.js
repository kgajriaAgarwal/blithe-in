import React from 'react';
import './Loader.css'

// const Loader = () =>{
//     return <div className="loader"></div>
// }

// export default Loader;



export const Loader = () => {
    return (
      <div className="parentDisable">
        <div className="overlay-box">
            <div className="loader"></div>
        </div>
      </div>
    );
  };


