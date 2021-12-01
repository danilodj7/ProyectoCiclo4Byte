import { gql } from "apollo-server-core";

const tiposProyecto = gql`

  type Proyecto {
    _id: ID!
    nombre: String!
    presupuesto: Float
    fechaInicio: Date!
    fechaFin: Date!
    estado: Enum_EstadosProyecto!
    fase: Enum_FaseProyecto!
    lider: Usuario!
    objectivos: [Objetivo]!
    avances:[Avance]
    inscripciones:[Inscripcion]
  }

  type Query {
    Proyectos: [Proyecto]
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

  type Mutation {
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

export { tiposProyecto };
