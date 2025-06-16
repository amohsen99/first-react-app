
import React from 'react';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.jpg';

function Image(props) {
    return (

      <div className="flex justify-center items-center h-screen">
        <h1>{props.name}</h1>
        <img src={image1} alt="Random Image" className="w-1/10" />
      </div>
    );
  }
  
  export default Image;