import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service.js';
import { Experience } from './dto/experience.dto.js';

@Injectable()
export class ExperienceService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Experience[]> {
    return this.prisma.experience.findMany({});
  }

  async findOne(id: number): Promise<Experience> {
    return this.prisma.experience.findUnique({ where: { id } });
  }

  async findByProfileId(profileId: number): Promise<Experience[]> {
    return this.prisma.experience.findMany({
      where: { profileId },
      orderBy: { name: 'asc' },
    });
  }
}
