import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../prisma/prisma.service.js';
import { Profile } from './dto/profile.dto.js';

@Injectable()
export class ProfileService {
  constructor(private prisma: PrismaService) {}

  async findOne(): Promise<Profile> {
    const profile = await this.prisma.profile.findFirst({
      include: { skills: true, experiences: true, projects: true },
    });

    if (!profile) {
      throw new Error('Profile not found');
    }

    return profile;
  }
}
