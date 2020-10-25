import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { BooksResolver } from "./books.resolver";
import { BookSchema } from "./books.schema";
import { BookService } from "./books.service";



@Module( {
    imports: [ MongooseModule.forFeature( [ { name: 'Book', schema: BookSchema } ] ) ],
    providers: [ BooksResolver, BookService ],
} )
export class BooksModule { }
