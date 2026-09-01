import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Experience {
  @Field(() => ID)
  id: number;

  @Field()
  company: string;

  @Field()
  position: string;

  @Field()
  startDate: Date;

  @Field({ nullable: true })
  endDate?: Date;

  @Field({ nullable: true })
  description?: string;

  @Field()
  profileId: number;
}
