import express from "express";
const router = express.Router();
import { getEmployees, createEmployee, getEmployee, deleteEmployee, updateEmployee } from "#db/queries/employees";
export default router;

router.route("/").get(async (req, res) => {
  const employees = await getEmployees();
  res.send(employees);
}).post(async(req, res) => {
    if (!req.body) return res.status(400).send("no body");
    const {name, birthday, salary} = req.body;
    if (!name, !birthday, !salary) return res.status(400).send("missing field");
    const employee = await createEmployee(name, birthday, salary);
    res.status(201).send(employee);
})

router.route("/:id").get(async (req, res) => {
    const {id} = req.params;
    if (!/^\d+$/.test(id)) return res.status(400).send("ID must be a positive integer.");
    const employee = await getEmployee(id);
    if (!employee) return res.status(404).send("employee does not exist");
    res.send(employee);
}).delete(async (req, res) => {
    const {id} = req.params;
    if (!/^\d+$/.test(id)) return res.status(400).send("ID must be a positive integer.");
    const employee = await deleteEmployee(id);
    if (!employee) return res.status(404).send("employee does not exist");
    res.status(204).send(employee);
}).put(async (req, res) => {
    if (!req.body) return res.status(400).send("no body");
    const {id} = req.params;
    if (!/^\d+$/.test(id)) return res.status(400).send("ID must be a positive integer.");
    const {name, birthday, salary} = req.body;
    if (!name || !birthday || !salary) return res.status(400).send("one or more fields missing");
    const employee = await updateEmployee(id, name, birthday, salary);
    if (!employee) return res.status(404).send("no employee");
    res.status(200).send(employee);
})
