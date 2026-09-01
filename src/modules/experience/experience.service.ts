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
    const experience = await this.prisma.experience.findUnique({
      where: { id },
    });
    if (!experience) {
      throw new Error('Experience not found');
    }
    return experience;
  }

  async findByProfileId(profileId: number): Promise<Experience[]> {
    return this.prisma.experience.findMany({
      where: { profileId },
      orderBy: { position: 'asc' },
    });
  }
}
