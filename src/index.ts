import express, { json } from "express";
import db from "./database/db.json";

import studentsRouter from "./routes/students";
import teachersRouter from "./routes/teachers"
import usersRouter from "./routes/users"

const PORT = 8080;
export const app = express();


function addProperty(request, response, next) {
    request.user = "Jime";

    next();
}

app.use(json());
app.use(addProperty);

app.get("/", (request: any, response) => {
    response.status(200).json({ message: "soy la raíz" });
});

app.get("/api", (request: any, response) => {
    response.status(200).json(db.description);
});

app.use("/api/students", studentsRouter)
app.use("/api/teachers", teachersRouter)
app.use("/api/users", usersRouter)

app.listen(PORT, () => {
    console.log("Server listening on port:", PORT);
});
