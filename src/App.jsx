import { useMemo, useState } from 'react'
import { recetas } from './data/recetas'
import FiltroCatergoria from './components/FiltroCatergoria'
import ListaRecetas from './components/ListaRecetas'
import './App.css'

const categorias = ['Todas', 'Entrada', 'Fondo', 'Postre']
const ordenes = [
  { value: 'nombre', label: 'Nombre' },
  { value: 'categoria', label: 'Categoría' },
  { value: 'porciones', label: 'Porciones' },
  { value: 'origen', label: 'Origen' },
]

function App() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todas')
  const [ordenSeleccionado, setOrdenSeleccionado] = useState('nombre')
  const [soloVegetarianas, setSoloVegetarianas] = useState(false)

  const recetasFiltradas = useMemo(() => {
    return recetas
      .filter((receta) =>
        categoriaSeleccionada === 'Todas'
          ? true
          : receta.categoria === categoriaSeleccionada,
      )
      .filter((receta) => (soloVegetarianas ? receta.esVegetariana : true))
  }, [categoriaSeleccionada, soloVegetarianas])

  const recetasOrdenadas = useMemo(() => {
    return [...recetasFiltradas].sort((a, b) => {
      if (ordenSeleccionado === 'porciones') {
        return a.porciones - b.porciones
      }
      return a[ordenSeleccionado].localeCompare(b[ordenSeleccionado])
    })
  }, [recetasFiltradas, ordenSeleccionado])

  return (
    <main className="app-container">
      <header className="hero-section">
        <div>
          <span className="eyebrow">RecetApp</span>
          <h1>Explora recetas y encuentra tu siguiente plato</h1>
          <p>Filtra por categoría, ordena la lista y destaca las opciones vegetarianas.</p>
        </div>
      </header>

      <FiltroCatergoria
        categorias={categorias}
        categoriaSeleccionada={categoriaSeleccionada}
        onCategoriaChange={setCategoriaSeleccionada}
        ordenes={ordenes}
        ordenSeleccionado={ordenSeleccionado}
        onOrdenChange={setOrdenSeleccionado}
        soloVegetarianas={soloVegetarianas}
        onVegetarianaToggle={setSoloVegetarianas}
        totalRecetas={recetasFiltradas.length}
      />

      <ListaRecetas recetas={recetasOrdenadas} />
    </main>
  )
}

export default App
