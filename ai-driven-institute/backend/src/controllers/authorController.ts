import { NextFunction, Request, Response } from "express";
import Author from "../models/authorModel";
import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";
import createHttpError from "http-errors";
import { config } from "../config/config";
import { IAuthor } from "../utils/authorType";
import { AuthRequest } from "../middlewares/authentication";

export const authorController = {
  registerAuthor: async (req: Request, res: Response, next: NextFunction) => {
    const { name, email, password } = req.body;
    try {
      // Check if the email is already registered
      try {
        const existingAuthor = await Author.findOne({ email });
        if (existingAuthor) {
          return res.status(409).json({ message: "Email already in use" });
        }
      } catch (err) {
        return next(
          createHttpError(500, `Error while registering author,${err}`)
        );
      }

      // Store the author in database
      let newAuthor;
      try {
        // Hash the pasword

        const hashedPassword = await bcrypt.hash(password, 10);
        newAuthor = await Author.create({
          name,
          email,
          password: hashedPassword,
          authProvider: "email"
        });
      } catch (err) {
        return next(
          createHttpError(500, `Error while registering author,${err}`)
        );
      }

      // Generate a JWT Token
      try {
        const token = sign(
          {
            sub: newAuthor._id,
            email: newAuthor.email,
          },
          config.jwtSecret as string,
          {
            algorithm: "HS256",
            expiresIn: "7d",
          }
        );

        res.status(201).json({access_token: token, message: "Registration successful"});

      } catch (err) {
        return next(
          createHttpError(500, `Error while registering author,${err}`)
        );
      }
    } catch (err) {
      console.error("Something went wrong", err);
    }
  },

  loginAuthor: async(req: Request, res: Response, next: NextFunction) => {
    try{
        const {email,password} = req.body
        // Check if the author exists
        const authorExists = await Author.findOne({email}) as IAuthor;

        if(!authorExists){
            return next(createHttpError(404,"Author doesn't exists"))
        }

        // Check if the password is correct
        const isPasswordMatch = await bcrypt.compare(password,authorExists.password);

        if(!isPasswordMatch){
            return next(createHttpError(401,"Invalid credentials"))
        }

        // Generate JWT Token
        const token = sign({
            sub: authorExists._id,
            email: authorExists.email
        },
        config.jwtSecret as string,
        {
            algorithm:"HS256",
            expiresIn:"7d"
        }
    )

    res.status(200).json({
        access_token:token,
        message:"Login successful"
    })

    }catch(err){
        return next(createHttpError(500, `Error while logging author,${err}`));
    }
  },

  // googleAuth: async(req: Request, res: Response, next: NextFunction)=>{

  // },
  getAllBooks: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const _req = req as AuthRequest;
      console.log("Get book id: ", _req.userID);
  
      // Find the author by the userID and populate the books array
      const author = await Author.findById(_req.userID).populate({
        path:'books',
        populate:{
          path:'author',
          select:'name'
        }
      });
  
      // Check if the author exists
      if (!author) {
        return next(createHttpError(404, "Author not found"));
      }
  
      // Return the books array only
      res.json(author.books);  // This will send the array of books
  
    } catch (err) {
      console.error("Error occurred while getting books", err);
      next(createHttpError(500, "Error occurred while getting books"));
    }
  }
  ,
};
