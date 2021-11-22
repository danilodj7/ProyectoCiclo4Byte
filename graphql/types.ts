import { gql } from "apollo-server-core";

const typeDefs = gql`
  scalar Date

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

  enum Enum_EstadosProyecto {
    ACTIVO
    INACTIVO
  }

  enum Enum_FaseProyecto {
    INICIADO
    EN_DESARROLLO
    TERMINADO
    NULA
  }

  enum Enum_TipoOjectivo {
    GENERAL
    ESPECIFICO
  }

  enum Enum_EstadoInscripcion {
    ACEPTADA
    RECHAZADA
  }

  type Usuario {
    _id: ID!
    nombre: String!
    apellido: String!
    identificacion: String!
    correo: String!
    estado: Enum_EstadoUsuario!
    rol: Enum_Rol!
  }

  type Objetivo {
    _id: ID!
    descripcion: String!
    tipo: Enum_TipoOjectivo!
  }

  # Este input se crea para poder pasarlo en la mutacion de crear proyecto
  input crearObjetivo {
    descripcion: String!
    tipo: Enum_TipoOjectivo!
  }

  type Proyecto {
    _id: ID!
    nombre: String!
    presupuesto: Float
    fechaInicio: Date!
    fechaFin: Date!
    estado: Enum_EstadosProyecto!
    fase: Enum_FaseProyecto!
    lider: Usuario
    objectivos: [Objetivo]!
  }

  type Query {
    Usuarios: [Usuario]
    Usuario(_id: String): Usuario
    Proyectos: [Proyecto]
  }

  type Mutation {
    crearUsuario(
      nombre: String!
      apellido: String!
      identificacion: String!
      correo: String!
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
      rol: Enum_Rol!
    ): Usuario

    eliminarUsuario(_id: String, correo: String): Usuario

    crearProyecto(
      nombre: String!
      presupuesto: Float
      fechaInicio: Date!
      fechaFin: Date!
      estado: Enum_EstadosProyecto!
      fase: Enum_FaseProyecto!
      lider: String!
      objectivos: [crearObjetivo]!
    ): Proyecto
  }
`;

export { typeDefs };
