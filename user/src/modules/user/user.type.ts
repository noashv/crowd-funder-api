import { ObjectType, Field, ID } from 'type-graphql';
import {
  Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, RelationId,
} from 'typeorm';

export interface IUser {
  readonly id: string;
  name: string;
  email: string;
  password: string;
}

@Entity()
@ObjectType()
class User implements IUser {
    @Field(type => ID)
    @PrimaryGeneratedColumn()
  readonly id: string;

    @Field(type => String)
    @Column()
      name: string;

    @Field(type => String)
    @Column()
      email: string;

    @Field(type => String)
    @Column()
      password: string;
}

export default User;
