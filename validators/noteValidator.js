const {z} = require("zod");

const newNoteSchema = z.object({
    title: z.string({required_error: "Title required"}).min(3, {message: "Title have atleast 3 charachters"}).max(35, {message: "Title can not have more than 35 characters"}),

    description: z.string({required_error: "Description requied"}).min(3, {message: "Description have atleast 3 characters"}),
})

module.exports = {newNoteSchema}