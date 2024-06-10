import express from 'express'
import CustomerController  from '../Controller/CustomerController.js';
import verifyToken from '../Middleware/VerifyToken.js';
import userRouter from './UserRouter.js';


const customerRouter = express.Router();

customerRouter.route('/').get(CustomerController.home);
customerRouter.route('/addCustomer').post(CustomerController.addCustomer);
customerRouter.route('/viewAllCustomer').get(CustomerController.viewAllCustomer);
customerRouter.route('/viewOneCustomer/:id').get(CustomerController.viewOneCustomer);
customerRouter.route('/updateCustomer/:id').put(CustomerController.updateCustomer);
customerRouter.route('/deleteCustomer/:id').delete(CustomerController.deleteCustomer);

export default customerRouter;