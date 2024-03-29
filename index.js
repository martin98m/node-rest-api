require("dotenv").config();

const express = require("express");

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

const gallery_route = require("./routes/Gallery");
const images_route = require("./routes/Images");
const auth_route = require("./routes/Auth");
const article_route = require("./routes/Article");

app.use("/gallery", gallery_route);
app.use("/images", images_route);
app.use("/article", article_route);
app.use("/", auth_route);

//server start
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
