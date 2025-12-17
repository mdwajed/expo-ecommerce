import { Inngest } from "inngest";
import { connectDb } from "./db.js";
import { User } from "../models/user.model.js";
export const inngest = new Inngest({ id: "ecommerce-app" });
// Your new function:
const syncUser = inngest.createFunction({ id: "sync-user" }, { event: "clerk/user.created" }, async ({ event }) => {
    await connectDb();
    const { id, email_address, first_name, last_name, image_url } = event.data;
    const newUser = {
        clerkId: id,
        name: `${first_name || ""} ${last_name || ""}` || "User",
        email: email_address[0]?.email_address,
        image_url: image_url,
        address: [],
        wishlist: [],
    };
    await User.create(newUser);
});
const deleteFromDB = inngest.createFunction({ id: "delete_user_from_db" }, { event: "clerk/user.deleted" }, async ({ event }) => {
    await connectDb();
    const { id } = event.data;
    await User.deleteOne({ clerkId: id });
});
// Add the function to the exported array:
export const functions = [
    syncUser,
    deleteFromDB
];
//# sourceMappingURL=inngest.js.map