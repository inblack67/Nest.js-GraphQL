import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class CreateBookDto
{
    @Field()
    readonly title: string;
}