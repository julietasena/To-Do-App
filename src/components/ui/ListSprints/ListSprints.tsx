import React, { useEffect } from 'react';
import { Eye, Edit, Trash2 } from 'lucide-react';
import { getAllSprints } from '../../../http/sprints';
import { sprintStore } from '../../../store/sprintStore';

const ListSprints: React.FC = () => {

  const sprints = sprintStore((state) => state.sprints)

  const setSprintActivo = sprintStore((state) => state.setSprintActivo)
  const setArraySprints = sprintStore((state) => state.setArraySprints);


  const getSprints = async () => {
    const data = await getAllSprints();
    if (data) setArraySprints(data);
  };

  useEffect(() => {
    getSprints();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4 justify-self-center font-mono">LISTA DE SPRINTS</h2>
      {sprints.length > 0 ? (
        sprints.map((sprint) => (
        <div
          key={sprint.id}
          className="bg-white/70 rounded-2xl shadow-md mb-5 p-3 flex flex-col"
        >
          <h3 className="font-semibold text-center">{sprint.nombre}</h3>
          <div className="flex mt-2">
            <p className="text-sm text-[#504136]"> {sprint.fechaInicio}</p>
            <p className="text-sm text-[#504136] ml-4"> {sprint.fechaFin}</p>
            <div className="flex items-center space-x-3 ml-4">
              <Eye className="text-gray-500 cursor-pointer hover:text-blue-500" size={20} />
              <Edit className="text-gray-500 cursor-pointer hover:text-yellow-500" size={20} />
              <Trash2 className="text-gray-500 cursor-pointer hover:text-red-500" size={20} />
            </div>
          </div>

        </div>
        ))
      ) : (
        <div>No hay sprints disponibles</div>
      )}
    </div>
  );
};

export default ListSprints;