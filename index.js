import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { mentorRoute } from "./routes/mentor.js";
import { studentRoute } from "./routes/student.js";
import { assignMentorToStudentRoute } from "./routes/assignMentorToStudent.js";
import mongoose from "mongoose";

dotenv.config()

const app = express();

app.use(cors())
app.use(express.json())

const MONGO_URL = process.env.MONGO_URL;
const PORT =  process.env.PORT || 5000;

mongoose.connect(MONGO_URL,{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> app.listen(PORT, ()=> console.log(`Server started. Listening at ${PORT}`)))
.catch((error) => console.log(error));

//API endpoints
app.get("/",(request,response)=>{
    response.send("Hello Everyone. Welcome to the Backend application for Student Mentor. The API endpoints are /student, /mentor")
})

//Routes
app.use('/mentor', mentorRoute)
app.use('/student',studentRoute)
app.use('/assign-mentor',assignMentorToStudentRoute)
