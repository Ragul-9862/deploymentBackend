import { Router } from "express";
import { getUsers, createUser } from "../controllers/user.controller";
// import { authMiddleware } from "../middleware/auth.middleware";

const router = Router();

router.get("/",  getUsers);
router.post("/addUsers", createUser);

export default router;
