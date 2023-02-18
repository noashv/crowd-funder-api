import {
  ObjectType, Field, ID, registerEnumType,
} from 'type-graphql';
import {
  Entity, PrimaryGeneratedColumn, Column,
} from 'typeorm';

export enum FundStatus {
  Unset = 'Unset',
  Valid = 'Valid',
  Rejected = 'Rejected'
}

registerEnumType(FundStatus, {
  name: 'FundStatus',
  description: 'status of the fund',
});

export interface IFund {
  readonly id: string;
  name: string;
  description: string;
  endGoal: number;
  deadline: Date;
  status: FundStatus;
  userId: string;
}

@Entity()
@ObjectType()
class Fund implements IFund {
    @Field(type => ID)
    @PrimaryGeneratedColumn()
  readonly id: string;

    @Field(type => String)
    @Column()
      name: string;

    @Field(type => String)
    @Column()
      description: string;

    @Field(type => Number)
    @Column()
      endGoal: number;

    @Field(type => Date)
    @Column()
      deadline: Date;

    @Field(type => FundStatus)
    @Column()
      status: FundStatus;

    @Field(type => ID)
    @Column()
      userId: string;
}

export default Fund;
