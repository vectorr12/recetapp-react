import RecetaCard from './recetaCard'

function ListaRecetas({ recetas }) {
  return (
    <section className="lista-recetas">
      {recetas.length === 0 ? (
        <div className="estado-vacio">No hay recetas para esta selección.</div>
      ) : (
        recetas.map((receta) => (
          <RecetaCard
            key={receta.id}
            nombre={receta.nombre}
            origen={receta.origen}
            porciones={receta.porciones}
            categoria={receta.categoria}
            descripcion={receta.descripcion}
            ingredientes={receta.ingredientes}
            esVegetariana={receta.esVegetariana}
          />
        ))
      )}
    </section>
  )
}

export default ListaRecetas
