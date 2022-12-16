import express from "express";
import student from "../models/studentModel.js";

const router = express.Router();

router.get("/", async(req,res)=>{
    try{
        const data = await student.find({})         
        res.status(200).send(data);
    }
    catch(e){
        res.status(400).send(e);
    }
});

router.post("/", async(req,res)=>{
    try{
        const data = await student.create({
            name: req.body.name,
            email: req.body.email,
            mobile:req.body.mobile,
            course: req.body.course,
            mentorAssigned: req.body.mentorAssigned,
        });
        res.send(data);        
    }
    catch(e) {
        console.log(e.message,"error");
        res.status(400).send("Error")
    }
});

export const studentRoute = router;