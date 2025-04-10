
import { HeaderSprint } from '../ui/Header/HeaderSprint';




const Sprint = () => {




  return (
    <div className="flex flex-col p-6">
      
 <HeaderSprint/> {/*espera parametros */}
      <div className="flex space-x-4">
        {/* POR HACER Column */}
        <div className="flex-1 bg-[#aad9b0] rounded-2xl p-4">
          <h2 className="text-xl font-bold mb-4 text-center">POR HACER</h2>
          
        </div>

        {/* EN PROCESO Column */}
        <div className="flex-1 bg-[#aad9b0] rounded-2xl p-4">
          <h2 className="text-xl font-bold mb-4 text-center">EN PROCESO</h2>
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