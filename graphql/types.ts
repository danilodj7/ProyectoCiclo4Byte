import { gql } from "apollo-server-core";


const typeDefs = gql`
  enum Enum_EstadoUsuario {
    PENDIENTE
    AUTORIZADO
    NO_AUTORIZADO
  }

  enum Enum_Rol {
    ESTUDIANTE
    LIDER
    ADMINISTRADOR
  }

  type Usuario {
    _id: ID!
    nombre: String!
    apellido: String!
    identificacion: String!
    estado: Enum_EstadoUsuario!
    rol: Enum_Rol!
  }

  type Query {
    Usuarios: [Usuario]
  }
`;

export { typeDefs };
