import { ProductService } from "../services/ProductService";

const productService = new ProductService();

export const resolvers = {
    allProducts: productService.getAllProducts(),
    getProductById: (_id) => productService.getProductById(_id),
    createProduct: (data) => productService.createNewProduct(data.data),
    updateProduct: (_id, data) => productService.updateProduct(_id._id, data.data),
    deleteProduct: (_id) => productService.delete(_id._id)
}
