import mongoose from "mongoose";
// import { Enum_EstadoInscripcion } from "../enums/enums.js";
import { ProjectModel } from "../proyecto/proyecto.js";
import { UserModel } from "../usuario/usuario.js";
const { Schema, model } = mongoose;

// interface Inscripcion {
//   fechaIngreso: Date;
//   fechaEgreso: Date;
//   estado: Enum_EstadoInscripcion;
//   proyecto: Schema.Types.ObjectId;
//   estudiante: Schema.Types.ObjectId;
// }

const InscripcionSchema = new Schema(
  {
    estado: {
      type: String,
      enum: ["ACEPTADO", "RECHAZADO", "PENDIENTE"],
      default: "PENDIENTE",
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
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// InscripcionSchema.virtual("estudiantes", {
//   ref: "Usuario",
//   localField: "_id",
//   foreignField: "estudiante",
// });

// InscripcionSchema.virtual("avances", {
//   ref: "Avance",
//   localField: "_id",
//   foreignField: "creadoPor",
// });


const InscriptionModel = model("Inscripcione", InscripcionSchema);

export { InscriptionModel };
