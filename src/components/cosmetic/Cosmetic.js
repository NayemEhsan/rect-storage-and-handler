import React from 'react';
import './Cosmetic.css'
const Cosmetic = (props) => {
    const {name,price,_id} = props.cosmetic;
    return (
        <div className='cosmetic'>
           <h2>Buy This :{name}</h2>
           <p>Only For:${price}</p> 
           <p>id:{_id}</p>
        </div>
    );
};

export default Cosmetic;