const express = require('express')
const mongoose = require('mongoose')
const app = express()
app.use(express.json())

const connectDB =async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/adedeji')
        console.log('db connected');
    } catch (error) {
        console.log(error);
        
    }
}
connectDB()
const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    
    age:Number,

    email:{
        type:String,
        required:true,
        unique:true
    },

    course:{
        type:String,
        minlength:2
    },

    institution:String,
});

const Student = mongoose.model('Student',studentSchema);

// app.get()

// PART B 
app.post('/create-student',async (req,res) => {

    const { name, age, email, course,institution,} = req.body;

    try {

        const student = new Student ({
            name,
            age,
            email,
            course,
            institution
        });

        await student.save();

        return  res.status(201).json({
            message:'student created sucessfully',student
        }); 
    
    } catch (error) {
        console.log(error);

        if (error.code === 11000) {
            return res.status(409).json({
                message: "Email already exists"
            });
        }

        if (error.name === 'ValidationError'){
            return res.status(400).json({
                
                message: "Bad request"})
        }
        return res.status(500).json({message:'internal sever error'});
    }
});

app.get('/get-students', async (req, res) => {
    try {
        const students = await Student.find();

        return res.status(200).json({
            message: "students fetched successfully",
            students
        });

    } catch (error) {
        return res.status(500).json({
            message: "Internal server error"
        });
    }
});

// 1.
app.get('/search-students',async (req,res) => {
   const { q } = req.query;

   if (!q||q.trim()==='') {
    return res.status(400).json({
        Message:"Bad request"
    })
   }

   try {

    const students = await Student.find({

        $or:[
            {name:{$regex: q.trim(),$options:'i'} },
            {course:{$regex: q.trim(),$options: 'i'} },
            {email:{$regex: q.trim(),$options: 'i'} }
        ]
    });
    return res.status(200).json(students);
   } catch (error) {
    return res.status(500).json({
        Message:"internal server error"
    });
   } 
});
// list/search endpoint usually do that because there is matching result 

app.get('/get-student-by-name', async (req, res) => {
    const { name } = req.query;

    const student = await Student.find({ name });

    return res.status(200).json({
        message: 'student fetched successfully',
        student
    });
});

// 2.
app.get('/get-student',async (req,res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({message:"Invalid student Id"});
    }
    //isValid() is not perfect because mongoose.Types.ObjectId.isValid() checks whether
    //  a value can be cast/converted to an ObjectId.
    // It does not necessarily mean the value is a normal 24-character hexadecimal ObjectId string.
    try {
        const student = await student.findbyId(id);

        if (!student) {
            return res.status(404).json({message:"student not found"});
        }
        return res.status(200).json({message:"student fetched sucessfully"})
    } catch (error) {
        return res.status(500).json({message:"internal server error"});
    }
});

app.get('/get-student/:id', async (req,res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
            message: "Invalid student Id"
        });
    }
    try {
        const student = await Student.findById(id);

        if (!student) {
            return res.status(404).json({
                message:"student not found"
            });
        }
        return res.status(200).json({
            message: "Student fetched sucessfully",student
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error"
        });
    }
})

// 3.
app.patch('/students/:id/course',async (req,res) => {

    const { id } = req.params;

    const { course } = req.body;

if (!course || course.trim()=== '') {
    return res.status(400).json({
        message: "Course is required"
    });
}

    try {

        const student = await Student.findByIdAndUpdate(
            id,
            {course:course},
            {
                returnDocument: "after",
                runValidators: true
            });

            if (!student) {
                return res.status(404).json({
                    message:"student not found"
                });
            }

            return res.status(200).json({
                message:"student updated sucessfully",student
            });

    } catch (error) {

        if (error.name === 'ValidationError') {
        return res.status(400).json({
            message:error.message
        });    
        }

        return res.status(500).json({
            message:"internal server error"
        });
    }
});

// 4.
// unique:true tell mongoose to create/use a unique mongodb index meaning unique:true is not enough there is for index 

// app.post('/create-student',async (req,res) => {
//     const {name,age,email,course,institution} = req.body
//     try {
//         const student = new Student({name,age,email,course,institution});
//         await student.save();
//         return res.status(201).json({message: "student created suceesfully"});
//     } catch (error) {
//         if (error.code === 11000) {
//             return res.status(409).json({message: "Email already exists"});
//         }
//         if (error.name === 'ValidationError'){
//             return res.status(400).json({message: "Bad request"})
//         }
//         return res.status(500).json({message: "Internal server error"});
//     }
// });


// 5.
app.delete('/delete-student/:id',async (req,res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({message: "Invalid student id"});
    }
    try {
        const student = await Student.findByIdAndDelete(id);
        if (!student) {
            return res.status(404).json({message: "student not found"});
        }
        return res.status(200).json({message: "Stsudent deleted sucessfully"})
    } catch (error) {
        return res.status(500).json({message: " Internal server error"})
    }
});
// 200 is used because we return the deleted student
// in the response, confirming what was successfully deleted.

 const port = 1000;

 app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
    
 })




