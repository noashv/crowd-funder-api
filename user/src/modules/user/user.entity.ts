import { ObjectType, Field, ID } from 'type-graphql';
import {
  Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, RelationId,
} from 'typeorm';

@Entity()
@ObjectType()
class User {
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
