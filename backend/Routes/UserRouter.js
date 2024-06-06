import express from 'express'
import UserController  from '../Controller/UserController.js';
import verifyToken from '../Middleware/VerifyToken.js';


const userRouter = express.Router();


userRouter.route('/register').post(UserController.createUser);
userRouter.route('/login').post(UserController.loginUser);

export default userRouter;