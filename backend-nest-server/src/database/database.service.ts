import { Injectable } from '@nestjs/common';
import { Pool } from 'pg';

@Injectable()
export class DatabaseService {
  private pool: Pool;

  constructor() {
    this.pool = new Pool({
      user: 'rizwan',
      host: 'localhost',
      database: 'okrs',
      password: 'root',
      port: 5432,
    });
  }

  async query(query: string, params: any[] = []) {
    return await this.pool.query(query, params);
  }

}
