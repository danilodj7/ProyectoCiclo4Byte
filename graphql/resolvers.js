import { resolversUsuario } from "../models/usuario/resolvers.js";
import { resolversProyecto } from "../models/proyecto/resolvers.js";
import { resolversAvance } from "../models/avance/resolvers.js";
import { resolversIncripciones } from "../models/inscripcion/resolvers.js";

export const resolvers = [
  resolversUsuario,
  resolversProyecto,
  resolversAvance,
  resolversIncripciones,
];
