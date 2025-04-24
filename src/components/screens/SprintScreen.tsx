

import { HeaderSprint } from '../ui/Header/HeaderSprint';
import { ListEstado } from '../ui/ListSprints/ListEstado';




const SprintScreen: React.FC = () => {


  return (
    <div className="flex flex-col p-6">

      <HeaderSprint /> {/*espera parametros */}
      <ListEstado />
    </div>
  );
};

export default SprintScreen;