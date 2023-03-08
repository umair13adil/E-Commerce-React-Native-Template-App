
export const DB_PRODUCT: string = "Product"

export const ProductSchema = {
    name: DB_PRODUCT,
    properties: {
        id: "int",
        title: "string",
        description: "string",
        price: "int",
        thumbnail: "string"
    },
    primaryKey: "id",
};
