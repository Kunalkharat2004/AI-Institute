import mongoose, { Schema } from "mongoose";

const feedBackSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true,
    },
    feedbackDetails: {
        feedback: { type: String, default: null },
        date: { type: String, default: null },
    },
});

const Feedback = mongoose.model("Feedback", feedBackSchema);
export default Feedback;