import { Controller, Get } from '@nestjs/common';
import { ObjectivesService } from './objectives.service';

@Controller('objectives')
export class ObjectivesController {
  constructor(private readonly objectiveService: ObjectivesService) {}

  @Get()
  getAll() {
    return this.objectiveService.getAll();
  }
}
