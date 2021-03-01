import React from 'react';
import './PlayerInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const PlayerInfo = (props) => {
    const { image, name, citizenship, current_club, position, salary, date_of_birth_and_age } = props.playerDetails;
    const handleAddPlayers = props.handleAddPlayers;

    return (
        <div className="card mb-3 card-style">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={image} alt="..."/>
                    <button onClick={() => handleAddPlayers(props.playerDetails)} className="btn btn-success mt-4 pl-3 pr-3"><FontAwesomeIcon icon={faPlus}/> Add Player</button>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Name: {name}</h5>
                        <p className="card-text">Position: {position}</p>
                        <p className="card-text">current Club: {current_club}</p>
                        <p className="card-text">Citizenship: {citizenship}</p>
                        <p className="card-text">Date of birth/Age:{date_of_birth_and_age}</p>
                        <p className="card-text">Salary: {salary}</p>
                     </div>
                </div>
            </div>
        </div>
    );
};

export default PlayerInfo;