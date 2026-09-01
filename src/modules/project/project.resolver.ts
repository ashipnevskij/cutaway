import { Args, Query, Resolver, ID } from '@nestjs/graphql';
import { Project } from './dto/project.dto.js';
import { ProjectService } from './project.service.js';

@Resolver(() => Project)
export class ProjectResolver {
  constructor(private projectService: ProjectService) {}

  @Query(() => [Project])
  async projects() {
    return await this.projectService.findAll();
  }

  @Query(() => [Project])
  async project(@Args('id', { type: () => ID }) id: number) {
    return await this.projectService.findOne(id);
  }
}
