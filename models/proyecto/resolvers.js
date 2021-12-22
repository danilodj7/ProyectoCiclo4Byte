import { ProjectModel } from "./proyecto.js";
import { UserModel } from "../usuario/usuario.js";
import { InscriptionModel } from "../inscripcion/inscripcion.js";

const resolversProyecto = {
  Proyecto: {
    lider: async (parent, args, context) => {
      console.log("parent", parent);
      const usr = await UserModel.findOne({
        _id: parent.lider.toString(),
      });
      return usr;
    },
    inscripciones: async (parent, args, context) => {
      const inscripciones = await InscriptionModel.find({
        proyecto: parent._id,
      });
      return inscripciones;
    },
  },

  Query: {
    // Proyectos: async (parent, args) => {
    //   const proyectos = await ProjectModel.find()
    //     .populate("lider")
    //     .populate({ path: "avances", populate: { path: "creadoPor" } })
    //     .populate({ path: "inscripciones", populate: { path: "estudiante" } })
    //     .populate("inscripciones");
    //   return proyectos;
    // },
    Proyectos: async (parent, args, context) => {
      if (context.userData) {
        if (context.userData.rol === "LIDER") {
          const proyectos = await ProjectModel.find({
            lider: context.userData._id,
          });
          return proyectos;
        }
      }
      const proyectos = await ProjectModel.find();
      return proyectos;
    },
    ProyectosActivos: async (parent, args, context) => {
      if (context.userData) {
        if (context.userData.rol === "LIDER") {
          const proyectActivos = await ProjectModel.find({
            lider: context.userData._id,
            estado: "ACTIVO",
          });
          return proyectActivos;
        }
      }
    },
  },
  Mutation: {
    crearProyecto: async (parent, args, context) => {
      if (context.userData) {
        if (context.userData.rol === "LIDER") {
          const proyectoCreado = await ProjectModel.create({
            nombre: args.nombre,
            fechaInicio: args.fechaInicio,
            fechaFin: args.fechaFin,
            presupuesto: args.presupuesto,
            lider: context.userData._id,
            objetivos: args.objetivos,
          });
        } else {
          const proyectoCreado = await ProjectModel.create({
            nombre: args.nombre,
            fechaInicio: args.fechaInicio,
            fechaFin: args.fechaFin,
            presupuesto: args.presupuesto,
            lider: args.lider,
            objetivos: args.objetivos,
          });
          console.log("proyecto creado", proyectoCreado);
          return proyectoCreado;
        }
      }
    },

    editarProyecto: async (parent, args) => {
      const proyectoEditado = await ProjectModel.findByIdAndUpdate(
        args._id,
        { ...args.campos },
        { new: true }
      );
      return proyectoEditado;
    },
    crearObjetivo: async (parent, args) => {
      const proyectoConObjetivo = await ProjectModel.findByIdAndUpdate(
        args.idProyecto,
        {
          $addToSet: {
            objetivos: { ...args.campos },
          },
        },
        { new: true }
      );
      return proyectoConObjetivo;
    },
    editarObjetivo: async (parent, args) => {
      const proyectoEditado = await ProjectModel.findByIdAndUpdate(
        args.idProyecto,
        {
          $set: {
            [`objetivos.${args.indexObjetivo}.descripcion`]:
              args.campos.descripcion,
            [`objetivos.${args.indexObjetivo}.tipo`]: args.campos.tipo,
          },
        },
        { new: true }
      );
      return proyectoEditado;
    },
    eliminarObjetivo: async (parent, args) => {
      const proyectoObjetivo = await ProjectModel.findByIdAndUpdate(
        { _id: args.idProyecto },
        {
          $pull: {
            objetivos: {
              _id: args.idObjetivo,
            },
          },
        },
        { new: true }
      );
      return proyectoObjetivo;
    },
  },
};

export { resolversProyecto };
