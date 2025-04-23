import { useShallow } from "zustand/shallow"
import { tareaStore } from "../store/tareaStore"
import { editarTarea, eliminarTareaPorId, getAllTareas, postNuevaTarea } from "../http/tareas";
import { ITarea } from "../types/ITarea";
import Swal from "sweetalert2";


export const useTareas = () => {


    const { 
        tareas, 
        setArrayTareas, 
        agregarNuevaTarea, 
        eliminarUnaTarea, 
        editarUnaTarea,
     } = tareaStore(
        useShallow((state) => ({
        tareas: state.tareas,
        setArrayTareas: state.setArrayTareas,
        agregarNuevaTarea: state.agregarNuevaTarea,
        eliminarUnaTarea: state.eliminarUnaTarea,
        editarUnaTarea: state.editarUnaTarea,
    }))
);

    const getTareas = async () => {
        const data = await getAllTareas();
        if (data) setArrayTareas(data);
    };

    const crearTarea = async (nuevaTarea: ITarea) => {
        agregarNuevaTarea(nuevaTarea);
        try {
            await postNuevaTarea(nuevaTarea);
            Swal.fire("Éxito", "Tarea creada correctamente", "success");
        } catch (error) {
            eliminarUnaTarea(nuevaTarea.id!);
            console.log("Algo salió mal al crear la tarea");
        }
    };

    const putTareaEditar = async (tareaEditada: ITarea) => {

        const estadoPrevio = tareas.find((el) => el.id === tareaEditada.id);

        editarUnaTarea(tareaEditada);

        console.log("Tareas antes de la actualización:", tareas);

        try {
            await editarTarea(tareaEditada);
            Swal.fire("Éxito", "Tarea actualizada correctamente", "success");
        } catch (error) {
            if (estadoPrevio) editarUnaTarea(estadoPrevio);
            console.log("Algo salió mal al editar");
        }
    };

    const eliminarTarea = async (idTarea: string) => {

        const estadoPrevio = tareas.find((el) => el.id === idTarea);

        const confirm = await Swal.fire({
            title: "¿Estás seguro?",
            text: "Esta acción no se puede deshacer",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Si, eliminar",
            cancelButtonText: "Cancelar",
        });

        if (!confirm.isConfirmed) return;

        eliminarUnaTarea(idTarea);

        try {
            await eliminarTareaPorId(idTarea);
            Swal.fire("Eliminando", "Tarea eliminada correctamente", "success");
        } catch (error) {
            if (estadoPrevio) agregarNuevaTarea(estadoPrevio);
            console.log("Algo salió mal al eliminar")
        }

    };
    
    const verTarea = (idTarea:string) => {
        const tarea = tareas.find((tarea) => tarea.id === idTarea);

        if (!tarea) {
            Swal.fire("Error", "No se encontró la tarea", "error");
            return;
        }


        const fechaLimite = new Date(tarea.fechaLimite);
        const hoy = new Date();


        fechaLimite.setHours(0, 0, 0, 0);
        hoy.setHours(0, 0, 0, 0);

        const diferenciaTiempo = fechaLimite.getTime() - hoy.getTime();
        const diasRestantes = Math.ceil(diferenciaTiempo / (1000 * 3600 * 24));


        let mensajeDias = "";

        if (diasRestantes < 0) {
            mensajeDias = `<span class="text-red-500 font-semibold">La tarea está vencida por ${Math.abs(diasRestantes)} día(s)</span>`;
        } else if (diasRestantes === 0) {
            mensajeDias = `<span class="text-orange-500 font-semibold">La tarea vence hoy</span>`;
        } else {
            mensajeDias = `<span class="text-[#504136] font-semibold">Faltan ${diasRestantes} día(s)</span>`;
        }
        Swal.fire({
            title: "Detalles de la tarea",
            html: `
              <div class="flex flex-col space-y-3 text-left">
                <div>
                  <label class="block font-semibold text-[#226f54]">Título</label>
                  <p class="rounded-md px-3 py-2 bg-gray-50">${tarea.titulo}</p>
                </div>
                <div>
                  <label class="block font-semibold text-[#226f54]">Descripción</label>
                  <p class="rounded-md px-3 py-2 bg-gray-50">${tarea.descripcion}</p>
                </div>
                <div>
                  <label class="block font-semibold text-gray-700">Fecha límite</label>
                  <p class=" rounded-md px-3 py-2 bg-gray-50">${tarea.fechaLimite}</p>
                  <p class="rounded-md px-3 py-2 bg-gray-50">${mensajeDias}</p>
                </div>
                
              </div>
            `,
            showCancelButton: false,
            confirmButtonText: "Cerrar",
            // Color y estilo principal del botón
            confirmButtonColor: "#226f54", // Ajusta al color verde que uses en tu proyecto

        })
    };

    return {
        getTareas,
        crearTarea,
        putTareaEditar,
        eliminarTarea,
        verTarea,
        tareas,
    };
};
