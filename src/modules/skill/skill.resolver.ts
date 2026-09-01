import { Args, ID, Query, Resolver } from '@nestjs/graphql';
import { SkillService } from './skill.service.js';
import { Skill } from './dto/skill.dto.js';

@Resolver()
export class SkillResolver {
  constructor(private skillService: SkillService) {}

  @Query(() => [Skill])
  async skills(): Promise<Skill[]> {
    return this.skillService.findAll();
  }

  @Query(() => Skill, { nullable: true })
  async skill(@Args('id', { type: () => ID }) id: number): Promise<Skill> {
    return this.skillService.findOne(id);
  }
}
