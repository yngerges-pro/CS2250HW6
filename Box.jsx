import React from 'react';
import "./Box.css";

export const Box = (props) => {
    return (
        <div className="Box"><h1>{props.text}{props.background}</h1></div>
    )
    
}