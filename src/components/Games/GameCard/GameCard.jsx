import './GameCard.css'

const GameCard = (props) => {

    return(
        <>
            <article>
                <div>
                    <a href={"games/"+ props.id } >
                        <img src={props.img} />
                    </a>
                </div>
                <div>
                    <h3><a href={"games/"+ props.id } >
                    {props.name}
                    </a></h3>
                    <h5>S/ {props.precio}</h5>
                    <h4>S/ {props.precioConDescuento}</h4>
                </div>
            </article>
        </>
    )
}

export default GameCard;