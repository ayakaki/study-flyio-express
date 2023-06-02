const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
 res.send("Hello Express!");
});

app.listen(port, () => console.log(`fly-node app listening on port ${port}!`));