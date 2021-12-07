import { gql } from "apollo-server-express";

const tiposAutenticacion = gql`
type Token {
    token:String
    error: String
}

  type Mutation {
    registro(
      nombre: String!
      apellido: String!
      identificacion: String!
      correo: String!
      password: String!
      estado: Enum_EstadoUsuario
      rol: Enum_Rol!
    ): Token!
  } 
`;

export { tiposAutenticacion };
