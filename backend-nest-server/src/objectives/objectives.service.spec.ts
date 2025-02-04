import { Test, TestingModule } from '@nestjs/testing';
import { ObjectivesService } from './objectives.service';
import { mockDeep } from 'jest-mock-extended';
import { PrismaService } from '../prisma/prisma.service';
import {ObjectiveDto} from "./dto/objective.dto";

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
    let objective: ObjectiveDto;
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
  
  describe("findOne", () => {
    let objective: ObjectiveDto & {id: number};
    beforeAll(() => {
      objective = {
        id: 1,
        title: "dummy Title"
      }
    })
    it('should call findUnique method of prisma service with given id', async () => {
      //arrange

      //act
      await service.findOne(1);
      //assert
      expect(prismaService.objective.findUnique).toHaveBeenCalled();
    });

    it('should find particular objective with given Id',async  () => {
      //arrange
      prismaService.objective.findUnique.mockResolvedValue(objective);
      //act
      const response = await service.findOne(1);
      //assert
      expect(response).toEqual(objective);
    });
  })
});
