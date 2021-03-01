import React from 'react';
import './AfterAdded.css';

const AfterAdded = (props) => {
    const {name, salary} = props.playerInfo;

    return (
        <div className="style">
            <h5>Name: {name}</h5>
            <h5>Salary: ${salary}</h5>
        </div>
    );
};

export default AfterAdded;