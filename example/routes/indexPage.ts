import { Router } from "express";
import { responseWrap } from "@/utils/responseWrap";

export const router = Router();


router.get("/api/index", responseWrap(async () => {
  return true;
}));