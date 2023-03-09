import { ProductElement } from "models/Product";
import Realm, { UpdateMode } from "realm";
import { ProductSchema, DB_PRODUCT } from "./products/ProductRealm";

let _productRealm: Realm

function productMapper(product: ProductElement): Object {
    return {
        id: product.id,
        title: product.title,
        description: product.description,
        price: product.price,
        thumbnail: product.thumbnail
    };
}

export const setupProductRealm = async () => {
    _productRealm = await Realm.open({
        path: "database",
        schema: [ProductSchema],
    });

};

export const saveProduct = async (product: ProductElement) => {
    try {
        let task1;
        _productRealm.write(() => {
            task1 = _productRealm.create(DB_PRODUCT, productMapper(product), UpdateMode.All);
        });
    } catch (err) {
        console.log(err);
    }
};

export const saveProductsInDatabase = async (products: Array<ProductElement>) => {
    try {
        _productRealm.write(() => {
            products.forEach(product => {
                _productRealm.create(DB_PRODUCT, productMapper(product));
            });
        });
    } catch (err) {
        console.log(err);
    }
};

export const getAllProducts = () => _productRealm.objects(DB_PRODUCT);