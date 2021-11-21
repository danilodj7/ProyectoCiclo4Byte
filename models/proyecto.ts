import { Schema, model } from "mongoose";
import {
  Enum_Rol,
  Enum_EstadoUsuario,
  Enum_EstadosProyecto,
  Enum_FaseProyecto,
  Enum_TipoOjectivo,
} from "./enums";
import { ObjectiveModel } from "./objetivo";
import { UserModel } from "./usuario";

interface Proyecto {
  nombre: string;
  presupuesto: number;
  fechaInicio: Date;
  fechaFin: Date;
  estado: Enum_EstadosProyecto;
  fase: Enum_FaseProyecto;
  lider: Schema.Types.ObjectId;
  objectivos: [{ descripcion: String; tipo: Enum_TipoOjectivo }];
}

const projectSchema = new Schema<Proyecto>({
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
    required: true,
    ref: UserModel,
  },
  objectivos: [
    {
      descripcion: {
        type: String,
        required: true,
      },
      tipo: {
        type: String,
        enum: Enum_TipoOjectivo,
        required:true,
      }
    },
  ],
});

const ProjectModel = model("Proyecto", projectSchema);

export { ProjectModel };
