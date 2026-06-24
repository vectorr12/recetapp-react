function RecetaCard({ nombre, origen, porciones, categoria, descripcion, ingredientes, esVegetariana }) {
  return (
    <article className={`receta-card categoria-${categoria.toLowerCase()} ${esVegetariana ? 'vegetariana' : ''}`}>
      <header className="receta-encabezado">
        <div>
          <h3>{nombre}</h3>
          <p className="subtexto">{origen} · {porciones} porciones</p>
        </div>
        <span className="categoria-pill">{categoria}</span>
      </header>

      <p className="descripcion">{descripcion}</p>

      <div className="ingredientes">
        <strong>Ingredientes</strong>
        <ul>
          {ingredientes.map((ingrediente) => (
            <li key={ingrediente}>{ingrediente}</li>
          ))}
        </ul>
      </div>

      {esVegetariana && <span className="badge-vegetariana">Vegetariana</span>}
    </article>
  )
}

export default RecetaCard
