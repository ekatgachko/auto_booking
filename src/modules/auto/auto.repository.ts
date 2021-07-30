import { Injectable } from '@nestjs/common';
import { IAuto } from './auto.inerface';
import { Client } from 'pg';
import { DatabaseException, DbClientService } from '../../common';

@Injectable()
export class AutoRepository {
  client: Client;
  constructor(private dbService: DbClientService) {
    this.client = this.dbService.getClient();
  }
  async getAutoById(autoId: number): Promise<IAuto> {
    try {
      const result = await this.client.query(`select *
          from auto 
          where id = ${autoId}
         `);
      return result.rows[0];
    } catch (err) {
      throw new DatabaseException();
    }
  }

  async getAll(): Promise<IAuto[]> {
    try {
      const result = await this.client.query(`select *
      from auto`);
      return result.rows;
    } catch (err) {
      throw new DatabaseException();
    }
  }
}
