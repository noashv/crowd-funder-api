import { Length, IsEmail, MinLength } from 'class-validator';
import {
  ArgsType, Field, ID, InputType,
} from 'type-graphql';
import User from './user.entity';

@InputType()
export class UserInput implements Omit<User, 'id'> {
  @Field(type => String)
  @Length(1, 25)
    name: string;

  @Field(type => String)
  @IsEmail({}, { message: 'input must be a valid email' })
    email: string;

  @Field(type => String)
  @MinLength(4)
    password: string;
}

@ArgsType()
export class UserArgs implements Partial<User> {
  @Field(type => ID, { nullable: true })
    id?: string;

  @Field(type => String, { nullable: true })
  @Length(1, 25)
    name?: string;

  @Field(type => String, { nullable: true })
  @IsEmail({}, { message: 'input must be a valid email' })
    email?: string;

  @MinLength(4)
  @Field(type => String, { nullable: true })
    password?: string;
}
