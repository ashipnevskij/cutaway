import { NestFactory } from '@nestjs/core';
import type { INestApplication } from '@nestjs/common';
import type { Request, Response } from 'express';
import { AppModule } from './app.module.js';

let app: INestApplication | undefined;

async function bootstrap(): Promise<INestApplication> {
  if (!app) {
    app = await NestFactory.create(AppModule);
    await app.init();
  }
  return app;
}

//для vercel
export default async function handler(req: Request, res: Response) {
  try {
    const instance = await bootstrap();
    instance.getHttpAdapter().getInstance()(req, res);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
}

// для local development
if (process.env.VERCEL !== '1') {
  void bootstrap().then((instance) =>
    instance.listen(process.env.PORT ?? 3000),
  );
}
