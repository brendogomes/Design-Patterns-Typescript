import DbProduct from "./dbProduct.interface";

export default class MySQLProduct implements DbProduct {

    getProductById(id: number): string {
        return `Product SQL - ${id}`
    }

}