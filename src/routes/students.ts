import { Router } from "express";
import db from "../database/db.json";
import { writeFileSync } from "jsonfile";

const studentsRouter = Router()

function validateId(request, response, next) {
    if (request.params.id.includes(1))
        return response.status(400).json({ message: "No me mandaste el ID capo" });

    next();
}

studentsRouter.get("/", (request, response) => {
    response.status(200).json(db.students);
})

studentsRouter.get("/:id", (request, response) => {
    response.status(200).json(request.params);
});

studentsRouter.post("/", (request, response) => {
    const student = request.body;
    db.students.push(student);
    writeFileSync("./src/database/db.json", db);

    response.status(201).json({ message: "SE CREO EL RECURSO!!!" });
});

studentsRouter.patch("/:id", validateId, (request, response) => {
    const id = request.body.id;
    const student = db.students.find((student) => id == student.id);
    student.name = request.body.name;
    writeFileSync("./src/database/db.json", db);
    response.status(200).json({ message: "SE MODIFICO EL STUDENT!!!" });
});

studentsRouter.delete("/:id", validateId, (request, response) => {
    const id = request.body.id;

    const students = db.students.filter((student) => id != student.id);

    db.students = students;
    writeFileSync("./src/database/db.json", db);

    response.status(200).json({ message: "SE ELIMINO EL STUDENT!!!" });
});


export default studentsRouter