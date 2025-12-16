import express from 'express';
import path from "path";
import { env } from "./config/env.js";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/api/health', (req, res) => {
    res.status(200).json({ message: "Success" });
});
const __dirname = path.resolve();
if (env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../admin/dist")));
    app.get("/{*any}", (req, res) => {
        res.sendFile(path.join(__dirname, "../admin", "dist", "index.html"));
    });
}
app.listen(env.PORT, () => console.log('Server started on port 3000'));
//# sourceMappingURL=server.js.map