import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { BookService } from "./books.service";
import { RBook } from "./classes/Book";

@Resolver()
export class BooksResolver
{

    constructor ( private readonly bookService: BookService ) { }

    @Query( () => String )
    hello (): string
    {
        return 'word';
    }

    @Query( () => [ RBook ] )
    async books (): Promise<RBook[]>
    {
        return this.bookService.findAll();
    }

    @Mutation( () => RBook )
    async createBook (
        @Args( 'title' ) title: string
    ): Promise<RBook>
    {
        return this.bookService.create( { title } );
    }

}