import db from "#db/client";
import { createEmployee } from "./queries/employees.js";

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  const employees = [
    {
      name: "Alice Johnson",
      birthday: "1985-04-12",
      salary: 75000,
    },
    {
      name: "Bob Martinez",
      birthday: "1990-09-30",
      salary: 68000,
    },
    {
      name: "Carol Nguyen",
      birthday: "1988-01-22",
      salary: 82000,
    },
    {
      name: "David Lee",
      birthday: "1995-06-15",
      salary: 59000,
    },
    {
      name: "Eva Smith",
      birthday: "1979-11-08",
      salary: 91000,
    },
    {
      name: "Frank Harris",
      birthday: "1983-02-19",
      salary: 72000,
    },
    {
      name: "Grace Kim",
      birthday: "1992-07-05",
      salary: 64000,
    },
    {
      name: "Henry Patel",
      birthday: "1987-03-11",
      salary: 87000,
    },
    {
      name: "Isabel Rodriguez",
      birthday: "1991-12-03",
      salary: 70000,
    },
    {
      name: "Jake Thompson",
      birthday: "1980-08-26",
      salary: 95000,
    },
  ];

  for (const employee of employees) {
    await createEmployee(employee);
  }

  console.log("Database seeded successfully");
}
