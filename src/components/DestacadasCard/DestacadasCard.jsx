import './destacadasCard.css'
//images
import bath from '../../assets/icons/bano.png';
import sqmt from '../../assets/icons/hogar.png'
import { Link } from 'react-router-dom';

const formatPrice = (price) => {
  return price.toLocaleString('es-AR', {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
  });
};

function DestacadasCard ({ product }) {
    const productImage = product.imagen && product.imagen.length > 0 ? product.imagen[0] : productImg;

    return (
      <Link to={`/producto/${product.id}`}>
      <div className="card">v
        <img src={productImage} className="card-img-top" alt={product.nombre} />
        <div className="card-body">
          <h5 className="card-title">{product.nombre}</h5>
          <h5 className="card-price">{formatPrice(product.precio)}</h5>
          <div className='description__Container'>
            <div className='squareMt__Container'>
                <img className='icon-description' src={sqmt} alt='Ícono Metros Cuadrados' />
                <p className='mt-description'>  {product.superficie}</p>
            </div>
            <div className='ambientes__Container'>                
                <p className='ambients-description'>{product.ambientes}</p>
            </div>
            <div className='bath__Container'>
                <img className='icon-description' src={bath} alt='Ícono Baño' />
                <p className='bath-description'>  {product.banos}</p>
            </div>
          </div>
          <p className="card-text">{product.descripcion}</p>          
        </div>
      </div>
      </Link>
    );
  }
  

export default DestacadasCard;