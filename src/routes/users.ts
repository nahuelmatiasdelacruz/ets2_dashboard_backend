import {Router, Request,Response} from "express";

const router: Router = Router();

router.get("/",(req: Request,res: Response)=>{res.json({msg: "User data"})});

export default router;