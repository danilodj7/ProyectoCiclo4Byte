import express from "express";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";
import dotenv from "dotenv";
import conectarBD from "./db/db.js";
import { tipos } from "./graphql/types.js";
import { resolvers } from "./graphql/resolvers.js";
import { validateToken } from "./utils/tokenUtils.js";

dotenv.config();

const getUserData = (token) => {
  const verificacion = validateToken(token.split(' ')[1]);
  if (verificacion.data) {
    return verificacion.data;
  } else {
    return null;
  }
};

const server = new ApolloServer({
  typeDefs: tipos,
  resolvers: resolvers,
  context: ({ req, res }) => {
    const token = req.headers?.authorization ?? null;
    if (token) {
      const userData = getUserData(token);
      if (userData) {
        return { userData };
      }
    }
    // AQUI CONTROL DE ERRORES Login
    return null;
  },
});

const app = express();

app.use(express.json()); // Permite que los request entren y salgan de tipo json

app.use(cors()); // Permite hacer request desde varios origenes

app.listen({ port: process.env.PORT || 4000 }, async () => {
  await conectarBD(); // conectamos la base de datos
  await server.start(); // prendemos el servidor de apollo

  server.applyMiddleware({ app });

  console.log("servidor listo");
});
