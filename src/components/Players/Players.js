import React, { useEffect, useState } from 'react';
import AddPlayers from '../AddPlayers/AddPlayers';
import data from '../../Data/Data.json';
import './Players.css';
import PlayerInfo from '../PlayerInfo/PlayerInfo';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
const Players = () => {
    // console.log(players);
    const [playerInfo, setPlayerInfo] = useState([]);
    const [addPlayer, setPlayer] = useState([]);

    const handleAddPlayers = (player) => {
        const newPlayerAdd = [...addPlayer, player];
        setPlayer(newPlayerAdd);
    }

    useEffect(() => {
        setPlayerInfo(data);
    }, [])

    return (
        <div className = "players-container container">
            <div className="players-style">
                <div>
                    <h2>Total Players: {playerInfo.length}</h2>
                    {
                        playerInfo.map(playerDetails => <PlayerInfo playerDetails={playerDetails} handleAddPlayers={handleAddPlayers} key={playerDetails.id}></PlayerInfo>)
                    }
                </div>
            </div>
            <div>
                <AddPlayers addPlayer={addPlayer}></AddPlayers>
            </div>
        </div>
    );
};

export default Players;