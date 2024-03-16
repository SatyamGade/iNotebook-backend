const NewNote = require("../models/newNoteModel");

const getAllNotes = async (req, res, next)=>{
    try {
        const email = req.user.email;
        const data = await NewNote.find({email, completed: false}, {password: 0});
        return res.status(200).json({data});
    } catch (error) {
        const message = "get all notes error in server side";
        const status = 400;
        next({message, status});
    }
}

const newNote = async (req, res, next)=>{
    try {
        const {title, description} = req.body;
        const email = req.user.email;
        const data = await NewNote.create({title, description, email});
        return res.status(200).json(data);
    } catch (error) {
        const message = "New Note error in server side";
        const status = 400;
        next({message, status});
    }
}

const deleteNote = async (req, res, next)=>{
    try {
        const id = req.params.id;
        await NewNote.deleteOne({_id: id});
        return res.status(200).json({message: "Note Deleted!"});
    } catch (error) {
        const message = "Delete Note error in server side";
        const status = 400;
        next({message, status});
    }
}

const markNoteAsDone = async (req, res, next) =>{
    try {
        const id = req.params.id;
        const updatedData = await NewNote.updateOne({_id: id}, {
            $set: {completed: true}
        })
        return res.status(200).json({updatedData});
    } catch (error) {
        const message = "Mark Note as Done error in server side";
        const status = 400;
        next({message, status});
    }
}

const updateNote = async (req, res, next) =>{
    try {
        const id = req.params.id;
        const data = req.body;
        const updatedData = await NewNote.updateOne({_id: id}, {
            $set: data
        })
        return res.status(200).json(updatedData);
    } catch (error) {
        const message = "Mark Note as Done error in server side";
        const status = 400;
        next({message, status});
    }
}

const getNoteById = async (req, res, next)=>{
    try {
        const id = req.params.id;
        const note = await NewNote.findOne({_id:id});
        return res.status(200).json(note);
    } catch (error) {
        const message = "get note error in server side";
        const status = 400;
        next({message, status});
    }
}

module.exports = {newNote, getAllNotes, deleteNote, markNoteAsDone, updateNote, getNoteById};