import axios from 'axios';
import { Test } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';

describe('hello-world(Integration)', () => {
  const PORT = 3001;
  let app: INestApplication;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = module.createNestApplication();
    await app.init();
    // await app.listen(PORT);
  });

  afterAll(() => {
    app.close();
  });

  it("@Get returns 'Hello World!'", async () => {
    // const response = await axios.get(`http://localhost:${PORT}/hello-world`);
    // expect(response.data).toBe('Hello World!');

    const response = await request(app.getHttpServer()).get('/hello-world').expect(200);
    console.log(response);
    // expect()
  });
});
