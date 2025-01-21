import './styles/alquilar.css'
//components
import SortBar from '../components/SortBar/SortBar'
import FilterMenu from '../components/filterMenu/FilterMenu'
import ProductCard from '../components/ProductCard/ProductCard'
import Tierras from '../components/Tierras/Tierras'
import Tasaciones from '../components/Tasaciones/Tasaciones'

const Alquilar = () => {
    return (
        <section className='alquilar__MainContainer'>
            <SortBar />
            <section>
                <div className='alquilar__Content-Main-Container'>
                    <div className='row'>
                        <div className='col-12 col-md-12 col-lg-4 order-md-1 order-lg-2 alquilar__FilterMenu-Col'>
                            <FilterMenu />
                        </div>
                        <div className='col-12 col-md-12 col-lg-8 order-md-2  order-lg-1 alquilar__Content-Col'>
                            <div className='alquilar__Content-Container'>
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />                                
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
            <Tierras />
            <Tasaciones />
        </section>
        
    )
}

export default Alquilar
