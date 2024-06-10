import express from 'express'
import ProductController  from '../Controller/ProductController.js';
import verifyToken from '../Middleware/VerifyToken.js';
import userRouter from './UserRouter.js';


const productRouter = express.Router();

productRouter.route('/').get(ProductController.home);
productRouter.route('/addProduct').post(ProductController.addProduct);
productRouter.route('/viewAllProduct').get(ProductController.viewAllProduct);
productRouter.route('/viewOneProduct/:id').get(ProductController.viewOneProduct);
productRouter.route('/updateProduct/:id').put(ProductController.updateProduct);
productRouter.route('/deleteProduct/:id').delete(ProductController.deleteProduct);

export default productRouter;