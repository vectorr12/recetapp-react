function FiltroCatergoria({
  categorias,
  categoriaSeleccionada,
  onCategoriaChange,
  ordenes,
  ordenSeleccionado,
  onOrdenChange,
  soloVegetarianas,
  onVegetarianaToggle,
  busquedaNombre,
  onBusquedaNombreChange,
  totalRecetas,
}) {
  return (
    <section className="panel-filtros">
      <div className="filtro-titulo">
        <h2>Controles de receta</h2>
        <p>{totalRecetas} receta{totalRecetas === 1 ? '' : 's'} encontrada{totalRecetas === 1 ? '' : 's'}</p>
      </div>

      <div className="filtro-controles">
        <label>
          Buscar por nombre
          <input
            type="text"
            value={busquedaNombre}
            onChange={(event) => onBusquedaNombreChange(event.target.value)}
            placeholder="Ej. Tarta de Verduras"
          />
        </label>

        <label>
          Categoría
          <select
            value={categoriaSeleccionada}
            onChange={(event) => onCategoriaChange(event.target.value)}
          >
            {categorias.map((categoria) => (
              <option key={categoria} value={categoria}>
                {categoria}
              </option>
            ))}
          </select>
        </label>

        <label>
          Ordenar por
          <select value={ordenSeleccionado} onChange={(event) => onOrdenChange(event.target.value)}>
            {ordenes.map((orden) => (
              <option key={orden.value} value={orden.value}>
                {orden.label}
              </option>
            ))}
          </select>
        </label>

        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={soloVegetarianas}
            onChange={(event) => onVegetarianaToggle(event.target.checked)}
          />
          Solo vegetarianas
        </label>
      </div>
    </section>
  )
}

export default FiltroCatergoria
