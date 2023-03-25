import React from 'react';
import { add } from '../../Utilities/calculate';

const Cosmetics = () => {

    const first = 100;
    const second = 50;
    const total = add(first,second);
    return (
        <div>
           <h1>Welcome To My Cosmetics Store</h1> 
           <p>Total:{total}</p>
        </div>
    );
};

export default Cosmetics;