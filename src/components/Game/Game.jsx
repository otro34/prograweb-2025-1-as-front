import './Game.css'

import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import gamesApi from '../../api/gamesApi.js'
import Chip from '../Chip/Chip.jsx';

const Game = () => {

    const params = useParams()
    const gameId = params.gameId;

    const defaultGame = {
        id: 0,
        name: '',
        precio: 0,
        precioConDescuento: 0,
        porcentajeDescuento: 0,
        publisher: "",
        genero: "",
        caracteristicas: "",
        descripcion: "",
        jugarCon: "",
        funcionalidades: ""
    }
    
    const [game, setGame] = useState(defaultGame)

    const load = async () => {
        const rawGame = await gamesApi.findOne(gameId);
        setGame(rawGame);
    }

    useEffect(() => {
        load()
    },[])

    return (
        <>
            <section className="sectionGame">
                <img src={game.img} />
                <div>
                    <h2>
                        {game.name}
                    </h2>
                    <h3>{game.publisher} - {game.genero}</h3>
                    <ul>
                        {
                            game.caracteristicas.split(',')?.map(item => <li>{item}</li>)
                        }
                    </ul>
                </div>
            </section>
            <section className="sectionGameButtons">
                <div className="buttonInstalar">
                    <b>INSTALAR EN</b>
                    <br/> 
                    <h7>Incluido con Gamepass</h7>
                    </div>
                <div className="buttonComprar">
                    <b>COMPRAR</b>  
                </div>
                <select>
                    <option>Indiana Jones y el gran Círculo</option>
                    <option>Indiana Jones y el gran Círculo: Edicion Premium Digital</option>
                </select>
                <button>&hearts;</button>
                <button>...</button>

            </section>        
            <section className="sectionGameDescripcion">
                <div>
                    <h3>Descripción: </h3>
                    <p>
                        {game.descripcion}
                    </p>
                </div>
                <div>
                    <h3>Jugar Con</h3>
                        {
                            game?.jugarCon?.split(',').map(item => <Chip text={item} />)
                        }
                    <h3>Funcionalidades</h3>
                    <div className="sectionGameDescripcionFuncionalidades">
                    {
                        game?.funcionalidades?.split(',').map(item => <Chip text={item} />)
                    }
                    </div>
                </div>

            </section>   
        </>
    )
}

export default Game