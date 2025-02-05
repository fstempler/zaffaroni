import { useEffect, useState } from 'react'
import './styles/comprar.css'
//components
import SortBar from '../components/SortBar/SortBar'
import FilterMenu from '../components/filterMenu/FilterMenu'
import ProductCard from '../components/ProductCard/ProductCard'
import Tierras from '../components/Tierras/Tierras'
import Tasaciones from '../components/Tasaciones/Tasaciones'
//Data
import productsData from '../db/products.json'


const Comprar = () => {

    //SI HAY QUE CARGARLOS DINÁMICAMENTE
    // const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     fetch('../db/products.json')
    //     .then(response => response.json())
    //     .then(data => setProducts(data))
    // }, []);

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [filters, setFilters] = useState({
        ubicacion: '',
        precio: { min: '', max: ''},
        superficie: { min: '', max: '' },
        ambientes: { min: '', max: '' },
        banos: { min: '', max: '' },
        cochera: { min: '', max: '' },
        tipoPropiedad: [],
        tipoOperacion: '',
    })
    
        useEffect(() => {
            const filteredProducts = productsData.filter(product => product.estado === "Venta");
            setProducts(filteredProducts);
        }, []);

        useEffect (() => {
            let updatedProducts = products.filter(product => {
                // filtro ubicación
                if (filters.ubicacion && product.ubicacion !== filters.ubicacion) return false;

                // Filtro precios
                const { min: minPrecio, max: maxPrecio } = filters.precio;
                if (minPrecio && product.precio < parseInt(minPrecio)) return false;
                if (maxPrecio && product.precio > parseInt(maxPrecio)) return false;

                //filtro superficie
                const { min: minSuperficie, max: maxSuperficie } = filters.superficie;
                if (minSuperficie && product.superficie < parseInt(minSuperficie)) return false;
                if (maxSuperficie && product.superficie > parseInt(maxSuperficie)) return false;

                //filtro ambientes
                const { min: minAmbientes, max: maxAmbientes } = filters.ambientes;
                if (minAmbientes && product.ambientes < parseInt(minAmbientes)) return false;
                if (maxAmbientes && product.ambientes > parseInt(maxAmbientes)) return false;

                //filtro baños
                const { min: minBanos, max: maxBanos } = filters.banos;
                if (minBanos && product.banos < parseInt(minBanos)) return false;
                if (maxBanos && product.banos > parseInt(maxBanos)) return false;

                //Filtro Tipo de Propiedad
                if (filters.tipoPropiedad.length > 0 && !filters.tipoPropiedad.includes(product.categoria)) return false; 

                //Filtro por tipo dee operación
                if (filters.tipoOperacion && product.estado !== filters.tipoOperacion) return false; 

                return true; 
            });
             

            setFilteredProducts(updatedProducts);
        }, [filters, products]);

        const uniqueLocations = Array.from(new Set(products.map(product => product.ubicacion)));


    return (
        <section className='comprar__MainContainer'>
            <SortBar />
            <section>
                <div className='comprar__Content-Main-Container'>
                    <div className='row'>
                        <div className='col-12 col-md-12 col-lg-4 order-md-1 order-lg-2 comprar__FilterMenu-Col'>
                            <FilterMenu 
                                filters={filters} 
                                setFilters={setFilters}
                                locations={uniqueLocations}
                            />
                        </div>
                        <div className='col-12 col-md-12 col-lg-8 order-md-2  order-lg-1 comprar__Content-Col'>
                            <div className='comprar__Content-Container'>
                                {filteredProducts.length > 0 ? (
                                    filteredProducts.map((product, index) => (
                                        <ProductCard key={index} product={product}/>
                                    ))
                                ) : (
                                    <p>No hay propiedad que coincidan con los filtros especificados</p>
                                )}
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

export default Comprar