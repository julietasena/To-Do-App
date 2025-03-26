import React from 'react';
import { Eye, Edit, Trash2, ChevronDown } from 'lucide-react';

const BacklogList: React.FC = () => {
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

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">BACKLOG</h1>
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center">
          Crear tarea <span className="ml-2">+</span>
        </button>
      </div>

      <div className="bg-custom-green rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-4">Tareas en el backlog</h2>
        {tasks.map((task) => (
          <div 
            key={task.id} 
            className="bg-white rounded-lg shadow-md mb-3 p-4 flex justify-between items-center"
          >
            <div className="flex-grow">
              <h3 className="font-semibold">{task.title}</h3>
              <p className="text-sm text-gray-500">{task.description}</p>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-sm text-gray-500">{task.dueDate}</span>
              <button className="bg-yellow-500 text-white px-3 py-1 rounded-md text-sm flex items-center">
                Enviar a <ChevronDown size={16} className="ml-1" />
              </button>
              <div className="flex space-x-2">
                <Eye className="text-gray-500 cursor-pointer hover:text-blue-500" size={20} />
                <Edit className="text-gray-500 cursor-pointer hover:text-green-500" size={20} />
                <Trash2 className="text-gray-500 cursor-pointer hover:text-red-500" size={20} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BacklogList;