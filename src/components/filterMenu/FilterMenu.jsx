import './filterMenu.css'
//Components
import BlueBtn from '../BlueBtn/BlutBtn';
import { useState } from 'react';

const FilterMenu = () => {
  const [filters, setFilters] = useState({
    ubicacion: '',
    precio: { min: '', max: '' },
    superficie: { min: '', max: '' },
    ambientes: { min: '', max: '' },
    banos: { min: '', max: '' },
    cochera: { min: '', max: '' },
    tipoPropiedad: [],
    tipoOperacion: '',
  });

  const handleChange = (filter, value) => {
    setFilters({ ...filters, [filter]: value });
  };

  const handleRangeChange = (filter, field, value) => {
    setFilters({
      ...filters,
      [filter]: { ...filters[filter], [field]: value },
    });
  };

  const handleMultiSelectChange = (filter, value) => {
    const currentSelection = filters[filter];
    const isSelected = currentSelection.includes(value);

    if (isSelected) {
      setFilters({
        ...filters,
        [filter]: currentSelection.filter((item) => item !== value),
      });
    } else {
      setFilters({
        ...filters,
        [filter]: [...currentSelection, value],
      });
    }
  };

  const applyFilters = () => {
    console.log('Filtros aplicados:', filters);
    // Aquí puedes enviar los filtros al backend o actualizar los resultados
  };

  const resetFilters = () => {
    setFilters({
      ubicacion: '',
      precio: { min: '', max: '' },
      superficie: { min: '', max: '' },
      ambientes: { min: '', max: '' },
      banos: { min: '', max: '' },
      cochera: { min: '', max: '' },
      tipoPropiedad: [],
      tipoOperacion: '',
    });
  };

  return (
    <div className="filter-menu">
        <div className='filterMenu__Title-Container'>
            <i className="bi bi-filter-square"></i><h3 className='filterMenu__Title'>Filtros</h3>
            
        </div>
      

      {/* Filtro por Ubicación */}
      <div className="filter-section">
        <h4 className='filterMenu__Title'>Ubicación</h4>
        <select onChange={(e) => handleChange('ubicacion', e.target.value)} value={filters.ubicacion} className='filterMenu__Select'>
          <option value="">Seleccionar ubicación</option>
          <option value="centro">Centro</option>
          <option value="barrio1">Barrio 1</option>
          <option value="barrio2">Barrio 2</option>
          <option value="zonaRural">Zona Rural</option>
        </select>
      </div>

      {/* Filtros por rango */}
      {['precio', 'superficie', 'ambientes', 'banos', 'cochera'].map((filter) => (
        <div className="filter-section" key={filter}>
          <h4 className='filterMenu__Title'>{filter.charAt(0).toUpperCase() + filter.slice(1)}</h4>
          <div className="range-inputs">
            <input
              type="number"
              placeholder="Mínimo"
              onChange={(e) => handleRangeChange(filter, 'min', e.target.value)}
              value={filters[filter].min}              
            />
            <input
              type="number"
              placeholder="Máximo"
              onChange={(e) => handleRangeChange(filter, 'max', e.target.value)}
              value={filters[filter].max}
            />
          </div>
        </div>
      ))}

      {/* Filtro por tipo de propiedad */}
      <h4 className='filterMenu__Title'>Tipo de propiedad</h4>
      <div className="accordion filterMenu__Accordion" id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button filterMenu__Accordion-Button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Seleccionar
              </button>
            </h2>
          <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <div className="filter-section">                
                 {['Casa', 'Lote', 'Departamento', 'PH', 'Cochera', 'Campo', 'Terreno', 'Local', 'Oficina'].map((tipo) => (
                <label key={tipo}>
                <input
                  type="checkbox"
                  onChange={() => handleMultiSelectChange('tipoPropiedad', tipo)}
                  checked={filters.tipoPropiedad.includes(tipo)}
                />
                {tipo}
                </label>
                ))}
              </div>
            </div>
          </div>
        </div>  
      </div>
      {/* <div className="filter-section">
        <h4>Tipo de propiedad</h4>
        {['Casa', 'Lote', 'Departamento', 'PH', 'Cochera', 'Campo', 'Terreno', 'Local', 'Oficina'].map((tipo) => (
          <label key={tipo}>
            <input
              type="checkbox"
              onChange={() => handleMultiSelectChange('tipoPropiedad', tipo)}
              checked={filters.tipoPropiedad.includes(tipo)}
            />
            {tipo}
          </label>
        ))}
      </div> */}

      {/* Filtro por tipo de operación */}
      <div className="filter-section">
        <h4 className='filterMenu__Title'>Tipo de operación</h4>
        <select onChange={(e) => handleChange('tipoOperacion', e.target.value)} value={filters.tipoOperacion} className='filterMenu__Select'>
          <option value="">Seleccionar tipo de operación</option>
          <option value="compra">Compra</option>
          <option value="alquiler">Alquiler</option>
          <option value="emprendimiento">Emprendimiento</option>
        </select>
      </div>

      {/* <button onClick={applyFilters} className='applyFilterBtn'>Aplicar filtros</button> */}
        <BlueBtn
        text={"Filtrar"}
        onClickAction={applyFilters}
        />

      <button onClick={resetFilters} className='deleteFilterBtn'>Borrar todos</button>
    </div>
  );
};

export default FilterMenu;



