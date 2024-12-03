import { Router } from "express";
import { authentication } from "../middlewares/authentication";
import institutionController from "../controllers/institutionController";

const router = Router()

router.post("/institute-details",
    authentication,
    institutionController.instituteDetails
)

router.post("/institute-trust",
    authentication,
    institutionController.instituteTrust
)

router.post("/institute-registrationSPOC",
    authentication,
    institutionController.registrationSPOC)

router.post("/institute-instituteInfo",
    authentication,
    institutionController.instituteInfo
)

router.post("/institute-financialManagement",
    authentication,
    institutionController.financialManagement
)

export default router;