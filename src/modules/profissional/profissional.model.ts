import mongoose, { Schema } from "mongoose"
import type { IProfissional} from "./profissional.types.js"

const profissionalSchema = new Schema<IProfissional>(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        especialidade: {
            type: String,
            required: true,
            trim: true
        },
        disponibilidade_inicio: {
            type: Date,
            required: true
        },
        disponibilidade_fim: {
            type: Date,
            required: true
        },
    },
    { timestamps: true }
)

const Profissional = mongoose.model<IProfissional>("Profissional", profissionalSchema)

export default Profissional