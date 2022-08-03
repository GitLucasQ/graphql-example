import { buildSchema } from "graphql";

const schema =  buildSchema(`
    type Product {
        _id: ID!,
        name: String,
        price: Float,
        photo: String
    }

    input ProductInput {
        name: String,
        price: Float,
        photo: String
    }

    type Query {
        allProducts: [Product],
        getProductById(_id: ID): Product
    }

    type Mutation {
        createProduct(data: ProductInput): ID
        updateProduct(_id: ID!, data: ProductInput): Product
        deleteProduct(_id: ID): Product
    }
`);

export default schema;