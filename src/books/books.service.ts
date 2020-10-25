import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { RBook } from "./classes/Book";
import { CreateBookDto } from "./dto/create-book.dto";
import { IBook } from "./interfaces/book.interface";

@Injectable()
export class BookService
{

    constructor ( @InjectModel( 'Book' ) private readonly bookModel: Model<IBook> ) { }

    async findAll (): Promise<RBook[]>
    {
        return await this.bookModel.find();
    }

    async create (
        data: CreateBookDto
    ): Promise<RBook>
    {
        return await this.bookModel.create( data );
    }
}