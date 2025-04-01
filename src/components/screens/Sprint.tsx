import { useState } from 'react';
import { Eye, Edit, Trash2, ArrowRight } from 'lucide-react';
import { HeaderSprint } from '../ui/Header/HeaderSprint';

interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  status: 'POR HACER' | 'EN PROCESO' | 'COMPLETADO';
}



const Sprint = () => {
 /* 
 
 const [tasks, setTasks] = useState<Task[]>([
    { 
      id: '1', 
      title: 'TITULO1', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit',
      dueDate: 'dd/mm/aa',
      status: 'POR HACER'
    },
    { 
      id: '2', 
      title: 'TITULO2', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit',
      dueDate: 'dd/mm/aa',
      status: 'POR HACER'
    },
    { 
      id: '3', 
      title: 'TITULO3', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit',
      dueDate: 'dd/mm/aa',
      status: 'EN PROCESO'
    }
  ]); 
  
  */

  

  return (
    <div className="flex flex-col p-6">
      
 <HeaderSprint/> {/*espera parametros */}
      <div className="flex space-x-4">
        {/* POR HACER Column */}
        <div className="flex-1 bg-[#aad9b0] rounded-2xl p-4">
          <h2 className="text-xl font-bold mb-4 text-center">POR HACER</h2>
          
        {/*
          {tasks.filter(task => task.status === 'POR HACER').map((task) => (
            <div 
              key={task.id} 
              className="bg-white/75 rounded-lg shadow-md mb-3 p-4"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-red-500">{task.title}</h3>
                <div className="flex space-x-2 items-center">
                  <Edit className="text-gray-500 cursor-pointer hover:text-yellow-500" size={16} />
                  <ArrowRight className="text-gray-800 cursor-pointer hover:scale-155" size={16} />
                </div>
              </div>
              <div className="flex items-center mb-2">
                <p className="text-sm text-gray-800">{task.description}</p>
              </div>
              <div className="flex justify-between items-center">
                <Eye className="text-gray-500 cursor-pointer hover:text-blue-500" size={16} />
                <button className="bg-gray-400 text-white text-xs px-3 py-1 rounded-full">
                  Enviar al BACKLOG
                </button>
                <span className="text-red-500 text-sm">{task.dueDate}</span>
                <Trash2 className="text-gray-500 cursor-pointer hover:text-red-500" size={16} />
              </div>
            </div>
          ))}
        */}
        </div>

        {/* EN PROCESO Column */}
        <div className="flex-1 bg-[#aad9b0] rounded-2xl p-4">
          <h2 className="text-xl font-bold mb-4 text-center">EN PROCESO</h2>
   
   {/*
          
          {tasks.filter(task => task.status === 'EN PROCESO').map((task) => (
            <div 
              key={task.id} 
              className="bg-white/75 rounded-lg shadow-md mb-3 p-4"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-red-500">{task.title}</h3>
                <div className="flex space-x-2 items-center">
                  <Edit className="text-gray-500 cursor-pointer hover:text-yellow-500" size={16} />
                  <ArrowRight className="text-gray-800 cursor-pointer hover:scale-155" size={16} />
                </div>
              </div>
              <div className="flex items-center mb-2">
                <p className="text-sm text-gray-800">{task.description}</p>
              </div>
              <div className="flex justify-between items-center">
                <Eye className="text-gray-500 cursor-pointer hover:text-blue-500" size={16} />
                <button className="bg-gray-400 text-white text-xs px-3 py-1 rounded-full">
                  Enviar al BACKLOG
                </button>
                <span className="text-red-500 text-sm">{task.dueDate}</span>
                <Trash2 className="text-gray-500 cursor-pointer hover:text-red-500" size={16} />
              </div>
            </div>
          ))}
   */}
        </div>

        {/* COMPLETADO Column */}
        <div className="flex-1 bg-[#aad9b0] rounded-2xl p-4">
          <h2 className="text-xl font-bold mb-4 text-center">COMPLETADO</h2>
          {/* No tasks in this column by default */}
        </div>
      </div>
    </div>
  );
};

export default Sprint;