import { Router } from "express";
import { authorController } from "../controllers/authorController";
import { validateUserCredentials } from "../utils/validationSchema";
import validateRequest from "../middlewares/validateRequest";
import { authentication } from "../middlewares/authentication";

const router = Router();

router.post("/register",
    validateUserCredentials,
    validateRequest,
    authorController.registerAuthor);


router.post("/login",
    authorController.loginAuthor
)

router.get("/books", 
    authentication,
    authorController.getAllBooks);
export default router;