import { ITarea } from "./ITarea"

export interface ISprint {
    id?: string
    nombre: string
    fechaInicio: string
    fechaFin: string
    porHacer?: ITarea[]
    enProceso?: ITarea[]
    completado?: ITarea[]
  }
  