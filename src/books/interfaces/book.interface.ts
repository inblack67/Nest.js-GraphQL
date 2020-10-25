import { Document } from "mongoose";

export interface IBook extends Document
{
    readonly title: string;
    readonly _id: string;
    readonly createdAt: string;
}