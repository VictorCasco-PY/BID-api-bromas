const express = require("express");
const app = express();
const port = 8000;

require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

app.listen(port, () => console.log(`Connect on port: ${port}`));
