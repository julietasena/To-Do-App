
import { HeaderSprint } from '../ui/Header/HeaderSprint';
import { sprintStore } from '../../store/sprintStore';
import { ListEstado } from '../ui/ListSprints/ListEstado';




const SprintScreen: React.FC = () => {
  const selectedSprint = sprintStore((state) => state.sprintActivo); // Obtener el sprint activo desde el store


  return (
    <div className="flex flex-col p-6">
      {/* Pasamos el título y la fecha límite al HeaderSprint */}
      <HeaderSprint
        title={selectedSprint?.nombre || 'Sprint'}
        subTitle={selectedSprint?.fechaFin || 'Fecha límite'} />

      <div className="flex space-x-4">
        <ListEstado/>
        </div>
      </div>
  );
};

export default SprintScreen;
