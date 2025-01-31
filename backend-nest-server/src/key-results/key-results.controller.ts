import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { KeyResultsService } from './key-results.service';
import { KeyResultDto } from './dto/key-result.dto';

@Controller('key-results')
export class KeyResultsController {
  constructor(private readonly keyResultsService: KeyResultsService) {}

  @Post()
  create(@Body() createKeyResultDto: KeyResultDto) {
    return this.keyResultsService.create(createKeyResultDto);
  }

  @Get("/:id")
  findAll(@Param("id") objective_id: string) {
    return this.keyResultsService.findAll(Number(objective_id));
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.keyResultsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() keyResultDto: KeyResultDto) {
    return this.keyResultsService.update(+id, keyResultDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.keyResultsService.remove(+id);
  }
}
