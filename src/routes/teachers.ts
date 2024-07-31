import { Router } from "express";
import db from "../database/db.json";
import { writeFileSync } from "jsonfile";

const teachersRouter = Router()

teachersRouter.get("/", (request, response) => {
    response.status(200).json(db.teachers);
});

teachersRouter.get("/:id", (request, response) => {
    response.status(200).json(request.params);
});

teachersRouter.patch("/:id", (request, response) => {
    response.status(200).json(request.params);
});

teachersRouter.post("/", (request, response) => {
    const teacher = request.body;
    db.teachers.push(teacher);
    writeFileSync("./src/database/db.json", db);

    response.status(201).json({ message: "SE CREO EL RECURSO!!!" });
});


export default teachersRouter
