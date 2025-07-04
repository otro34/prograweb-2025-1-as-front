import imgLogo from '../../assets/logo.JPG';
import './Header.css';

const Header = () => {

    const usuario = JSON.parse(localStorage.getItem("usuario"))

    const handleCerrarSesion = () => {
        localStorage.removeItem("usuario")
    }

    return (
        <header>
            <a href='/'>
                <img src={imgLogo} />
            </a>
            <ol>
                <li><a href='/games'>
                    Game Pass
                    </a>
                </li>
                <li>Soporte técnico</li>
                <li>Todo Microsoft</li>
                <li>
                    {
                        usuario ? <a href="" onClick={() => handleCerrarSesion() }>Cerrar Sesión</a> 
                        : <a href="/login" >Iniciar Sesión</a> 
                    }
                    </li>
            </ol>
        </header>
        
    )
}

export default Header