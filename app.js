import express from "express";
const app = express();
export default app;

// TODO: this file!
app.use(express.json());
import employeesRouter from "#api/employees";

app.use("/employees", employeesRouter);

app.get("/", (req,res) => {
  res.send("Welcome to the Fullstack Employees API.");
})

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send("Something went wrong");
});
