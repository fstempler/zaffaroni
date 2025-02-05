import './styles/productDetailPage.css';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import productData from '../db/products.json';
import TuCasa from '../components/TuCasa/TuCasa';
import Tierras from '../components/Tierras/Tierras';

const ProductDetailPage = () => {
    const { id } = useParams();
    const product = productData.find((item) => item.id === id);

    const [expandedImage, setExpandedImage] = useState(null);

    if (!product) return <p>Producto no encontrado</p>;

    return (
        <>
        <div className="product-detail-page">
            <div className="product-detail-container">
                {/* Carrusel de imágenes */}
                <div className="product-carousel">
                    {product.imagen.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`Imagen ${index + 1}`}
                            className="carousel-image"
                            onClick={() => setExpandedImage(img)}
                        />
                    ))}
                </div>

                {/* Modal para imagen expandida */}
                {expandedImage && (
                    <div className="image-modal" onClick={() => setExpandedImage(null)}>
                        <img src={expandedImage} alt="Imagen expandida" className="expanded-image" />
                        <span className="close-modal">✖</span>
                    </div>
                )}

                {/* Detalles del producto */}
                <div className="product-details">
                    <h1 className="product-title">{product.nombre}</h1>
                    <p className="product-description">{product.descripcion}</p>
                    <div className="product-info">
                        <p><strong>Precio:</strong> ${product.precio.toLocaleString('es-AR')}</p>
                        <p><strong>Ubicación:</strong> {product.ubicacion}</p>
                        <p><strong>Superficie:</strong> {product.superficie} m²</p>
                        <p><strong>Habitaciones:</strong> {product.habitaciones}</p>
                        <p><strong>Baños:</strong> {product.banos}</p>
                        <p><strong>Operación:</strong> {product.estado}</p>
                    </div>
                    <Link to={"/contact"}>
                        <button className="action-button">Solicitar más información</button>
                    </Link>
                </div>
            </div>            
        </div>
        <TuCasa />
        <Tierras />
        </>
    );
};

export default ProductDetailPage;
