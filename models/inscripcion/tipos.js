import { gql } from "apollo-server-core";

const tiposInscripcion = gql`
  type Inscripcion {
    _id: ID!
    estado: Enum_EstadoInscripcion
    fechaIngreso: Date
    fechaEgreso: Date
    proyecto: Proyecto!
    estudiante: Usuario!
  }

  type Query {
    Inscripciones: [Inscripcion]
    InscripcionesPendientesAprobar:[Inscripcion]
  }

  type Mutation {
    CrearInscripcion(
      estado: Enum_EstadoInscripcion
      fechaIngreso: Date
      proyecto: String!
      estudiante: String!
    ): Inscripcion

    aprobarInscripcion(id: String!, estado:Enum_EstadoInscripcion!): Inscripcion
  }
`;

export { tiposInscripcion };
