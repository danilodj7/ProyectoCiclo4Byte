import mongoose from "mongoose";
// import { Enum_Rol, Enum_EstadoUsuario } from "../enums/enums.js";

// interface User {
//   correo: string;
//   identificacion: string;
//   nombre: string;
//   apellido: string;
//   rol: Enum_Rol;
//   estado: Enum_EstadoUsuario;
// }

const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    correo: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: (email) => {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
        },
      },
    },
    identificacion: {
      type: String,
      required: true,
    },
    nombre: {
      type: String,
      required: true,
    },
    apellido: {
      type: String,
      required: true,
    },
    rol: {
      type: String,
      required: true,
      enum: ["ESTUDIANTE", "LIDER", "ADMINISTRADOR"],
    },
    estado: {
      type: String,
      enum: ["PENDIENTE", "AUTORIZADO", "NO_AUTORIZADO"],
      default: "PENDIENTE",
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

userSchema.virtual("avances", {
  ref: "Avance",
  localField: "_id",
  foreignField: "creadoPor",
});

userSchema.virtual("inscripciones", {
  ref: "Inscripcione",
  localField: "_id",
  foreignField: "estudiante",
});






const UserModel = model("Usuario", userSchema);

export { UserModel };
