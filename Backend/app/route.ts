import { Router } from "express";
import userRoutes from "./auth/auth.route";
const router = Router();

router.use("/auth", userRoutes);

export default router;
