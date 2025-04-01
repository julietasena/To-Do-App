import { useStore } from "../../../store/botonStore";


export const HeaderBacklog = () => {

    const toggleScreen = useStore((state) => state.toggleScreen); // Obtener la función para cambiar de pantalla


  return (
    <div>
        <div className="flex justify-center items-center mb-6">
        <h1 className="text-4xl font-bold font-mono">BACKLOG</h1>
        <div className="flex-1 text-right">
          {/* Botón para cambiar a la pantalla de Backlog */}
          <button className="bg-gray-500 text-white px-4 py-2 rounded-full"
            onClick={toggleScreen} //cambia de pantalla
          >

            SPRINTS

          </button>
        </div>
      </div>


    </div>
  )
}
