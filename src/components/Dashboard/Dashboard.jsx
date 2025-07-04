import './Dashboard.css'
import React, { useState, useEffect } from 'react';
import gamesApi from '../../api/gamesApi.js';
import dbzCharactersApi from '../../api/dbzCharacterApi.js'
import NewGame from './NewGame/NewGame.jsx';

const Dashboard = () => {

    const [ games, setGames ] = useState([])
    const [ showFormularioNewGame, setShowFormulario ] = useState(false)
    const [ dbzCharacter, setDbzCharacter ] = useState({ image : "https://media.tenor.com/TAqs38FFJiwAAAAi/loading.gif" })

    const handleLoad = async () => {
        const rawgames = await gamesApi.findAll()
        setGames(rawgames)
        const rawdbzchar = await dbzCharactersApi.findOne(2);
        console.log(rawdbzchar)
        setDbzCharacter(rawdbzchar)
    }


    useEffect(() => {
        handleLoad();
    }, [])

    return (
        <section className="sectionDashboard">
            <h2>Dashboard</h2>
            <br />
            <img src={ dbzCharacter.image } alt="vegeta" />
            <br />
            <table border="1">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Publicador</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        games.map(item => 
                            <tr key={item.id}>
                                <td >
                                    {item.id}
                                </td>
                                <td>{item.name}</td>
                                <td>{item.publisher}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <br></br>
            <button onClick={() => setShowFormulario(!showFormularioNewGame)}>AGREGAR NUEVO</button>
            <br></br>
            { showFormularioNewGame ? <NewGame afterSave={handleLoad} /> : "" }
        </section>
    )
}

export default Dashboard;