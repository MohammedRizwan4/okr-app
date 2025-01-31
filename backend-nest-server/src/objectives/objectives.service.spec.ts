import { Test, TestingModule } from '@nestjs/testing';
import { ObjectivesService } from './objectives.service';
import { mockDeep } from 'jest-mock-extended';
import { PrismaService } from '../prisma/prisma.service';

describe('ObjectivesService', () => {
  let service: ObjectivesService;
  let prismaService = mockDeep<PrismaService>();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ObjectivesService,
        { provide: PrismaService, useValue: prismaService },
      ],
    }).compile();

    service = module.get<ObjectivesService>(ObjectivesService);
  });

  describe('findAll', () => {
    it('should call findMany method from Prisma Service', async () => {
      await service.findAll();
      expect(prismaService.objective.findMany).toHaveBeenCalled();
    });

    it('should return all objectives', async () => {
      //Arrange
      const dummyObjectives = [
        {
          id: 1,
          title: 'dummy title',
          key_results: [],
        },
      ];

      prismaService.objective.findMany.mockResolvedValue(dummyObjectives);
      //Act
      const response = await service.findAll();
      //Assert
      expect(response).toEqual(dummyObjectives);
    });
  });
});
