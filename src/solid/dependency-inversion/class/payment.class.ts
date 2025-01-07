import DbProductFactory from "../factory/dbProductFactory.class";

export default class Payment {

    pay(id: number): void {
        const dbProduct = DbProductFactory.create();
        const product = dbProduct.getProductById(id);

        console.log(product);
    }

}
