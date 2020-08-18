const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
const port = 3030;
app.listen(port, () => {
  console.log(`BACKEND RODANDO ${port}`);
});
