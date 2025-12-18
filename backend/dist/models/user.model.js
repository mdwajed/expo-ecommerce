import mongoose, { Schema } from "mongoose";
const addressSchema = new Schema({
    label: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    streetAddress: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    zipCode: {
        type: String,
        required: true
    },
    isDefault: {
        type: String,
        default: false
    },
});
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    name: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    clerkId: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    address: [addressSchema],
    wishlist: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
        }
    ],
}, {
    timestamps: true
});
export const User = mongoose.model("User", userSchema);
//# sourceMappingURL=user.model.js.map