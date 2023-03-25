import React from 'react';
import './Cosmetic.css'
const Cosmetic = (props) => {
    const {name,price,_id} = props.cosmetic;
    const addToCart =(_id) =>{
        console.log('item added',_id);
    }
    return (
        <div className='cosmetic'>
           <h2>Buy This :{name}</h2>
           <p>Only For:${price}</p> 
           <p>id:{_id}</p>
           <button onClick={() => addToCart(_id)}>Add TO Cart</button>
        </div>
    );
};

export default Cosmetic;