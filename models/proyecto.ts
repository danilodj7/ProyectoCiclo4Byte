import { Schema, model } from "mongoose";
import {
  Enum_Rol,
  Enum_EstadoUsuario,
  Enum_EstadosProyecto,
  Enum_FaseProyecto,
} from "./enums";
import { ObjectiveModel } from "./objetivo";
import { UserModel } from "./usuario";

interface Proyect {
  nombre: string;
  presupuesto: number;
  fechaInicio: Date;
  fechaFin: Date;
  estado: Enum_EstadosProyecto;
  fase: Enum_FaseProyecto;
  lider: Schema.Types.ObjectId;
  objectivos: Schema.Types.ObjectId;
}

const projectSchema = new Schema<Proyect>({
  nombre: {
    type: String,
    required: true,
    unique: true,
  },
  presupuesto: {
    type: Number,
    required: true,
  },
  fechaInicio: {
    type: Date,
    required: true,
  },
  fechaFin: {
    type: Date,
    required: true,
  },
  estado: {
    type: String,
    enum: Enum_EstadosProyecto,
    default: Enum_EstadosProyecto.INACTIVO,
  },
  fase: {
    type: String,
    enum: Enum_FaseProyecto,
    default: Enum_FaseProyecto.NULA,
  },
  lider: {
    type: Schema.Types.ObjectId,
    require: true,
    ref: UserModel,
  },
  objectivos: [
    {
      type: Schema.Types.ObjectId,
      ref: ObjectiveModel,
    },
  ],
});

const ProjectModel = model("Project", projectSchema);

export { ProjectModel };
