import mongoose, { Schema } from "mongoose";

const mentorSchema = Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    mobile: {
        type: String,
        required: true,
    },
    expertise:{
        type: String,
        required: true,
    },
    studentsAssigned: []    
});

const mentor = mongoose.model("mentors", mentorSchema)
export default mentor;