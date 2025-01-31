import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ObjectivesService } from './objectives.service';
import { ObjectiveDto } from './dto/objective.dto';

@Controller('objectives')
export class ObjectivesController {
  constructor(private readonly objectivesService: ObjectivesService) {}

  @Post()
  create(@Body() createObjectiveDto: ObjectiveDto) {
    return this.objectivesService.create(createObjectiveDto);
  }

  @Get()
  findAll() {
    return this.objectivesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.objectivesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() objectiveDto: ObjectiveDto) {
    return this.objectivesService.update(+id, objectiveDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.objectivesService.remove(+id);
  }
}
