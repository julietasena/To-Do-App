import React, { useEffect } from 'react';
import { getAllTareas } from '../../http/tareas';
import { HeaderBacklog } from '../ui/Header/HeaderBacklog';
import { ListTareasBacklog } from '../ui/ListTareas/ListTareasBacklog';

const BacklogList: React.FC = () => {


  /*const getTareas = async () => {
    const result = await getAllTareas();
    console.log(result)
    return result;
  }

  useEffect(() => { // llama a la API apenas se entra a esta ventana

    getTareas();

  }, []);*/

  /*
   const tasks = [
     { 
       id: '1', 
       title: 'Tarea 1', 
       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit',
       dueDate: 'dd/mm/aa'
     },
     { 
       id: '2', 
       title: 'Tarea 2', 
       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit',
       dueDate: 'dd/mm/aa'
     }
   ];
  */



  return (

    <div>
      <HeaderBacklog />
      <ListTareasBacklog />


      {/*{tasks.map((task) => (
          <div
            key={task.id}
            className="bg-white/75 rounded-lg shadow-md mb-3 p-4 flex  items-center">
            <div className="flex-grow">
              <h3 className="font-semibold">{task.title}</h3>
            </div>

            <div className="flex-grow ">
              <p className="text-sm text-gray-500">{task.description}</p>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-sm">{task.dueDate}</span>
              <button className="bg-[#504136]/75 text-white px-3 py-1 rounded-full text-sm flex items-center">
                Enviar a <ChevronDown size={16} className="ml-1" />
              </button>
              <div className="flex space-x-2">
                <Eye className="text-gray-500 cursor-pointer hover:text-blue-500" size={20} />
                <Edit className="text-gray-500 cursor-pointer hover:text-yellow-500" size={20} />
                <Trash2 className="text-gray-500 cursor-pointer hover:text-red-500" size={20} />
              </div>
            </div>
          </div>
        ))} */}

    </div>

  );
};

export default BacklogList;