import * as admin from "firebase-admin";
import serviceAccountKey from "./ebook-fe8ff-firebase-adminsdk-74nyb-5e1fb39d41.json";

const serviceAccount = serviceAccountKey as admin.ServiceAccount;

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
})

export default admin;