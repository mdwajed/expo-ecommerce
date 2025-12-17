import { Inngest } from "inngest";
import {connectDb} from "./db.js";
import {User} from "../models/user.model.js";
import {env} from "./env.js";

export const inngest = new Inngest({ id: "ecommerce-app",  signingKey: env.INGEST_SIGNING_KEY,  });

// Your new function:
const syncUser = inngest.createFunction(
    { id: "sync-user" },
    { event: "clerk/user.created" },
    async ({ event }) => {
        try {
            console.log("SyncUser Event:", event);

            if (!event?.data) {
                console.error("Event data missing!");
                return;
            }

            await connectDb();

            const { id, email_addresses, first_name, last_name, image_url } = event.data;
            // const email = email_addresses?.[0]?.email_address;
            //
            // if (!email) {
            //     console.warn("User has no email, skipping creation", event.data.id);
            //     return;
            // }
            // const fullName = `${first_name || ""} ${last_name || ""}`.trim() || "User";
            // const newUser = {
            //     clerkId: id,
            //     name: fullName,
            //     email,
            //     imageUrl: image_url ?? `https://ui-avatars.com/api/?name=${encodeURIComponent(fullName)}`,
            //     address: [],
            //     wishlist: [],
            // }
            const fullName = `${first_name || ""} ${last_name || ""}`.trim() || "User";
            const userEmail = email_addresses?.[0]?.email_address ?? `no-email-${id}@example.com`;
            const userImageUrl = image_url ?? `https://ui-avatars.com/api/?name=${encodeURIComponent(fullName)}`;

            const newUser = {
                clerkId: id,
                name: fullName,
                email: userEmail,
                imageUrl: userImageUrl,
                address: [],
                wishlist: [],
            };

// Idempotent insert/update to avoid duplicates if event retried
            await User.findOneAndUpdate(
                { clerkId: id },
                { $setOnInsert: newUser },
                { upsert: true, new: true }
            );

            console.log("User created/updated successfully:", newUser);
            // await User.create(newUser);
            // console.log("User created successfully:", newUser);
        } catch (err) {
            console.error("Error in syncUser:", err);
            throw err; // propagate so Inngest logs the failure
        }
    }
);

const deleteFromDB = inngest.createFunction(
    { id: "delete_user_from_db" },
    { event: "clerk/user.deleted" },
    async ({ event }) => {
        try {
            console.log("DeleteUser Event:", event);

            if (!event?.data?.id) {
                console.error("Event data missing 'id'");
                return;
            }

            await connectDb();

            const { id } = event.data;
            await User.deleteOne({ clerkId: id });

            console.log("User deleted successfully:", id);
        } catch (err) {
            console.error("Error in deleteFromDB:", err);
            throw err;
        }
    }
);

// Add the function to the exported array:
export const functions = [
    syncUser,
    deleteFromDB
]