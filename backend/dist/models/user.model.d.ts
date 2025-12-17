import mongoose from "mongoose";
export declare const User: mongoose.Model<{
    name: string;
    email: string;
    imageUrl: string;
    clerkId: string;
    address: mongoose.Types.DocumentArray<{
        label: string;
        fullName: string;
        streetAddress: string;
        city: string;
        state: string;
        phoneNumber: string;
        zipCode: string;
        isDefault: string;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        label: string;
        fullName: string;
        streetAddress: string;
        city: string;
        state: string;
        phoneNumber: string;
        zipCode: string;
        isDefault: string;
    }> & {
        label: string;
        fullName: string;
        streetAddress: string;
        city: string;
        state: string;
        phoneNumber: string;
        zipCode: string;
        isDefault: string;
    }>;
    wishlist: mongoose.Types.ObjectId[];
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    name: string;
    email: string;
    imageUrl: string;
    clerkId: string;
    address: mongoose.Types.DocumentArray<{
        label: string;
        fullName: string;
        streetAddress: string;
        city: string;
        state: string;
        phoneNumber: string;
        zipCode: string;
        isDefault: string;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        label: string;
        fullName: string;
        streetAddress: string;
        city: string;
        state: string;
        phoneNumber: string;
        zipCode: string;
        isDefault: string;
    }> & {
        label: string;
        fullName: string;
        streetAddress: string;
        city: string;
        state: string;
        phoneNumber: string;
        zipCode: string;
        isDefault: string;
    }>;
    wishlist: mongoose.Types.ObjectId[];
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    name: string;
    email: string;
    imageUrl: string;
    clerkId: string;
    address: mongoose.Types.DocumentArray<{
        label: string;
        fullName: string;
        streetAddress: string;
        city: string;
        state: string;
        phoneNumber: string;
        zipCode: string;
        isDefault: string;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        label: string;
        fullName: string;
        streetAddress: string;
        city: string;
        state: string;
        phoneNumber: string;
        zipCode: string;
        isDefault: string;
    }> & {
        label: string;
        fullName: string;
        streetAddress: string;
        city: string;
        state: string;
        phoneNumber: string;
        zipCode: string;
        isDefault: string;
    }>;
    wishlist: mongoose.Types.ObjectId[];
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    name: string;
    email: string;
    imageUrl: string;
    clerkId: string;
    address: mongoose.Types.DocumentArray<{
        label: string;
        fullName: string;
        streetAddress: string;
        city: string;
        state: string;
        phoneNumber: string;
        zipCode: string;
        isDefault: string;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        label: string;
        fullName: string;
        streetAddress: string;
        city: string;
        state: string;
        phoneNumber: string;
        zipCode: string;
        isDefault: string;
    }> & {
        label: string;
        fullName: string;
        streetAddress: string;
        city: string;
        state: string;
        phoneNumber: string;
        zipCode: string;
        isDefault: string;
    }>;
    wishlist: mongoose.Types.ObjectId[];
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    name: string;
    email: string;
    imageUrl: string;
    clerkId: string;
    address: mongoose.Types.DocumentArray<{
        label: string;
        fullName: string;
        streetAddress: string;
        city: string;
        state: string;
        phoneNumber: string;
        zipCode: string;
        isDefault: string;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        label: string;
        fullName: string;
        streetAddress: string;
        city: string;
        state: string;
        phoneNumber: string;
        zipCode: string;
        isDefault: string;
    }> & {
        label: string;
        fullName: string;
        streetAddress: string;
        city: string;
        state: string;
        phoneNumber: string;
        zipCode: string;
        isDefault: string;
    }>;
    wishlist: mongoose.Types.ObjectId[];
} & mongoose.DefaultTimestampProps, {
    id: string;
}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>> & Omit<{
    name: string;
    email: string;
    imageUrl: string;
    clerkId: string;
    address: mongoose.Types.DocumentArray<{
        label: string;
        fullName: string;
        streetAddress: string;
        city: string;
        state: string;
        phoneNumber: string;
        zipCode: string;
        isDefault: string;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        label: string;
        fullName: string;
        streetAddress: string;
        city: string;
        state: string;
        phoneNumber: string;
        zipCode: string;
        isDefault: string;
    }> & {
        label: string;
        fullName: string;
        streetAddress: string;
        city: string;
        state: string;
        phoneNumber: string;
        zipCode: string;
        isDefault: string;
    }>;
    wishlist: mongoose.Types.ObjectId[];
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        name: string;
        email: string;
        imageUrl: string;
        clerkId: string;
        address: mongoose.Types.DocumentArray<{
            label: string;
            fullName: string;
            streetAddress: string;
            city: string;
            state: string;
            phoneNumber: string;
            zipCode: string;
            isDefault: string;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            label: string;
            fullName: string;
            streetAddress: string;
            city: string;
            state: string;
            phoneNumber: string;
            zipCode: string;
            isDefault: string;
        }> & {
            label: string;
            fullName: string;
            streetAddress: string;
            city: string;
            state: string;
            phoneNumber: string;
            zipCode: string;
            isDefault: string;
        }>;
        wishlist: mongoose.Types.ObjectId[];
    } & mongoose.DefaultTimestampProps, {
        id: string;
    }, mongoose.ResolveSchemaOptions<{
        timestamps: true;
    }>> & Omit<{
        name: string;
        email: string;
        imageUrl: string;
        clerkId: string;
        address: mongoose.Types.DocumentArray<{
            label: string;
            fullName: string;
            streetAddress: string;
            city: string;
            state: string;
            phoneNumber: string;
            zipCode: string;
            isDefault: string;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            label: string;
            fullName: string;
            streetAddress: string;
            city: string;
            state: string;
            phoneNumber: string;
            zipCode: string;
            isDefault: string;
        }> & {
            label: string;
            fullName: string;
            streetAddress: string;
            city: string;
            state: string;
            phoneNumber: string;
            zipCode: string;
            isDefault: string;
        }>;
        wishlist: mongoose.Types.ObjectId[];
    } & mongoose.DefaultTimestampProps & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    name: string;
    email: string;
    imageUrl: string;
    clerkId: string;
    address: mongoose.Types.DocumentArray<{
        label: string;
        fullName: string;
        streetAddress: string;
        city: string;
        state: string;
        phoneNumber: string;
        zipCode: string;
        isDefault: string;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        label: string;
        fullName: string;
        streetAddress: string;
        city: string;
        state: string;
        phoneNumber: string;
        zipCode: string;
        isDefault: string;
    }> & {
        label: string;
        fullName: string;
        streetAddress: string;
        city: string;
        state: string;
        phoneNumber: string;
        zipCode: string;
        isDefault: string;
    }>;
    wishlist: mongoose.Types.ObjectId[];
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    name: string;
    email: string;
    imageUrl: string;
    clerkId: string;
    address: mongoose.Types.DocumentArray<{
        label: string;
        fullName: string;
        streetAddress: string;
        city: string;
        state: string;
        phoneNumber: string;
        zipCode: string;
        isDefault: string;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        label: string;
        fullName: string;
        streetAddress: string;
        city: string;
        state: string;
        phoneNumber: string;
        zipCode: string;
        isDefault: string;
    }> & {
        label: string;
        fullName: string;
        streetAddress: string;
        city: string;
        state: string;
        phoneNumber: string;
        zipCode: string;
        isDefault: string;
    }>;
    wishlist: mongoose.Types.ObjectId[];
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=user.model.d.ts.map