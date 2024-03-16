const {z} = require("zod");

const loginSchema = z.object({
    email: z.string({required_error: "Email required"}).email({message: "Email must be valid email"}),
    password: z.string({required_error: "Password required"})
})

const signupSchema = loginSchema.extend({
    username: z.string({required_error:"Name is required"}).min(3, {message: "Name must have atleast 3 charachters"}).max(255, {message: "Name is not more than 255 charachters"}),

    password: z.string({required_error: "Password required"}).min(8, "Password must be minimum of 8 characters"),

    phone: z.string({required_error:"Phone is required"}).min(10, {message :"Phone must be atleast 10 digits"}).max(13,{message: "Phone not have more than 13 charachters"}),
})

module.exports = {loginSchema, signupSchema};