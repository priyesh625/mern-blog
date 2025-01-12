import express from 'express'
import mongoose from 'mongoose';
import dotenv from "dotenv"

dotenv.config();

 mongoose.connect(process.env.MONGO)
.then(() => {
    console.log("Mongodb is connected");
    
}).catch((err) => {
    console.log(err);
    
});

//RDDIPmontBomAn1g


const app = express();


app.listen(3000, () => {
    console.log("Serveris running on port 3000")
})