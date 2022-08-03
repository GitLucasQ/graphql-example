"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _graphql = require("graphql");

var schema = (0, _graphql.buildSchema)("\n    type Product {\n        _id: ID!,\n        name: String,\n        price: Float,\n        photo: String\n    }\n\n    input ProductInput {\n        name: String,\n        price: Float,\n        photo: String\n    }\n\n    type Query {\n        allProducts: [Product],\n        getProductById(_id: ID): Product\n    }\n\n    type Mutation {\n        createProduct(data: ProductInput): ID\n        updateProduct(_id: ID!, data: ProductInput): Product\n        deleteProduct(_id: ID): Product\n    }\n");
var _default = schema;
exports["default"] = _default;