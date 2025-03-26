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
      <div className="flex justify-center items-center mb-6">
        <h1 className="text-4xl font-bold font-mono">BACKLOG</h1>
       
      </div>

      <div className=" bg-[#87c38f]/70 rounded-2xl p-4 mi-h-screen h-full">
        <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Tareas en el backlog</h2>
            <button className="bg-[#504136] text-white px-4 py-2 rounded-full">Crear tarea<span className="ml-2">+</span></button>
        </div>
        
        {tasks.map((task) => (
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
        ))}
        
      </div>
      
    </div>
  );
};

export default BacklogList;