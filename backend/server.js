const express = require("express");

const dotenv =require("dotenv");
const connectDB = require("./config/db");
const app = express();
const userRoutes = require("./routes/userRoutes");


dotenv.config();

connectDB();

app.use(express.json());
app.get('/',(req,res)=>{
    res.send("API is running fine")
})

app.use("/api/user", userRoutes);



const PORT = process.env.PORT || 3000

app.listen(3000 , console.log("server started on PORT 5000"));
