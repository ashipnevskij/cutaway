import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Project {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  repoUrl: string;

  @Field({ nullable: true })
  demoUrl?: string;

  @Field()
  profileId: number;
}
