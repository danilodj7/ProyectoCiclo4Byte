import { Schema, model } from "mongoose";
import { Enum_EstadoInscripcion } from "../enums/enums";
import { ProjectModel } from "../proyecto/proyecto";
import { UserModel } from "../usuario/usuario";

interface Inscripcion {
  fechaIngreso: Date;
  fechaEgreso: Date;
  estado: Enum_EstadoInscripcion;
  proyecto: Schema.Types.ObjectId;
  estudiante: Schema.Types.ObjectId;
}

const InscripcionSchema = new Schema<Inscripcion>({
  estado: {
    type: String,
    enum: Enum_EstadoInscripcion,
    required: true,
  },
  fechaIngreso: {
    type: Date,
    required: false,
  },
  fechaEgreso: {
    type: Date,
    required: false,
  },
  proyecto: {
    type: Schema.Types.ObjectId,
    ref: ProjectModel,
    required: true,
  },
  estudiante: {
    type: Schema.Types.ObjectId,
    ref: UserModel,
    required: true,
  },
});

const InscriptionModel = model("Inscripcione", InscripcionSchema);

export { InscriptionModel };