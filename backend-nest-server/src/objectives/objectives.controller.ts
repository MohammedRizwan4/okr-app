import {Body, Controller, Get, Post} from '@nestjs/common';
import { ObjectivesService } from './objectives.service';
import {DatabaseService} from "../database/database.service";
import {CreateObjectiveDto} from "./create-objective.dto";

@Controller('objectives')
export class ObjectivesController {
  constructor(private readonly objectivesService: ObjectivesService) {}

  @Get()
  getAll() {
    return this.objectivesService.getAll();
  }

  @Post()
  create(@Body() okr: CreateObjectiveDto){
    return this.objectivesService.create(okr);
  }
}
