
import {ObjectivesService} from "../services/objectives.service.js";
export class ObjectivesController{
   constructor(objectiveService) {
       this.objectiveService = objectiveService;
   }

   fetchAll(res){
       const objectives= this.objectiveService.fetchAll();
       return res.status(200).send(objectives);
   }
}