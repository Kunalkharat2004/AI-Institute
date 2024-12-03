import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import admin from "../config/firebase/firebaseAdminSDK";
import Author from "../models/authorModel";
import { sign } from "jsonwebtoken";
import { config } from "../config/config";

const verifyIdToken = async(token: string) =>{

    return admin.auth().verifyIdToken(token);
}

const authController = {
    googleAuth: async(req: Request, res: Response,next: NextFunction) => {
      

        try{
            const result = req.body;
            const token = result.id_token;
            // Verify firebase token
            const decodedToken = await verifyIdToken(token);
            const {uid,email,name} = decodedToken;

            console.log(`UID: ${uid}, Email: ${email}, Name: ${name}`);

            // Check  if the user exists in MongoDB database
            let author = await Author.findOne({email});

            // If author doesn't exists, create a new author
            if(!author){
                 author = await Author.create({
                    name,
                    email,
                    googleId: uid,
                    authProvider: "google"
                })
            }

            // Generate a JWT Token

            const jwtToken = sign({
                sub: author?._id,
                email: author?.email
            },
            config.jwtSecret as string,
            {
                algorithm: "HS256",
                expiresIn: "7d"
            }
        )

        res.status(200).json({
            access_token: jwtToken,
            message: "Google authentication successful"
        })
            
        }catch(err){
            console.error(err);
            return next(createHttpError(500,`Failed to authenticate with google`))
        }
        
    },
}

export default authController;