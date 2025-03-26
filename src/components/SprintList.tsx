import React from 'react';
import { Eye, Edit, Trash2 } from 'lucide-react';

const SprintList: React.FC = () => {
  const sprints = [
    { id: '1', name: 'Sprint 1', startDate: 'DD/MM/YYYY', endDate: 'DD/MM/YYYY' },
    { id: '2', name: 'Sprint 2', startDate: 'DD/MM/YYYY', endDate: 'DD/MM/YYYY' },
    { id: '3', name: 'Sprint 3', startDate: 'DD/MM/YYYY', endDate: 'DD/MM/YYYY' },
    { id: '4', name: 'Sprint 4', startDate: 'DD/MM/YYYY', endDate: 'DD/MM/YYYY' }
  ];

  return (
    <div>
        <h2 className="text-xl font-bold mb-4 justify-self-center font-mono">LISTA DE SPRINTS</h2>
        {sprints.map((sprint) => (
        <div 
          key={sprint.id} 
          className="bg-white/70 rounded-2xl shadow-md mb-5 p-3 flex flex-col"
        >
            <h3 className="font-semibold text-center">{sprint.name}</h3>
            <div className="flex mt-2">
                <p className="text-sm text-[#504136]"> {sprint.startDate}</p>
                <p className="text-sm text-[#504136] ml-4"> {sprint.endDate}</p>
                <div className="flex items-center space-x-3 ml-4">
                    <Eye className="text-gray-500 cursor-pointer hover:text-blue-500" size={20} />
                    <Edit className="text-gray-500 cursor-pointer hover:text-yellow-500" size={20} />
                    <Trash2 className="text-gray-500 cursor-pointer hover:text-red-500" size={20} />
            </div>
            </div>
            
        </div>
        
      ))}
      
    </div>
  );
};

export default SprintList;