import conectarBD from "./db/db";
import { UserModel } from "./models/usuario";
import { Enum_Rol, Enum_TipoOjectivo } from "./models/enums";
import { ProjectModel } from "./models/proyecto";
import { ObjectiveModel } from "./models/objetivo";

const main = async () => {
  await conectarBD();

  const objective = await ObjectiveModel.create({
    descripcion: "Este es el objetivo especifico",
    tipo: Enum_TipoOjectivo.ESPECIFICO,
  });

  ProjectModel.create({
    nombre: "Proyecto 3",
    presupuesto: 200,
    fechaInicio: Date.now(),
    fechaFin: new Date("2021/12/14"),
    lider: "6199aa33a0bba8df08855636",
    objectivos:['6199ee5a765180e7b5ac5e34','6199eea11399034b41f4e6f3'],
  });
  // const proyecto = await ProjectModel.find({ nombre: "Proyecto 2" }).populate(
  //   "lider"
  // );
  // console.log(proyecto);
};

main();

// CRUD USUARIO
//     // CREAR USUARIO
//   UserModel.create({
//       apellido: "Pinzon Soto",
//       nombre:"Monica Alexandra",
//       correo: "mp@correo.com.co",
//       identificacion: "2341",
//       rol: Enum_Rol.LIDER,
//     })
//       .then((u) => {
//         console.log("usuario creado", u);
//       })
//       .catch((e) => {
//         console.error("Error creando el usuario", e);
//       });

// EDITAR UN USUARIO

//   await UserModel.findOneAndUpdate(
//     { correo: "correo@bbb.com" },
//     { apellido: "Saavedra Diaz" }
//   )
//     .then((u) => {
//       console.log("usuario Actualizado", u);
//     })
//     .catch((e) => {
//       console.error("Error actualizando el usuario", e);
//     });

// OBTENER USUARIOS

//   UserModel.find()
//     .then((u) => {
//       console.log("usuarios", u);
//     })
//     .catch((e) => {
//       console.error("Error obteniendo los usuarios", e);
//     });

//  BORRAR LOS USUARIOS

//   await UserModel.findOneAndDelete(
//     { correo: "correo@bbb2.com" }
//   )
//     .then((u) => {
//       console.log("usuario borrado", u);
//     })
//     .catch((e) => {
//       console.error("Error borrando el usuario", e);
//     });
