import { ObjectType, Field, ID } from '@nestjs/graphql';

import { Skill } from '../../skill/dto/skill.dto.js';
import { Experience } from '../../experience/dto/experience.dto.js';
import { Project } from '../../project/dto/project.dto.js';

@ObjectType()
export class Profile {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field(() => String, { nullable: true })
  githubUrl: string | null;

  @Field(() => String, { nullable: true })
  linkedinUrl: string | null;

  @Field(() => String, { nullable: true })
  email: string | null;

  @Field(() => [Skill])
  skills: Skill[];

  @Field(() => [Experience])
  experiences: Experience[];

  @Field(() => [Project])
  projects: Project[];
}
