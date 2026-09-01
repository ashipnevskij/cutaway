import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service.js';
import { Project } from './dto/project.dto.js';

@Injectable()
export class ProjectService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.project.findMany();
  }

  async findOne(id: number) {
    return this.prisma.project.findUnique({ where: { id } });
  }

  async findByProfileId(profileId: number): Promise<Project[]> {
    return this.prisma.project.findMany({
      where: { profileId },
      orderBy: { name: 'asc' },
    });
  }
}
