import express from 'express'
import OrderController  from '../Controller/OrderController.js';
import verifyToken from '../Middleware/VerifyToken.js';
import userRouter from './UserRouter.js';


const OrderRouter = express.Router();


OrderRouter.route('/orders').get(OrderController.getAllOrders);
OrderRouter.route('/orders/:id').get(OrderController.getOrderById);
OrderRouter.route('/orders').post(OrderController.createOrder);


export default OrderRouter;