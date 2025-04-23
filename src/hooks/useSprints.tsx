import { useShallow } from "zustand/shallow";
import { sprintStore } from "../store/sprintStore";
import { editarSprint, eliminarSprintPorId, getAllSprints, postNuevoSprint } from "../http/sprints";
import { ISprint } from "../types/ISprint";
import Swal from "sweetalert2";

export const useSprints = () => {
  const {
    sprints,
    setArraySprints,
    agregarNuevoSprint,
    eliminarUnSprint,
    editarUnSprint,
  } = sprintStore(
    useShallow((state) => ({
      sprints: state.sprints,
      setArraySprints: state.setArraySprints,
      agregarNuevoSprint: state.agregarNuevoSprint,
      eliminarUnSprint: state.eliminarUnSprint,
      editarUnSprint: state.editarUnSprint,
    }))
  );

  const getSprints = async () => {
    const data = await getAllSprints();
    if (data) setArraySprints(data);
  };

  const crearSprint = async (nuevoSprint: ISprint) => {
    agregarNuevoSprint(nuevoSprint);
    try {
      await postNuevoSprint(nuevoSprint);
      Swal.fire("Éxito", "Sprint creado correctamente", "success");
    } catch (error) {
      eliminarUnSprint(nuevoSprint.id!);
      console.log("Algo salió mal al crear el sprint");
    }
  };

  const putSprintEditar = async (sprintEditado: ISprint) => {
    const estadoPrevio = sprints.find((el) => el.id === sprintEditado.id);
    editarUnSprint(sprintEditado);

    console.log("Sprints antes de la actualización:", sprints);

    try {
      await editarSprint(sprintEditado);
      Swal.fire("Éxito", "Sprint actualizado correctamente", "success");
    } catch (error) {
      if (estadoPrevio) editarUnSprint(estadoPrevio);
      console.log("Algo salió mal al editar el sprint");
    }
  };

  const eliminarSprint = async (idSprint: string) => {
    const estadoPrevio = sprints.find((el) => el.id === idSprint);

    const confirm = await Swal.fire({
      title: "¿Estás seguro?",
      text: "Esta acción no se puede deshacer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    });

    if (!confirm.isConfirmed) return;

    eliminarUnSprint(idSprint);

    try {
      await eliminarSprintPorId(idSprint);
      Swal.fire("Eliminando", "Sprint eliminado correctamente", "success");
    } catch (error) {
      if (estadoPrevio) agregarNuevoSprint(estadoPrevio);
      console.log("Algo salió mal al eliminar el sprint");
    }
  };

  return { getSprints, crearSprint, putSprintEditar, eliminarSprint };
};
