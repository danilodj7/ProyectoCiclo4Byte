import { gql } from "apollo-server-core";

const tiposEnums = gql`


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
    CREADO
  }

  enum Enum_FaseProyecto {
    INICIADO
    EN_DESARROLLO
    TERMINADO
    NULO
  }

  enum Enum_TipoObjetivo {
    GENERAL
    ESPECIFICO
  }

  enum Enum_EstadoInscripcion {
    ACEPTADO
    RECHAZADO
    PENDIENTE
  }
`;

export { tiposEnums };
