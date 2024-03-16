const { newNote, getAllNotes, deleteNote, markNoteAsDone, getNoteById, updateNote } = require("../controllers/noteController");
const authMiddleware = require("../middlewares/authMiddleware");
const validate = require("../middlewares/validateMiddleware");
const { newNoteSchema } = require("../validators/noteValidator");

const express = require("express");
const router = express.Router();

router.route("/").get(authMiddleware, getAllNotes);

router.route("/newnote").post(authMiddleware, validate(newNoteSchema),  newNote);

router.route("/deletenote/:id").delete(authMiddleware, deleteNote);

router.route("/markasdone/:id").put(authMiddleware, markNoteAsDone);

router.route("/updatenote/:id").put(authMiddleware, validate(newNoteSchema), updateNote);

router.route("/getnote/:id").get(authMiddleware, getNoteById);

module.exports = router;