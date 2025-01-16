import './destacadasCard.css'
//images
import bath from '../../assets/icons/bano.png';
import sqmt from '../../assets/icons/hogar.png'

function DestacadasCard ({ title, text, imgSrc, altText, price, squareMt, ambients, baths }) {
    return (
      <div className="card">
        <img src={imgSrc} className="card-img-top" alt={altText} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h5 className="card-price">{price}</h5>
          <div className='description__Container'>
            <div className='squareMt__Container'>
                <img className='icon-description' src={sqmt} alt='Ícono Metros Cuadrados' />
                <p className='mt-description'>  {squareMt}</p>
            </div>
            <div className='ambientes__Container'>                
                <p className='ambients-description'>{ambients}</p>
            </div>
            <div className='bath__Container'>
                <img className='icon-description' src={bath} alt='Ícono Baño' />
                <p className='bath-description'>  {baths}</p>
            </div>
          </div>
          <p className="card-text">{text}</p>          
        </div>
      </div>
    );
  }
  

export default DestacadasCard;