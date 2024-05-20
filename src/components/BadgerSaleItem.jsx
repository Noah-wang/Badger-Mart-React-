import React, {useEffect, useState } from 'react';

export default function BadgerSaleItem(props) {

    // add a variable 
    const [count, setCount] = useState(0);

    // Function to decrease the count
    const decrease = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    // Function to increase the count
    const increase = () => setCount(count + 1);

    const itemStyle = {
        backgroundColor: props.featured ? '#F34349' : 'white', // Light yellow for featured items, white for others
        fontWeight: props.featured ? 'bold' : 'normal',
        // step 6:1 change global font
        fontFamily: 'Arial, sans-serif',

        // step 6:2 change the padding and margin and shadow
        padding: props.featured ? '50px' : '10px',
        margin:  props.featured ? '0px' : '5px 0',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',

        // step 6:3 change the words color
        color: props.featured ? 'white' : "red",


    };

    return <div style={itemStyle}>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <p>${props.price}</p>

        <div>
            <button onClick={decrease}  className="inline" disabled = {count <= 0} >-</button>
            <p className="inline">{count}</p>
            <button onClick={increase} className="inline" >+ </button>
        </div>
    </div>
}