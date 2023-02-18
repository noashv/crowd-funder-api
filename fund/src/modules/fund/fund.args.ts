import {
  Length, IsEmail, MinLength, IsDate,
} from 'class-validator';
import {
  ArgsType, Field, ID, InputType,
} from 'type-graphql';
import Fund, { FundStatus } from './fund.entity';

@InputType()
export class FundInput implements Omit<Fund, 'id'> {
  @Field(type => String)
  @Length(1, 25)
    name: string;

  @Field(type => String)
  @IsEmail()
    description: string;

  @Field(type => Number)
  @MinLength(4)
    endGoal: number;

    @Field(type => Date)
    @IsDate()
      deadline: Date;

    @Field(type => FundStatus)
      status: FundStatus;

    @Field(type => ID)
      userId: string;
}

@ArgsType()
export class FundArgs implements Partial<Fund> {
  @Field(type => ID, { nullable: true })
    id?: string;

    @Field(type => String, { nullable: true })
    @Length(1, 25)
      name: string;

    @Field(type => String, { nullable: true })
    @IsEmail()
      description: string;

    @Field(type => Number, { nullable: true })
    @MinLength(4)
      endGoal: number;

    @Field(type => Date, { nullable: true })
    @IsDate()
      deadline: Date;

    @Field(type => FundStatus, { nullable: true })
      status: FundStatus;

    @Field(type => ID, { nullable: true })
      userId: string;
}
