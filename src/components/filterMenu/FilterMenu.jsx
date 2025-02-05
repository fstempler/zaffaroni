import './filterMenu.css';
// Components
import BlueBtn from '../BlueBtn/BlutBtn';



const FilterMenu = ({ filters, setFilters, locations }) => {
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
                <select onChange={(e) => handleChange('ubicacion', e.target.value)} 
                  value={filters.ubicacion} 
                  className='filterMenu__Select'>
                    {locations.map((location, index) => (
                      <option key={index} value={location}>
                      {location}
                      </option>
                    ))}
                </select>
            </div>

            {/* Filtros por rango */}
            {['precio', 'superficie', 'ambientes', 'banos'].map((filter) => (
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
            <div className="filter-section">
                {['Casas', 'Lote', 'Departamento', 'PH', 'Cochera', 'Campo', 'Terreno', 'Local', 'Oficina'].map((tipo) => (
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

            {/* Filtro por tipo de operación */}
            {/* <div className="filter-section">
                <h4 className='filterMenu__Title'>Tipo de operación</h4>
                <select onChange={(e) => handleChange('tipoOperacion', e.target.value)} value={filters.tipoOperacion} className='filterMenu__Select'>
                    <option value="">Seleccionar tipo de operación</option>
                    <option value="compra">Compra</option>
                    <option value="alquiler">Alquiler</option>
                    <option value="emprendimiento">Emprendimiento</option>
                </select>
            </div> */}

            <BlueBtn text={"Filtrar"} onClickAction={() => console.log('Aplicando filtros')} />
            <button onClick={resetFilters} className='deleteFilterBtn'>Borrar todos</button>
        </div>
    );
};

export default FilterMenu;
