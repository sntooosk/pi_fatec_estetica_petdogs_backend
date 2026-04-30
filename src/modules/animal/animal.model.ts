import mongoose, { Schema } from "mongoose"
import type { IAnimal } from "./animal.types.js"

const animalSchema = new Schema<IAnimal>(
    {
        id_animal: {
            type: Number,
            required: true,
        },
        nome: {
            type: String,
            required: true,
            trim: true,
        },
        especie: {
            type: String,
            required: true,
            trim: true,
        },
        idade: {
            type: Number,
            required: true,
        },
        porte: {
            type: String,
            required: true,
            trim: true,
        },
    },
    { timestamps: true }
)

const Animal = mongoose.model<IAnimal>("Animal", animalSchema)

export default Animal