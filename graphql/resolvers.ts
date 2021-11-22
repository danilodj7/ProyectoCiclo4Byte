import { ModuleResolutionKind } from "typescript";
import { UserModel } from "../models/usuario";

const resolvers = {
  Query: {
    Usuarios: async (parent, args) => {
      const usuarios = await UserModel.find();
      return usuarios;
    },
  },
};

export { resolvers };