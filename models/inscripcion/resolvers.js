import { InscriptionModel } from "./inscripcion.js";

const resolversIncripciones = {
  Query: {
    Inscripciones: async (parent, args) => {
      const inscripciones = await InscriptionModel.find();
      return inscripciones;
    },
  },

  Mutation: {
    CrearInscripcion: async (parent, args) => {
      const InscripcionCreada = await InscriptionModel.create({
        estado: args.estado,
        proyecto: args.proyecto,
        estudiante: args.estudiante,
      });
      return InscripcionCreada;
    },

    aprobarInscripcion: async (parent, args) => {
      const inscripcionAprobada = await InscriptionModel.findByIdAndUpdate(
        args.id,
        {
          estado: args.estado,
          fechaIngreso: Date.now(),
        }
      );
      return inscripcionAprobada;
    },
  },
};

export { resolversIncripciones };
