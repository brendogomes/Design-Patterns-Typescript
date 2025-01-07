import DbProduct from "./dbProduct.interface";

export default class MongoDbProduct implements DbProduct {

    getProductById(id: number): string {
        return `Product Mongo - ${id}`
    }

}