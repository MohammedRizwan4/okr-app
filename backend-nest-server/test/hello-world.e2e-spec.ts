import axios from 'axios';
import { Test } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import { INestApplication } from '@nestjs/common';

describe('hello-world(Integration)', () => {
  const PORT = 3001;
  let app: INestApplication;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = module.createNestApplication();
    await app.listen(PORT);
  });

  afterAll(() => {
    app.close();
  });

  it("@Get returns 'Hello World!'", async () => {
    const response = await axios.get(`http://localhost:${PORT}/hello-world`);
    expect(response.data).toBe('Hello World!');
  });
});
