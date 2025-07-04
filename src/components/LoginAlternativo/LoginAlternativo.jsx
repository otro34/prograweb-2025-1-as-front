import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

import loginApi from '../../api/loginApi.js'

import './Login.css'

const LoginAlternativo = () => {

    const navigate = useNavigate();

    const [ usuario, setUsuario ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ usuarios, setUsuarios ] = useState([])


    const buscarUsuario = () => {
        const result = usuarios.filter(x => x.username === usuario && x.password === password)[0];
        return result;
    }

    const handleIniciarSesion = async () => {
        const foundUser = await loginApi.login({ username: usuario, password: password});

        if (foundUser) {
            localStorage.setItem("usuario",JSON.stringify(foundUser))
            navigate('/dashboard')
            window.location.reload()
        } else {
            alert('Inicio de Sesion Incorrecto!')
        }
    }

    return (
        <>
            <section className="sectionLogin">
                <h2>Inicie Sesión Alternativamente!</h2>
                <label htmlFor="usuario">Usuario: </label>
                <br /> 
                <input type="text" id="usuario"
                    value={usuario} onChange={(e) => setUsuario(e.target.value)} />
                <br />
                <label htmlFor="password">Password: </label>
                <br />
                <input type="password" id="password"
                    value={password} onChange={(e) => setPassword(e.target.value)} />
                <br /><br />
                <button onClick={() => handleIniciarSesion() }>INICIAR SESION</button>
            </section>
        </>
    )
}



export default LoginAlternativo;