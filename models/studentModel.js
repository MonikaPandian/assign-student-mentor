import mongoose, { Schema } from "mongoose";

const studentSchema = Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    mobile: {
        type: String,
        required: true,
    },
    course: {
        type: String,
        required: true,
    },
    mentorAssigned: {
        type: String,
        default: null,
        ref: "mentors",
    },
});

const student = mongoose.model("students", studentSchema);
export default student;