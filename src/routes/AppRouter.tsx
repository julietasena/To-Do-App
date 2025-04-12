
import { BrowserRouter, Navigate, Route, Routes } from "react-router"
import BacklogScreen from "../components/screens/BacklogScreen"
import SprintScreen from "../components/screens/SprintScreen"


export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/sprints" />} />
        <Route path="/tareas" element={<BacklogScreen />} />
        {/* Ruta dinámica con parámetro :id */}
        <Route path="/sprints" element={<SprintScreen />} />
      </Routes>
    </BrowserRouter>

  )
}
