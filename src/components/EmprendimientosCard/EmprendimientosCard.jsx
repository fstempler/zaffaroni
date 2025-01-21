import './emprendimientosCard.css';

const EmprendimientosCard = ({ barrio, title, description, price, image }) => {
    return (
        <div className='emprendimientosCard__Container' style={{ background:`linear-gradient(rgb(0,0,0,0.2), rgb(0,0,0,0.2)), url(${image})`}}>
            <div className='emprendimientosCard__Text-Container'>
                <p className='emprendimientosCard__Barrio'>{barrio}</p>
                <h2 className='emprendimientosCard__Title'>{title}</h2>
                <p className='emprendimientosCard__Description'>{description}</p>
            </div>
            <div className='emprendimientosCard__Price-Container'>
                <div className='emprendimientosCard__Icon-Container'>
                    <i className="bi bi-currency-dollar"></i>
                </div>
                <h2 className='emprendimientosCard__Price'> {price}</h2>
            </div>
        </div>
    )
}

export default EmprendimientosCard;