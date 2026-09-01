import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service.js';
import { Skill } from './dto/skill.dto.js';

@Injectable()
export class SkillService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Skill[]> {
    return this.prisma.skill.findMany({
      orderBy: { name: 'asc' },
    });
  }

  async findByProfileId(profileId: number): Promise<Skill[]> {
    return this.prisma.skill.findMany({
      where: { profileId },
      orderBy: { name: 'asc' },
    });
  }

  async findOne(id: number): Promise<Skill> {
    return this.prisma.skill.findUnique({
      where: { id },
    });
  }
}
