import { Field, ObjectType, ID } from "type-graphql";
import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
@ObjectType({ description: "Object containing blog posts" })
export default class BlogPosts {
  @Field(() => ID)
  @PrimaryColumn()
  id: string;

  @Field({
    nullable: false,
  })
  @Column({
    nullable: false,
  })
  summary: string;

  @Field({
    nullable: false,
  })
  @Column({
    nullable: false,
  })
  slug?: string;

  @Field()
  @Column()
  description?: string;
}
