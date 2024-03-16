const {Schema, model} = require("mongoose");

const noteSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },
    
    email: {
        type: String,
        required: true
    },

    completed: {
        type: Boolean,
        default: false
    }
})

const NewNote = new model("Note", noteSchema);

module.exports = NewNote;