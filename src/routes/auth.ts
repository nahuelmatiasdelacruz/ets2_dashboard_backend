import {Router} from "express";
import {loginController} from "../controllers";
const router: Router = Router();

router.get("/login",loginController);

export default router;