import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Skill {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field(() => String, { nullable: true })
  category: string | null;

  @Field()
  profileId: number;
}
