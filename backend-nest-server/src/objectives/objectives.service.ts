import { Injectable } from '@nestjs/common';
import { ObjectiveDto } from './dto/objective.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ObjectivesService {
  constructor(private readonly prismaService: PrismaService) {}

  create(objectiveDto: ObjectiveDto) {
    return this.prismaService.objective.create({
      data: { ...objectiveDto, keyResults: {

        } },
    });
  }

  findAll() {
    return this.prismaService.objective.findMany({
      include: {
        key_results: true,
      },
    });
  }

  findOne(id: number) {
    return this.prismaService.objective.findUnique({
      where: {
        id,
      },
      include: {
        key_results: true
      }
    });
  }

  update(id: number, objectiveDto: ObjectiveDto) {
    return this.prismaService.objective.update({
      data: objectiveDto,
      where: { id },
    });
  }

  remove(id: number) {
    return this.prismaService.objective.delete({
      where: {
        id
      }
    })
  }
}
