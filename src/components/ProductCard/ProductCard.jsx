import './productCard.css';
//images
import bath from '../../assets/icons/bano.png';
import sqmt from '../../assets/icons/hogar.png'
import productImg from '../../assets/destacadas-card.png'
//Components
import BlueBtn from '../BlueBtn/BlutBtn';
import { Link } from 'react-router-dom';


const formatPrice = (price) => {
    return price.toLocaleString('es-AR', {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
    });
};

const ProductCard = ({ product }) => {   

    //Accede a la 1ra imagen el Array
    const productImage = product.imagen && product.imagen.length > 0 ? product.imagen[0] : productImg;
    
    return (
        <div className="card productCard__Container" >
            <img src={productImage} className="card-img-top" alt="..."/>
            <div className="card-body productCard__Content-Container">
                <div className='productCard__Badge'>
                    {product.estado || 'Venta'}
                </div>
                <h2 className='productCard__Title'>{product.nombre}</h2>
                <h5 className="card-title">$ {formatPrice(product.precio)}</h5>
                <p className="card-text productCard__Text">{product.direccion || 'Dirección no disponible'}</p>
                <div className='productCard__Data-Container'>
                    <div className='squareMt__Container'>
                        <img className='icon-description' src={sqmt} alt='Ícono Metros Cuadrados' />
                        <p className='mt-description'>{product.superficie || 0}</p>
                    </div>
                    <div className='ambientes__Container'>                
                        <p className='ambients-description'>{product.ambientes || 'N/A'}</p>
                    </div>
                    <div className='bath__Container'>
                        <img className='icon-description' src={bath} alt='Ícono Baño' />
                        <p className='bath-description'>{product.banos || 'N/A'}</p>
                    </div>
                </div>
                <div className='productCard__Btn-Container'>
                    <Link to={`/producto/${product.id}`}>
                        <BlueBtn
                        text={"Ver más"}
                        icon={"bi bi-arrow-right"}
                        />                        
                    </Link>
                </div>
                
            </div>
        </div>
    )
}

export default ProductCard