import { gql } from "apollo-server-core";

const tiposUsuario = gql`
  
  type Usuario {
    _id: ID!
    nombre: String!
    apellido: String!
    identificacion: String!
    correo: String!
    estado: Enum_EstadoUsuario!
    rol: Enum_Rol!
    avances:[Avance]
    inscripciones:[Inscripcion]
  }

  type Query {
    Usuarios: [Usuario]
    Usuario(_id: String): Usuario
  }

  type Mutation {
    crearUsuario(
      nombre: String!
      apellido: String!
      identificacion: String!
      correo: String!
      password: String!
      estado: Enum_EstadoUsuario
      rol: Enum_Rol!
    ): Usuario

    editarUsuario(
      _id: String!
      nombre: String!
      apellido: String!
      identificacion: String!
      correo: String!
      estado: Enum_EstadoUsuario
    ): Usuario

    eliminarUsuario(_id: String, correo: String): Usuario
  }
`;

export { tiposUsuario };
