import { connect } from "mongoose";

const conectarBD = async () => {
  return await connect(
    "mongodb+srv://adminProyectos:admin@gestordeproyectosmintic.2h5l6.mongodb.net/GestionProyectos?retryWrites=true&w=majority"
  )
    .then(() => {
      console.log("Conexion Exitosa");
    })
    .catch((e) => {
      console.error("Error en la conexion a la bd ", e);
    });
};

export default conectarBD;
