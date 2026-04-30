import mongoose, { Schema } from "mongoose";
import type { IServico } from "./servico.types.js";


const servicoSchema = new Schema<IServico>(
    {
        name: {
            type: String,
            required: false,
            trim: true
        },
        duracao_min: {
            type: Number,
            required: true,
            trim: true
        },
        preco: {
            type: Number,
            required: true,
            trim: true
        },
    },
    {

        timestamps: true,
    }
);
const Servico = mongoose.model<IServico>("Servico", servicoSchema);

export default Servico;