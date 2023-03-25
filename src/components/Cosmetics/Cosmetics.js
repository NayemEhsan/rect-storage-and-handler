import React, { useEffect, useState } from 'react';
import Cosmetic from '../cosmetic/Cosmetic';
// import { add } from '../../Utilities/calculate';

const Cosmetics = () => {

    // const first = 100;
    // const second = 50;
    // const total = add(first,second);


    // const cosmetics =[
    //     {id : 1, name :'Mobile', price : 50000},
    //     {id : 2, name :'Laptop', price : 60000},
    //     {id : 3, name :'Watch', price : 3000},
    //     {id : 4, name :'sunglass', price : 2000},
    //     {id : 5, name :'shoes', price : 3000},
    //     {id : 6, name :'dress', price : 5000},
    // ]

    const [cosmetics,setCosmetics] = useState([]);

    useEffect (() =>{
       fetch('data.json')
       .then(res => res.json())
       .then(data => setCosmetics(data)) 
    },[])
    return (
        <div>
           <h1>Welcome To My Cosmetics Store</h1> 
         
           {
            cosmetics.map(cosmetic => <Cosmetic
                 key ={cosmetic._id}
                 cosmetic ={cosmetic}
            ></Cosmetic>)
           }
        </div>
    );
};

export default Cosmetics;