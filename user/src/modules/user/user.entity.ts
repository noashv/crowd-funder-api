import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
class User {
    @Field(type => ID)
      id: string;

    @Field(type => String)
      name: string;

    @Field(type => String)
      email: string;

    @Field(type => String)
      password: string;
}

export default User;
