import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { PrismaService } from '../src/prisma/prisma.service';

describe('objectives (Integration)', () => {
  let app: INestApplication;
  let prismaService: PrismaService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = module.createNestApplication();
    prismaService = module.get<PrismaService>(PrismaService);
    await app.init();
  });
  afterAll(async () => {
    await app.close();
  });

  beforeEach(async () => {
    await prismaService.keyResult.deleteMany();
    await prismaService.objective.deleteMany();
  });

  describe('GET /objectives', () => {
    it('should return 200 status code', async () => {
      await request(app.getHttpServer()).get('/objectives').expect(200);
    });

    it('should return all objectives', async () => {
      // arrange

      const createdObjective = await prismaService.objective.create({
        data: { title: 'dummy title' },
      });

      // act
      const response = await request(app.getHttpServer())
        .get('/objectives')
        .expect(200);

      // assert
      expect(response.body).toMatchObject([
        { ...createdObjective, key_results: [] },
      ]);
    });
  });

  describe('GET /objectives/:id', () => {
    it('should return 200 status code', async () => {
      await request(app.getHttpServer()).get(`/objectives/${1}`).expect(200);
    });

    it('should return objective with given id', async () => {
      const createdObjective = await prismaService.objective.create({
        data: { title: 'dummy title' },
      });

      // act
      const response = await request(app.getHttpServer())
        .get(`/objectives/${createdObjective.id}`)
        .expect(200);

      // assert
      expect(response.body).toMatchObject({
        ...createdObjective,
        key_results: [],
      });
    });
  });
});
