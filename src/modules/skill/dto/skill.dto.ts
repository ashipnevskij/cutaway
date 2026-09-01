import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Skill {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  category?: string;

  @Field()
  profileId: number;
}
