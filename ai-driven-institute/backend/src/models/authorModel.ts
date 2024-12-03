import mongoose, {Schema} from "mongoose"
import { IAuthor } from "../utils/authorType";


const authorSchema = new Schema<IAuthor>({
   
    email: {
        type: String,
        required: true,
        unique: true,
        index: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address']
    },
    password: {
        type: String,
       minlength: 8,
       required: true,
    },
}, {
    timestamps: true
})
const Author = mongoose.model<IAuthor>("Author",authorSchema)

export default Author;