import mongoose, { Schema } from "mongoose"
import type { ICliente } from "./cliente.types.js"

const clienteSchema = new Schema<ICliente>(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true
        },
        senha: {
            type: String,
            required: true,
            trim: true
        },
        telefone: {
            type: String,
            required: true,
            trim: true
        },
    },
    { timestamps: true }
)

const Cliente = mongoose.model<ICliente>("Cliente", clienteSchema)

export default Cliente