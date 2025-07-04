import mongoose, { version } from "mongoose";

const doctors = mongoose.model("doctors",
    mongoose.Schema(
        {
            Name: String,
            Field: String,
            Phno: Number,
        },
        {
            versionKey: false
        }
    )
);

export default doctors;
