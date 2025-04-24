import React, { useEffect, useState } from 'react';
import { getAllSprints } from '../../../http/sprints';
import { sprintStore } from '../../../store/sprintStore';
import { CardListSprint } from '../CardList/CardListSprint';
import { ISprint } from '../../../types/ISprint'; 
import { ModalSprint } from "../Modal/ModalSprint"; // <- import corregido

const ListSprints: React.FC = () => {
  const sprints = sprintStore((state) => state.sprints);
  const setSprintActivo = sprintStore((state) => state.setSprintActivo);
  const setArraySprints = sprintStore((state) => state.setArraySprints);

  const [openModalEdit, setOpenModalEdit] = useState(false); 

  const handleOpenModalEdit = (sprint: ISprint) => {
    setSprintActivo(sprint);
    setOpenModalEdit(true); // <- faltaba esto
  };

  const handleCloseModal = () => {
    setOpenModalEdit(false);
    setSprintActivo(null);
  };

  const handleCrearSprint = () => {
    setSprintActivo(null); // para que no cargue un sprint activo
    setOpenModalEdit(true);
  };

  const getSprints = async () => {
    try {
      const data = await getAllSprints();
      if (data) setArraySprints(data);
    } catch (error) {
      console.error("Error al obtener los sprints", error);
    }
  };

  useEffect(() => {
    getSprints();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4 justify-self-center font-mono">LISTA DE SPRINTS</h2>

      {sprints.length > 0 ? (
        sprints.map((sprint: ISprint) => (
          <div key={sprint.id} className="flex flex-col">
            <CardListSprint handleOpenModalEdit={handleOpenModalEdit} sprint={sprint} />
          </div>
        ))
      ) : (
        <div>No hay sprints disponibles</div>
      )}

      <button
        className="bg-[#504136] text-white px-4 py-2 rounded-full"
        onClick={handleCrearSprint}
      >
        Crear tarea <span className="ml-2">+ </span>
      </button>

      {openModalEdit && <ModalSprint handleCloseModal={handleCloseModal} />}
    </div>
  );
};

export default ListSprints;


