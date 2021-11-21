import { Schema, model } from "mongoose";
import { Enum_TipoOjectivo } from "./enums";
import { ProjectModel } from "./proyecto";

interface Objective {
  descripcion: string;
  tipo: Enum_TipoOjectivo;
  //proyecto: Schema.Types.ObjectId;
}

const objectiveSchema = new Schema<Objective>({
  descripcion: {
    type: String,
    required: true,
  },
  tipo: {
    type: String,
    enum: Enum_TipoOjectivo,
    required: true,
  },
  // proyecto: {
  //   type: Schema.Types.ObjectId,
  //   ref: ProjectModel,
  // },
});

const ObjectiveModel = model("Objectivo", objectiveSchema);

export { ObjectiveModel };
