// src/App.tsx
import { Routes, Route } from 'react-router-dom'
import Navbar    from './components/Navbar'
import Inicio    from './pages/Inicio'
import Cursos    from './pages/Cursos'
import DetalleCurso from './pages/DetalleCurso'
import Registro  from './pages/Registro'
import './App.css'

function App() {
  return (
    <>
      {/* Navbar aparece en TODAS las páginas */}
      <Navbar />

      {/* Solo se renderiza la página que coincide con la URL actual */}
      <div className="container mt-4">
        <Routes>
          <Route path="/"         element={<Inicio />} />
          <Route path="/cursos"   element={<Cursos />} />
          <Route path="/cursos/:id" element={<DetalleCurso />} />
          <Route path="/registro" element={<Registro />} />
          {/* Ruta comodín: si ninguna coincide, mostrar página de inicio */}
          <Route path="*"         element={<Inicio />} />
        </Routes>
          
      </div>
      
      <footer className="app-footer text-center">
        <p className="mb-0">© 2026 Portal de Cursos xd</p>
      </footer>
    </>
  )
}
export default App

