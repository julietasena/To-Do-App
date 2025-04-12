import { Link } from "react-router";


interface SprintProps {
  id: string;
  title: string;
}

export const HeaderSprint: React.FC<SprintProps> = ({title }) => {

  

  return (
    <div>

      <div className="flex justify-between items-center mb-6">
        <div className="flex-1"></div>
        <h1 className="text-4xl font-bold text-center font-mono flex-2">{title}</h1>
        <div className="flex-1 text-right">
          {/* Botón para cambiar a la pantalla de Backlog */}
          <Link
            to={`/tareas`}
            className="bg-gray-500 text-white px-4 py-2 rounded-full"
          >
            BACKLOG
          </Link>
        </div>
      </div>

    </div>
  )
}
