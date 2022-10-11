import { ObjectId } from "../deps";

export interface Product {
    _id: ObjectId,
    date: Date
    title: String,
    price: Number,
    description: String,
    code: String,
    image: String,
    stock: Number
}