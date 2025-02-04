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
      // act
      await service.findAll();
      //assert
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

  describe('create', () => {
    let objective;
    beforeAll(() => {
      objective = {
        title: 'dummy title',
      };
    });
    it('should call create method of prisma service with given objective', async () => {
      //arrange

      // act
      await service.create(objective);
      //assert
      expect(prismaService.objective.create).toHaveBeenCalled();
    });

    it('should create objective and return objective', async () => {
      //arrange
      const dummyObjective = {
        id: 1,
        title: 'dummy title',
      };
      prismaService.objective.create.mockResolvedValue(dummyObjective);
      //act
      const response = await service.create(objective);
      //assert
      expect(response).toEqual(dummyObjective);
    });
  });
});
