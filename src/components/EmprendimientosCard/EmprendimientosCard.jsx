import { Link } from 'react-router-dom';
import './emprendimientosCard.css';

const formatPrice = (price) => {
    return price.toLocaleString('es-AR', {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
    });
};

const EmprendimientosCard = ({ emprendimiento }) => {
    const emprendimientoImage = emprendimiento.imagen && emprendimiento.imagen.length > 0 ? emprendimiento.imagen[0] :emprendimientoImg;

    return (
        <Link to={`/emprendimientos/${emprendimiento.id}`} className='emprendimientoLink'>
        <div className='emprendimientosCard__Container' style={{ background:`linear-gradient(rgb(0,0,0,0.2), rgb(0,0,0,0.2)), url(${emprendimiento.imagen})`}}>
            <div className='emprendimientosCard__Text-Container'>
                <p className='emprendimientosCard__Barrio'>{emprendimiento.ubicacion}</p>
                <h2 className='emprendimientosCard__Title'>{emprendimiento.nombre}</h2>
                <p className='emprendimientosCard__Description'>{emprendimiento.descripcion}</p>
            </div>
            <div className='emprendimientosCard__Price-Container'>
                <div className='emprendimientosCard__Icon-Container'>
                    <i className="bi bi-currency-dollar"></i>
                </div>
                <h2 className='emprendimientosCard__Price'> {formatPrice(emprendimiento.precioDesde)}</h2>
            </div>
        </div>
        </Link>
    )
}

export default EmprendimientosCard;