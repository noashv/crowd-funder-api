import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class User {
    @Field(type => ID)
    id: String;

    @Field(type => String)
    name: String;

    @Field(type => String)
    email: String;

    @Field(type => String)
    password: String;

}