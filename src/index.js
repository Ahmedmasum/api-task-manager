const express = require("express");
require("./db/mongoose");

//const Task = require("./models/task");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT;

// app.use((req, res, next) => {
//   console.log(req.method, req.path);

//   next();
// });

// app.use((req, res, next) => {
//   res.status(503).send("Site is currently down. check back soon!");
// });
// const multer = require("multer");
// const upload = multer({
//   dest: "images",
//   limits: {
//     fileSize: 1000000,
//   },
//   fileFilter(req, file, cb) {
//     if (!file.originalname.match(/\.(doc|docx)$/)) {
//       return cb(new Error("Please upload a word document"));
//     }

//     cb(undefined, true);
//   },
// });
// app.post("/upload", upload.single("upload"), (req, res) => {
//   res.send();
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});

// const jwt = require("jsonwebtoken");

// const myFunction = async () => {
//   const token = jwt.sign({ _id: "abc123" }, "thisismynewcourse", {
//     expiresIn: "7 days",
//   });

//   console.log(token);
//   const data = jwt.verify(token, "thisismynewcourse");
//   console.log(data);
// };

// myFunction();

// const bcrypt = require("bcryptjs");

// const myFunction = async () => {
//   const password = "Red12345!";
//   const hashedPassword = await bcrypt.hash(password, 8);
//   console.log(password);
//   console.log(hashedPassword);

//   const isMatch = await bcrypt.compare("Red12345!", hashedPassword);
//   console.log(isMatch);
// };
// myFunction();
// const Task = require("./models/task");
// const User = require("./models/user");
// const main = async () => {
//   //   const task = await Task.findById("5efa5131760b8c451c2ef534");
//   //   await task.populate("owner").e/xecPopulate();
//   //   console.log(task.owner);
//   const user = await User.findById("5efa512a760b8c451c2ef532");
//   await user.populate("tasks").execPopulate();
//   console.log(user.tasks);
// };
// main();
