import express from "express";
import {ObjectivesController} from "../controllers/objectives.controller.js";
import {ObjectivesService} from "../services/objectives.service.js";

export const router = express.Router();
//
// export default function generateObjectivesRouter() {
    const objectivesService = new ObjectivesService();
    const objectivesController = new ObjectivesController(objectivesService);
     router.get("/", (req, res) => {
        objectivesController.fetchAll(res);
    })
// };