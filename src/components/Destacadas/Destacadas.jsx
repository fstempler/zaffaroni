import './destacadas.css'
//Components
import DestacadasCard from '../DestacadasCard/DestacadasCard';
//Data
import productsData from '../../db/products.json'

const Destacadas = ({ productIds }) => {
    const filteredProducts = productsData.filter(product => productIds.includes(product.id));
    return (
        <section className='destacadas__MainContainer'>
            <h2 className='destacadas__Title'>Propiedades Destacadas</h2>
            <div className='destacadasCards__Container'>
                {filteredProducts.map((product) => (
                    <DestacadasCard key={product.id} product={product} />
                ))}
            </div>
            
        </section>
    )
}

export default Destacadas;