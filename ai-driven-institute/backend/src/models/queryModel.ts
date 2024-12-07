import mongoose, { Schema } from "mongoose";

const querySchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
        // unique: true,
    },
    queryDetails: {
        querySubject: { type: String, default: null },
        query: { type: String, default: null },
        date: { type: String, default: null },
        status: { type: String, default: "pending" },
    },

})

const Query = mongoose.model("Query", querySchema);
export default Query;