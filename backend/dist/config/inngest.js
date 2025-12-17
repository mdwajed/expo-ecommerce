import { Inngest } from "inngest";
import { connectDb } from "./db.js";
import { User } from "../models/user.model.js";
export const inngest = new Inngest({ id: "ecommerce-app" });
// Your new function:
const syncUser = inngest.createFunction({ id: "sync-user" }, { event: "clerk/user.created" }, async ({ event }) => {
    try {
        console.log("SyncUser Event:", event);
        if (!event?.data) {
            console.error("Event data missing!");
            return;
        }
        await connectDb();
        const { id, email_address, first_name, last_name, image_url } = event.data;
        const newUser = {
            clerkId: id,
            name: `${first_name || ""} ${last_name || ""}`.trim() || "User",
            email: email_address,
            image_url,
            address: [],
            wishlist: [],
        };
        await User.create(newUser);
        console.log("User created successfully:", newUser);
    }
    catch (err) {
        console.error("Error in syncUser:", err);
        throw err; // propagate so Inngest logs the failure
    }
});
const deleteFromDB = inngest.createFunction({ id: "delete_user_from_db" }, { event: "clerk/user.deleted" }, async ({ event }) => {
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
    }
    catch (err) {
        console.error("Error in deleteFromDB:", err);
        throw err;
    }
});
// Add the function to the exported array:
export const functions = [
    syncUser,
    deleteFromDB
];
//# sourceMappingURL=inngest.js.map