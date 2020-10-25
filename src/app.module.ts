import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { ConfigModule } from '@nestjs/config';

@Module( {
  imports: [ ConfigModule.forRoot(), BooksModule, GraphQLModule.forRoot( {
    autoSchemaFile: 'schema.gql'
  } ), MongooseModule.forRoot( process.env.MONGO_URI ) ],
  controllers: [ AppController ],
  providers: [ AppService ],
} )
export class AppModule { }
