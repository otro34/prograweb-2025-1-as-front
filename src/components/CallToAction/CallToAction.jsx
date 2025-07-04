import './CallToAction.css'

import imgFacebook from '../../assets/facebook.JPG';
import imgTwitter from '../../assets/twitter.JPG';
import imgInstagram from '../../assets/instagram.JPG';

const CallToAction = () => {
    return (
        <>
            <section id="seccionBanner">
                <h2>PC Game Pass</h2>
                <p>Disfruta de una biblioteca de juegos en expansión en tu PC y en tu 
                    dispositivo móvil con Xbox Game Pass Ultimate.</p>
                <button id="btnUnete">Únete ahora </button>
                <button id="btnMasInformacion">Más Información </button>
            </section>
            <section id="seccionSigueXbox">
                <div>Sigue a Xbox</div>
                <img src={imgFacebook} alt="facebook" />
                <img src={imgTwitter} alt="twitter" />
                <img src={imgInstagram} alt="instagram" />
            </section>
        </>
    )
}

export default CallToAction;