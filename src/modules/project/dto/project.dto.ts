import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Project {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field(() => String, { nullable: true })
  description: string | null;

  @Field(() => String, { nullable: true })
  repoUrl: string | null;

  @Field(() => String, { nullable: true })
  demoUrl: string | null;

  @Field()
  profileId: number;
}
