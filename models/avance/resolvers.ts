import { ModeloAvance } from "./avance";

const resolversAvance = {
  Query: {
    Avances: async (parent, args) => {
      const avances = await ModeloAvance.find()
        .populate("proyecto")
        .populate("creadoPor");
      return avances;
    },
  },
  Mutation: {
    crearAvance: async (parent, args) => {
      const AvanceCreado = await ModeloAvance.create({
        fecha: new Date(args.fecha),
        descripcion: args.descripcion,
        proyecto: args.proyecto,
        creadoPor: args.creadoPor,
      });

      return AvanceCreado;
    },
  },
};

export { resolversAvance };
