import {config as con} from "dotenv"
con()

const _config = {
    port: process.env.PORT,
    databaseUrl: process.env.MONGO_CONNECTION_URL,
    env:process.env.NODE_ENV,
    jwtSecret: process.env.JWT_SECRET,
    stripeSecretKey: process.env.STRIPE_SECRET_KEY,
    // cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME,
    // cloudinaryApiKey: process.env.CLOUDINARY_API_KEY,
    // cloudinaryApiSecret: process.env.CLOUDINARY_API_SECRET
}

export const config = Object.freeze(_config);