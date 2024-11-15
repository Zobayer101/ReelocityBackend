const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
const route = require("./server/routes/routes");

dotenv.config();
const port = process.env.port || 8800;
app.use(cors({ origin: "*" }));
app.use(express.json());

app.use("/route", route);

app.use((err, req, res, next) => {
    if (err) {
        res.json(err);
    }
})

app.listen(port, () => {
  console.log(`server run on http//localhost:${port}`);
});
