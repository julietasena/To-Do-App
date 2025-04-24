import { useEffect, useState } from "react";
import { getAllTareas } from "../../../http/tareas";
import { tareaStore } from "../../../store/tareaStore";
import { ITarea } from "../../../types/ITarea";
import { CardListEstado } from "../CardList/CardListEstado";
import { sprintStore } from "../../../store/sprintStore";

export const ListEstado = () => {
  // Obtenemos el sprint activo y sus tareas
  const selectedSprint = sprintStore((state) => state.sprintActivo);
  const tareas = tareaStore((state) => state.tareas);
  const setTareaActiva = tareaStore((state) => state.setTareaActiva);
  const setArrayTareas = tareaStore((state) => state.setArrayTareas);

  const getTareas = async () => {
    const data = await getAllTareas();
    if (data) setArrayTareas(data);
  };

  useEffect(() => {
    getTareas();
  }, []);

  const [openModalTarea, setOpenModalTarea] = useState(false);

  const handleOpenModalEdit = (tarea: ITarea) => {
    setTareaActiva(tarea);
    setOpenModalTarea(true);
  };

  const handleCloseModal = () => {
    setTareaActiva(null);
    setOpenModalTarea(false);
  };

  // Filtrar tareas del sprint activo por estado
  // Solo procesamos si hay un sprint activo y tiene tareas
  const tareasPorHacer = selectedSprint?.tareas?.filter(tarea => tarea.estado === "porHacer") || [];
  const tareasEnProceso = selectedSprint?.tareas?.filter(tarea => tarea.estado === "enProceso") || [];
  const tareasCompletadas = selectedSprint?.tareas?.filter(tarea => tarea.estado === "completado") || [];

  return (
    
    <div className="flex space-x-4 w-full">
      {/* POR HACER Column */}
      <div className="w-1/3 bg-[#aad9b0] rounded-2xl p-4">
        <h2 className="text-xl font-bold mb-4 text-center">POR HACER</h2>
        {/* Lista de tareas por hacer */}
        <div className="space-y-2">
          {tareasPorHacer.map((tarea) => (
            <CardListEstado
              key={tarea.id}
              tarea={tarea}
              handleOpenModalEdit={handleOpenModalEdit}
            />
          ))}
        </div>
      </div>

      {/* EN PROCESO Column */}
      <div className="w-1/3 bg-[#aad9b0] rounded-2xl p-4">
        <h2 className="text-xl font-bold mb-4 text-center">EN PROCESO</h2>
        {/* Lista de tareas en proceso */}
        <div className="space-y-2">
          {tareasEnProceso.map((tarea) => (
            <CardListEstado
              key={tarea.id}
              tarea={tarea}
              handleOpenModalEdit={handleOpenModalEdit}
            />
          ))}
        </div>
      </div>

      {/* COMPLETADO Column */}
      <div className="w-1/3 bg-[#aad9b0] rounded-2xl p-4">
        <h2 className="text-xl font-bold mb-4 text-center">COMPLETADO</h2>
        {/* Lista de tareas completadas */}
        <div className="space-y-2">
          {tareasCompletadas.map((tarea) => (
            <CardListEstado
              key={tarea.id}
              tarea={tarea}
              handleOpenModalEdit={handleOpenModalEdit}
            />
          ))}
        </div>
      </div>
    </div>
  );
};