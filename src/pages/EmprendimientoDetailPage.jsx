import './styles/emprendimientoDetailPage.css';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import emprendimientoData from '../db/emprendimientos.json';
import TuCasa from '../components/TuCasa/TuCasa';
import Tierras from '../components/Tierras/Tierras';

const EmprendimientoDetailPage = () => {    
    const { id } = useParams();
    const emprendimiento = emprendimientoData.find((item) => item.id === id); 


    const [expandedImage, setExpandedImage] = useState(null);

    if (!emprendimiento) return <p>Emprendimiento no encontrado</p>;


    return (
        <>
        <div className="emprendimiento-detail-page">
            <div className="emprendimiento-detail-container">
                {/* Carrusel de imágenes */}
                <div className="emprendimiento-carousel">
                    {emprendimiento.imagen.map((img, index) => (
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

                {/* Detalles del emprendimientoo */}
                <div className="emprendimiento-details">
                    <h1 className="emprendimiento-title">{emprendimiento.nombre}</h1>
                    <p className="emprendimiento-description">{emprendimiento.descripcion}</p>
                
                    <div className="emprendimiento-info">
                        {/* Información común a todos los emprendimientos */}
                        <p><strong>Precio Desde:</strong> ${emprendimiento.precioDesde.toLocaleString('es-AR')}</p>
                        <p><strong>Ubicación:</strong> {emprendimiento.ubicacion}</p>
                        <p><strong>Estado:</strong> {emprendimiento.estado}</p>

                        {/* Condicionales según el tipo de emprendimiento */}
                        {emprendimiento.tipo === "Departamento" && (
                            <>
                            <p><strong>Unidades Disponibles:</strong> {emprendimiento.unidadesDisponibles}</p>
                            <p><strong>Amenities:</strong> {emprendimiento.amenities.join(", ")}</p>
                            </>
                        )}

                        {emprendimiento.tipo === "Loteo" && (
                            <>
                            <p><strong>Lotes Disponibles:</strong> {emprendimiento.lotesDisponibles}</p>
                            <p><strong>Superficie Lote Promedio:</strong> {emprendimiento.superficieLotePromedio}</p>
                            <p><strong>Amenities:</strong> {emprendimiento.amenities.join(", ")}</p>
                            </>
                        )}

                        {emprendimiento.tipo === "Agropecuario" && (
                        <>
                        <p><strong>Superficie Total:</strong> {emprendimiento.superficieTotal}</p>
                        <p><strong>Actividades:</strong> {emprendimiento.actividades.join(", ")}</p>
                        <p><strong>Infraestructura:</strong> {emprendimiento.infraestructura.join(", ")}</p>
                        </>
                        )}
                    </div>

                    <Link to="/contact">
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

export default EmprendimientoDetailPage;
