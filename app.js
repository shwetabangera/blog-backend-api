const express = require("express");
const dotenv = require("dotenv");
const blogRoute = require("./routes/blogRoutes.js");
dotenv.config({
	path: `${__dirname}/config.env`,
});
const app = express();
app.use(express.json());
app.use("/blogs", blogRoute);
app.listen(process.env.PORT, () => {
	console.log(`Server started at PORT ${process.env.PORT}`);
});
