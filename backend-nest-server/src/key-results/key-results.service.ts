import { Injectable } from '@nestjs/common';
import { KeyResultDto } from './dto/key-result.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class KeyResultsService {
  constructor(private readonly prismaService: PrismaService) {}

  create(keyResultDto: KeyResultDto) {
    return this.prismaService.keyResult.create({
      data: keyResultDto,
    });
  }

  findAll(objective_id: number) {
    return this.prismaService.keyResult.findMany({
      where: {
        objective_id,
      },
    });
  }

  findOne(id: number) {
    return this.prismaService.keyResult.findUnique({
      where: { id },
    });
  }

  update(id: number, keyResultDto: KeyResultDto) {
    return this.prismaService.keyResult.update({
      data: keyResultDto,
      where: { id },
    });
  }

  remove(id: number) {
    return this.prismaService.keyResult.delete({
      where: { id },
    });
  }
}
