import Db from "../enum/db.enum";
import DbProduct from "../model/dbProduct.interface";
import MongoDbProduct from "../model/mongoDbProduct.class";
import MySQLProduct from "../model/mySQLProduct.class";

export default class DbProductFactory {

    private static type: Db = Db.MYSQL;

    public static create(): DbProduct {

        if (DbProductFactory.type === Db.MYSQL) {

            return new MySQLProduct();

        }

        return new MongoDbProduct();
    }
}