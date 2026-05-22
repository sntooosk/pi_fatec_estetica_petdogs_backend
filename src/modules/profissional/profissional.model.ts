import mongoose, { Schema } from "mongoose"
import type { IProfissional } from "./profissional.types.js"

const profissionalSchema = new Schema<IProfissional>(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        senha: {
            type: String,
            required: true,
            trim: true,
            select: false,
        },
        telefone: {
            type: String,
            trim: true,
        },
        foto: {
            type: String,
            trim: true,
        },
        role: {
            type: String,
            enum: ["profissional"],
            default: "profissional",
            required: true,
        },
        especialidade: {
            type: String,
            required: true,
            trim: true,
        },
        disponibilidade_inicio: {
            type: Date,
            required: true,
        },
        disponibilidade_fim: {
            type: Date,
            required: true,
        },
    },
    { timestamps: true }
)

const Profissional = mongoose.model<IProfissional>("Profissional", profissionalSchema)

export default Profissional
