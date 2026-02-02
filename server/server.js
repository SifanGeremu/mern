import express from "express";
import cors from "cors";
import record from "./routes/record.js";

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

app.use("/record", record);

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
