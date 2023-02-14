import { Length, IsEmail, MinLength } from 'class-validator';
import { ArgsType, Field, ID } from 'type-graphql';
import { IUser } from './user.type';

@ArgsType()
class UserArgs implements Partial<IUser> {
  @Field(type => ID, { nullable: true })
    id?: string;

  @Field(type => String, { nullable: true })
  @Length(1, 25)
    name?: string;

  @Field(type => String, { nullable: true })
  @IsEmail()
    email?: string;

  @Field(type => String, { nullable: true })
  @MinLength(4)
    password?: string;
}

export default UserArgs;
