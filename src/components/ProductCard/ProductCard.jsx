import './productCard.css';
//images
import bath from '../../assets/icons/bano.png';
import sqmt from '../../assets/icons/hogar.png'
import productImg from '../../assets/destacadas-card.png'
//Components
import BlueBtn from '../BlueBtn/BlutBtn';
import { Link } from 'react-router-dom';

const ProductCard = () => {
    return (
        <div className="card productCard__Container" >
            <img src={productImg} className="card-img-top" alt="..."/>
            <div className="card-body productCard__Content-Container">
                <div className='productCard__Badge'>
                    Venta
                </div>
                <h5 className="card-title">$150.000</h5>
                <p className="card-text productCard__Text">Frascheri 164, Arrecifes, Buenos Aires. </p>
                <div className='productCard__Data-Container'>
                    <div className='squareMt__Container'>
                        <img className='icon-description' src={sqmt} alt='Ícono Metros Cuadrados' />
                        <p className='mt-description'>  250</p>
                    </div>
                    <div className='ambientes__Container'>                
                        <p className='ambients-description'>4 amb</p>
                    </div>
                    <div className='bath__Container'>
                        <img className='icon-description' src={bath} alt='Ícono Baño' />
                        <p className='bath-description'>  2</p>
                    </div>
                </div>
                <div className='productCard__Btn-Container'>
                    <Link to={"/"}>
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