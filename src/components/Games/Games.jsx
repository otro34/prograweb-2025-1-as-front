import { useState, useEffect } from 'react'

import GameCard from './GameCard/GameCard';
import gamesApi from '../../api/gamesApi';
import './Games.css'

const Games = () => {

    const [games, setGames] = useState([])
    const [ filteredGames, setFilteredGames ] = useState(games)
    const [ filterValue, setFilterValue ] = useState('')

    const filterGames = () => {
        const preFilteredGames = games.filter(game => game.name.includes(filterValue))
        setFilteredGames(preFilteredGames)
    }

    const handleLoad = async () => {
        const rawGames = await gamesApi.findAll();
        setGames(rawGames);
        setFilteredGames(rawGames)
    }

    useEffect(() => {
        if (filterValue === '') {
            setFilteredGames(games)
        }
    }, [filterValue])

    useEffect(() => {
        handleLoad();
    },[])

    return (
        <main className="mainGameCard">
            <h2>Juegos Destacados</h2>
            <section className="sectionSearch">
                <input type="text" value={filterValue}
                    onChange={(e) => setFilterValue(e.target.value)} ></input>
                <button onClick={()=> filterGames()}>Search</button>
            </section>
            <section className="sectionGameCard">
                {
                    filteredGames.map(game => 
                    <GameCard 
                    id={game.id}
                    key={game.id}
                    img={game.imgThumb} 
                    name={game.name} 
                    precio={game.precio}
                    precioConDescuento={game.precioConDescuento} />)
                }
            </section>
        </main>
    )
}

export default Games;