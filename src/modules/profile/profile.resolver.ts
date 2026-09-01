import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { ProfileService } from './profile.service.js';
import { ExperienceService } from '../experience/experience.service.js';
import { ProjectService } from '../project/project.service.js';
import { SkillService } from '../skill/skill.service.js';
import { Profile } from './dto/profile.dto.js';
import { Skill } from '../skill/dto/skill.dto.js';
import { Project } from '../project/dto/project.dto.js';
import { Experience } from '../experience/dto/experience.dto.js';

@Resolver(() => Profile)
export class ProfileResolver {
  constructor(
    private profileService: ProfileService,
    private skillService: SkillService,
    private experienceService: ExperienceService,
    private projectService: ProjectService,
  ) {}

  @Query(() => Profile)
  async profile() {
    return await this.profileService.findOne();
  }

  @ResolveField(() => [Skill])
  async skills(@Parent() profile: Profile) {
    return await this.skillService.findByProfileId(profile.id);
  }

  @ResolveField(() => [Project])
  async projects(@Parent() profile: Profile) {
    return await this.projectService.findByProfileId(profile.id);
  }

  @ResolveField(() => [Experience])
  async experiences(@Parent() profile: Profile) {
    return await this.experienceService.findByProfileId(profile.id);
  }
}
