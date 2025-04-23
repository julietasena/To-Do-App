import { FC } from "react";
import { ITarea } from "../../../types/ITarea";
import { ChevronDown, Edit, Eye, Trash2 } from "lucide-react";
import { useTareas } from "../../../hooks/useTareas";


type ICardList = {
    tarea: ITarea;
    handleOpenModalEdit: (tarea: ITarea) => void;
}


export const CardListBacklog: FC<ICardList> = ({ 
    tarea, 
    handleOpenModalEdit,
 }) => {

    const {eliminarTarea, verTarea} = useTareas();


    const eliminarTareaById = () => {
        eliminarTarea(tarea.id!);
    };

    const editarTarea = () => {
        handleOpenModalEdit(tarea);
    };

    const verDetalleTarea = () => {  
        verTarea(tarea.id!);  
    };
  
  <div className="bg-white/75 rounded-lg shadow-md mb-3 p-4 flex flex-wrap md:flex-nowrap">
          {/* Columna 1: Título - ancho fijo */}
          <div className="w-full md:w-1/4 pr-4">
            <h3 className="font-semibold truncate" title={tarea.titulo}>
              {tarea.titulo}
            </h3>
          </div>
  
  <div className="w-full md:w-2/5 pr-4">
            <p className="text-sm text-gray-500 line-clamp-2" title={tarea.descripcion}>
              {tarea.descripcion}
            </p>
          </div>
  
          <div className="w-full md:w-1/3 flex justify-end items-center space-x-3 mt-2 md:mt-0">
            <span className="text-sm whitespace-nowrap">{tarea.fechaLimite}</span>
            <button className="bg-[#504136]/75 text-white px-3 py-1 rounded-full text-sm flex items-center whitespace-nowrap">
              Enviar a <ChevronDown size={16} className="ml-1" />
            </button>
            <div className="flex space-x-2">
              <Eye 
                className="text-gray-500 cursor-pointer hover:text-blue-500" 
                size={20} 
                onClick={verDetalleTarea}
              />
              <Edit
                className="text-gray-500 cursor-pointer hover:text-yellow-500" 
                size={20}
                onClick={editarTarea}
              />
              <Trash2
                className="text-gray-500 cursor-pointer hover:text-red-500" 
                size={20}
                onClick={eliminarTareaById}
              />
            </div>
          </div>
        </div>
  
    return (

        <div
            className="bg-white/75 rounded-lg shadow-md mb-3 p-4 flex  flex-wrap md:flex-nowrap">
            <div className="w-full md:w-1/4 pr-4">
                <h3 className="font-semibold truncate">{tarea.titulo}</h3>
            </div>

            <div className="flex-grow ">
                <p className="text-sm text-gray-500">{tarea.descripcion}</p>
            </div>
            <div className="flex items-center space-x-3">
                <span className="text-sm"> {tarea.fechaLimite}</span>
                <button className="bg-[#504136]/75 text-white px-3 py-1 rounded-full text-sm flex items-center">
                    Enviar a <ChevronDown size={16} className="ml-1" />
                </button>
                <div className="flex space-x-2">

                    <Eye className="text-gray-500 cursor-pointer hover:text-blue-500" size={20} onClick={verDetalleTarea}/>

                    <Edit
                        className="text-gray-500 cursor-pointer hover:text-yellow-500" size={20}
                        onClick={editarTarea}
                    />

                    <Trash2
                        className="text-gray-500 cursor-pointer hover:text-red-500" size={20}
                        onClick={eliminarTareaById}
                    />
                </div>
            </div>
            
        </div>




    )
}
