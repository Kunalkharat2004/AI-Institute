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

router.post("/institute-instituteData",
    authentication,
    institutionController.instituteData
)

// GET Requests
router.get("/institute-details",
    authentication,
    institutionController.getInstituteDetails
)

router.get("/institute-trust",
    authentication,
    institutionController.getInstituteTrust
)

router.get("/institute-registrationSPOC",
    authentication,
    institutionController.getRegistrationSPOC
)

router.get("/institute-instituteInfo",
    authentication,
    institutionController.getInstituteInfo
)

router.get("/institute-financialManagement",
    authentication,
    institutionController.getFinancialManagement
)

router.get("/institute-instituteData",
    authentication,
    institutionController.getInstituteData
)



export default router;