import express from 'express';
import {register} from "../controllers/authControllers.js";
import {login} from "../controllers/authControllers.js";
import checkUser from '../middlewares/authMiddleware.js';

export const router = express.Router();

router.post("/", checkUser); 
router.post("/register", register);
router.post("/login", login);



export default router;
