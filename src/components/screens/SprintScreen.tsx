
import { CardListEstado } from '../ui/CardList/CardListEstado';
import { HeaderSprint } from '../ui/Header/HeaderSprint';




const SprintScreen: React.FC = () => {


  return (
    <div className="flex flex-col p-6">

      <HeaderSprint /> {/*espera parametros */}
      <CardListEstado />
    </div>
  );
};

export default SprintScreen;