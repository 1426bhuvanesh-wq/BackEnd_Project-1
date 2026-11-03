require("dotenv").config();
const app = require("./app");
const connectDB = require("./src/BackEnd/db/db");


connectDB();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
})





