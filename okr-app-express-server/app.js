import express from 'express';
import {ObjectivesService} from "./services/objectives.service.js";
import {ObjectivesController} from "./controllers/objectives.controller.js";
import cors from 'cors'
const app = express();
const PORT = 3003;

app.use(cors(
    {
        origin: 'http://localhost:5173/',
        optionsSuccessStatus: 200
    }
))

const objectiveService = new ObjectivesService();
const objectiveController = new ObjectivesController(objectiveService);

app.get("/objectives", (req, res) => {
    return objectiveController.fetchAll(res);
})

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`)
})

