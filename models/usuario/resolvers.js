import { UserModel } from "./usuario.js";

const resolversUsuario = {
  Query: {
    Usuarios: async (parent, args, context) => {
      console.log("context ", context);
      if (context.userData.rol === "LIDER") {
        const usuarios = await UserModel.find({ rol: "ESTUDIANTE" }).populate([
          {
            path: "inscripciones",
            populate: {
              path: "proyecto",
              populate: [{ path: "lider" }, { path: "avances" }],
            },
          },
          {
            path: "proyectosLiderados",
          },
        ]);
        return usuarios;
      } else if (context.userData.rol === "ADMINISTRADOR") {
        const usuarios = await UserModel.find().populate([
          {
            path: "inscripciones",
            populate: {
              path: "proyecto",
              populate: [{ path: "lider" }, { path: "avances" }],
            },
          },
          {
            path: "proyectosLiderados",
          },
        ]);
        return usuarios;
      } else return null;

      // const usuarios = await UserModel.find().populate([
      //   {
      //     path: "inscripciones",
      //     populate: {
      //       path: "proyecto",
      //       populate: [{ path: "lider" }, { path: "avances" }],
      //     },
      //   },
      //   {
      //     path: "proyectosLiderados",
      //   },
      // ]);
      // return usuarios;
    },

    Usuario: async (parent, args) => {
      const usuario = await UserModel.findOne({ _id: args._id });
      return usuario;
    },
  },
  Mutation: {
    crearUsuario: async (parent, args) => {
      const usuarioCreado = await UserModel.create({
        nombre: args.nombre,
        apellido: args.apellido,
        correo: args.correo,
        identificacion: args.identificacion,
        rol: args.rol,
      });
      if (Object.keys(args).includes("estado")) {
        usuarioCreado.estado = args.estado;
      }

      console.log("Se ejecuto la mutacion Crear Usuario");
      return usuarioCreado;
    },

    editarUsuario: async (parent, args) => {
      const usuarioEditado = await UserModel.findByIdAndUpdate(
        args._id,
        {
          nombre: args.nombre,
          apellido: args.apellido,
          correo: args.correo,
          identificacion: args.identificacion,
          estado: args.estado,
        },
        { new: true }
      );
      return usuarioEditado;
    },

    eliminarUsuario: async (parent, args) => {
      if (Object.keys(args).includes("_id")) {
        const usuarioEliminado = await UserModel.findOneAndDelete({
          _id: args._id,
        });
        return usuarioEliminado;
      } else if (Object.keys(args).includes("correo")) {
        const usuarioEliminado = await UserModel.findOneAndDelete({
          correo: args.correo,
        });
        return usuarioEliminado;
      }
      console.log("Se ejecuto la mutacion eliminar usuario");
    },
  },
};

export { resolversUsuario };