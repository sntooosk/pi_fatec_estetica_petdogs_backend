import mongoose, { Schema } from "mongoose"
import type { IAgendamento } from "./agendamento.types.js"

const agendamentoSchema = new Schema<IAgendamento>(
    {
        data_hora: {
            type: Date,
            required: true,
        },
        status: {
            type: String,
            required: true,
            trim: true,
        },
    },
    { timestamps: true }
)

const Agendamento = mongoose.model<IAgendamento>("Agendamento", agendamentoSchema)

export default Agendamento