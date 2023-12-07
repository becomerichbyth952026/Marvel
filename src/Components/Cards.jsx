import React from 'react'
import Hulk from '../media/hulk.jpg';

 
export const Cards = () => {
  return (

    <>

      <div className='card'>

        <img src={Hulk} alt="" />
        <div className="card-content">
          <h3>Hulk</h3>
        </div>
      </div>

     

    
    
    </>
    
  );
}

export default Cards