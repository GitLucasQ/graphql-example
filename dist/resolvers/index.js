"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolvers = void 0;

var _ProductService = require("../services/ProductService");

var productService = new _ProductService.ProductService();
var resolvers = {
  allProducts: productService.getAllProducts(),
  getProductById: function getProductById(_id) {
    return productService.getProductById(_id);
  },
  createProduct: function createProduct(data) {
    return productService.createNewProduct(data.data);
  },
  updateProduct: function updateProduct(_id, data) {
    return productService.updateProduct(_id._id, data.data);
  },
  deleteProduct: function deleteProduct(_id) {
    return productService["delete"](_id._id);
  }
};
exports.resolvers = resolvers;