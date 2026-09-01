import { Resolver, Query, Args, ID } from '@nestjs/graphql';
import { ExperienceService } from './experience.service.js';

import { Experience } from './dto/experience.dto.js';

@Resolver(() => Experience)
export class ExperienceResolver {
  constructor(private experienceService: ExperienceService) {}

  @Query(() => [Experience])
  async experiences(): Promise<Experience[]> {
    return this.experienceService.findAll();
  }

  @Query(() => Experience)
  async experience(
    @Args('id', { type: () => ID }) id: number,
  ): Promise<Experience> {
    return this.experienceService.findOne(id);
  }
}
