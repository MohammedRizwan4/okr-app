import { Injectable } from '@nestjs/common';
import {DatabaseService} from "../database/database.service";
import {CreateObjectiveDto} from "./create-objective.dto";

@Injectable()
export class ObjectivesService {
  constructor(private readonly databaseService: DatabaseService) {
  }

  async create(okr: CreateObjectiveDto){
    return (await this.databaseService.query("insert into objectives (title) values ($1) returning *",[okr.title]))
  }

  async getAll() {
    return (await this.databaseService.query("select * from objectives", [])).rows;
  }
}
