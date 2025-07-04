import React, { useState, useEffect } from 'react';
import gamesApi from '../../../api/gamesApi';
const NewGame = ({ afterSave }) => {

    const defaultGame = {
        id: 0,
        name: '',
        precio: 0,
        precioConDescuento: 0,
        porcentajeDescuento: 0,
        publisher: "",
        genero: "",
        caracteristicas: [],
        descripcion: "",
        jugarCon: [],
        funcionalidades: [],
        img: "",
        imgThumb: ""
    }

    const [ game, setGame ] = useState(defaultGame)

    const handleSubmit = async () => {
        console.log(game)
        await gamesApi.create(game)
        alert('Nuevo juego agregado!');
        afterSave();
    }

    return (
        <section> 
            <h2>Agregar Nuevo Juego</h2>
            <br/>
            <label>Nombre: </label>
            <br/>
            <input type="text" name="name" 
                value = {game.name} onChange={(e) => setGame({ ...game, name: e.target.value})}/>
            <br/>
            <label>Precio: </label>
            <br/>
            <input type="text" name="precio" 
                value = {game.precio} onChange={(e) => setGame({ ...game, precio: e.target.value})}/>
            <br/>
            <label>Precio con Descuento: </label>
            <br/>
            <input type="text" name="precioConDescuento"
                value = {game.precioConDescuento} onChange={(e) => setGame({ ...game, precioConDescuento: e.target.value})} />
            <br/>
            <label>Porcentaje Descuento: </label>
            <br/>
            <input type="text" name="porcentajeDescuento" 
                value = {game.porcentajeDescuento} onChange={(e) => setGame({ ...game, porcentajeDescuento: e.target.value})}/>
            <br/>
            <label>Publisher: </label>
            <br/>
            <input type="text" name="publisher" 
                value = {game.publisher} onChange={(e) => setGame({ ...game, publisher: e.target.value})}/>
            <br/>
            <label>Genero: </label>
            <br/>
            <input type="text" name="genero" 
                value = {game.genero} onChange={(e) => setGame({ ...game, genero: e.target.value})}/>
            <br/>
            <label>Caracteristicas: </label>
            <br/>
            <input type="text" name="caracteristicas" 
                value = {game.caracteristicas} onChange={(e) => setGame({ ...game, caracteristicas: e.target.value.split(',')})}/>
            <br/>
            <label>Descripcion: </label>
            <br/>
            <input type="text" name="descripcion"
                value = {game.descripcion} onChange={(e) => setGame({ ...game, descripcion: e.target.value})} />
            <br/>
            <label>Jugar Con: </label>
            <br/>
            <input type="text" name="jugarCon" 
                value = {game.jugarCon} onChange={(e) => setGame({ ...game, jugarCon: e.target.value.split(',')})}/>
            <br/>
            <label>Funcionalidades: </label>
            <br/>
            <input type="text" name="funcionalidades" 
                value = {game.funcionalidades} onChange={(e) => setGame({ ...game, funcionalidades: e.target.value.split(',')})}/>
            <br/>
            <label>IMG: </label>
            <br/>
            <input type="text" name="img"
                value = {game.img} onChange={(e) => setGame({ ...game, img: e.target.value})} />
            <br/>
            <label>IMG THUMB: </label>
            <br/>
            <input type="text" name="imgThumb"
                value = {game.imgThumb} onChange={(e) => setGame({ ...game, imgThumb: e.target.value})} />
            <br/>
            <button onClick={() => handleSubmit() }>GUARDAR</button>

        </section>
    )
}

export default NewGame;