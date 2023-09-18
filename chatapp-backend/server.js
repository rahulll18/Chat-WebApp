const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./Config/db");
const userRoutes = require("./Routes/userRoutes");

dotenv.config();
connectDB();
const app = express();
app.use(express.json()); // to accept json data

// app.get('/' , (req , res) =>{
//     console.log("API is Running");
// });

app.get("/", (req, res) => {
  res.send("Got Response Succesfully");
});

app.use("/api/user", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on Port ${PORT}`));
// app.listen(5000 , console.log('Server started on Port 5000'));
