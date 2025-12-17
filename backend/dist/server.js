import express from 'express';
import path from "path";
import { env } from "./config/env.js";
import { connectDb } from "./config/db.js";
import { clerkMiddleware } from '@clerk/express';
import { serve } from 'inngest/express';
import { inngest, functions } from "./config/inngest.js";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(clerkMiddleware());
const __dirname = path.resolve();
app.use("/api/inngest", serve({ client: inngest, functions }));
app.get('/api/health', (req, res) => {
    res.status(200).json({ message: "Success" });
});
if (env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../admin/dist")));
    app.get("/{*any}", (req, res) => {
        res.sendFile(path.join(__dirname, "../admin", "dist", "index.html"));
    });
}
const startServer = async () => {
    await connectDb();
    app.listen(env.PORT, () => {
        console.log('Server started on port 3000');
    });
};
startServer();
export default app;
//# sourceMappingURL=server.js.map