// Modules
import express, { Express } from "express";
import appRoutes from "./routes/appRoutes";

const port = 4000;
const app: Express = express();
app.use("/app", appRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port} ....`);
});
