import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class RBook
{
    @Field()
    title: string;
    @Field()
    createdAt: string;
    @Field()
    _id: string;
}