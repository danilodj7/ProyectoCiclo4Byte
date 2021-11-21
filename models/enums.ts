enum Enum_Rol {
  ESTUDIANTE = "ESTUDIANTE",
  LIDER = "LIDER",
  ADMINISTRADOR = "ADMINISTRADOR",
}

enum Enum_EstadoUsuario {
  NO_AUTORIZADO = "NO_AUTORIZADO",
  PENDIENTE = "PENDIENTE",
  AUTORIZADO = "AUTORIZADO",
}

enum Enum_EstadosProyecto {
  ACTIVO = "ACTIVO",
  INACTIVO = "INACTIVO",
}

enum Enum_FaseProyecto {
  INICIADO = "INICIADO",
  DESARROLLO = "EN DESARROLLO",
  TERMINADO = "TERMINADO",
    NULA = "",
}

enum Enum_TipoOjectivo {
    GENERAL = "GENERAL",
    ESPECIFICO='ESPECIFICO'
}

export {
  Enum_Rol,
  Enum_EstadoUsuario,
  Enum_EstadosProyecto,
  Enum_FaseProyecto,
  Enum_TipoOjectivo,
};
