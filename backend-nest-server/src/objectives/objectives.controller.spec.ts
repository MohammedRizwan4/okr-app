import { Test, TestingModule } from '@nestjs/testing';
import { ObjectivesController } from './objectives.controller';
import { ObjectivesService } from './objectives.service';
import { mockDeep } from 'jest-mock-extended';

describe('ObjectivesController', () => {
  let controller: ObjectivesController;
  let service = mockDeep<ObjectivesService>();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ObjectivesController],
      providers: [
        {
          provide: ObjectivesService,
          useValue: service,
        },
      ],
    }).compile();

    controller = module.get<ObjectivesController>(ObjectivesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll()', () => {
    it('should call findAll of objectivesService', () => {
      controller.findAll();

      expect(service.findAll).toHaveBeenCalled();
    });

    it('should return all objectives', async() => {
      const dummyObjectives = [
        {
          id: 1,
          title: 'dummy title',
          key_results: [],
        },
      ];

      service.findAll.mockResolvedValue(dummyObjectives);

      const response = await controller.findAll();

      expect(response).toEqual(dummyObjectives);
    });
  });
});
