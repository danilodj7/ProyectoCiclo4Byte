import conectarBD from "./db/db";
import { UserModel } from "./models/user";
import { Enum_Rol } from "./models/enums";

const main = async () => {
  await conectarBD();

  // Crear usuario
  await UserModel.create({
    apellido: "Saavedra Diaz",
    correo: "dsaav@correo.com",
    identificacion: "1233456",
    nombre: "Carlos",
    rol: Enum_Rol.ADMINISTRADOR,
  })
    .then((u) => {
      console.log("usuario creado", u);
    })
    .catch((e) => {
      console.error("Error creando el usuario", e);
    });

  //   await UserModel.find()
  //     .then((u) => {
  //       console.log("usuarios", u);
  //     })
  //     .catch((e) => {
  //       console.error("Error obteniendo los usuarios", e);
  //     });
};

main();
