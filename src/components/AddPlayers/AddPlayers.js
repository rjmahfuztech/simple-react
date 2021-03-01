import React from 'react';
import AfterAdded from '../AfterAddedPlayer/AfterAdded';
import './AddPlayers.css';

const AddPlayers = (props) => {
    const addPlayer = props.addPlayer;
    const totalBudget = addPlayer.reduce((total, player) => total + Number(player.salary), 0);

    return (
        <div className="player-container">
            <h2>Team players Information</h2>
            <h4>Current players: {addPlayer.length}</h4>
            <h4>Total Budget: {totalBudget}</h4>
            <div>
                {
                    addPlayer.map(playerInfo => <AfterAdded playerInfo={playerInfo} key={playerInfo.id}></AfterAdded>)
                }
            </div>
        </div>
    );
};

export default AddPlayers;