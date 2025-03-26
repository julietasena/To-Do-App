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
      <h2 className="text-xl font-bold mb-4">Lista Sprints</h2>
      {sprints.map((sprint) => (
        <div 
          key={sprint.id} 
          className="bg-green rounded-lg shadow-md mb-3 p-3 flex justify-between items-center"
        >
          <div>
            <h3 className="font-semibold">{sprint.name}</h3>
            <p className="text-sm text-blue-500">
              Inicio: {sprint.startDate} | Cierre: {sprint.endDate}
            </p>
          </div>
          <div className="flex space-x-2">
            <Eye className="text-gray-500 cursor-pointer hover:text-blue-500" size={20} />
            <Edit className="text-gray-500 cursor-pointer hover:text-green-500" size={20} />
            <Trash2 className="text-gray-500 cursor-pointer hover:text-red-500" size={20} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SprintList;