import { resolversUsuario } from "../models/usuario/resolvers";
import { resolversProyecto } from "../models/proyecto/resolvers";
import { resolversAvance } from "../models/avance/resolvers";


export const resolvers = [resolversUsuario, resolversProyecto, resolversAvance];
