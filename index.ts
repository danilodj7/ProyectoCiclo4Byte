import express from "express";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";
import dotenv from "dotenv";
import conectarBD from "./db/db";
import { tipos } from "./graphql/types";
import { resolvers } from "./graphql/resolvers";

dotenv.config();

const server = new ApolloServer({
  typeDefs: tipos,
  resolvers: resolvers,
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
