import { Router } from "express";
import db from "../database/db.json";

const usersRouter = Router()

usersRouter.delete("/", (request, response) => {
    response.json({ info: db.students })
})

export default usersRouter