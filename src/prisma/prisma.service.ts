import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '../generated/prisma/client.js';
import { PrismaPg } from '@prisma/adapter-pg';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    const connectionString = process.env.DATABASE_URL;
    const ssl = connectionString?.includes('sslmode=')
      ? { rejectUnauthorized: false }
      : undefined;

    super({
      adapter: new PrismaPg({ connectionString, ssl }),
      log: ['query', 'info', 'warn', 'error'],
    });
    //console.log('PrismaService initialized');
  }
  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
