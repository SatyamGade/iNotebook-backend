require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const connectDB = require("./utils/db");
const errorMiddleware = require("./middlewares/errorMiddleware");
const authRoutes = require("./routes/authRoutes");
const noteRoutes = require("./routes/noteRoutes");

 const corsOptions = {
     origin: ["https://i-notebook-frontend-six.vercel.app"],
     methods: ["GET, POST, PUT, DELETE"],
     credentials: true
 }

app.use(cors(corsOptions));
app.use(function (req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
})

app.use(express.json());
app.use(errorMiddleware);

app.use("/api/auth", authRoutes);
app.use("/api/note", noteRoutes);

const PORT = 5000;

connectDB().then(() =>{
    app.listen(PORT, ()=>{
        console.log(`Server is listening on ${PORT} PORT`);
    })
})
