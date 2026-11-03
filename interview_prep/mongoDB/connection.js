import mongoose from "mongoose";

// init connection
const connect = () => {
  return mongoose.connect("mongodb://localhost:27017/testDB");
};

// create a schema
const student = new mongoose.Schema({
  firstName: string,
});

// create a model
const Student = mongoose.model("Student", student);

// insert a document
connect()
  .then(async () => {
    const student = await Student.create({
      firstName: "Aman",
    });
    console.log(student);
  })
  .catch((err) => {
    console.log(err);
  });
