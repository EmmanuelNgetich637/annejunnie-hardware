require("dotenv").config();
const express = require("express");
const cors = require("cors");
const productRoutes = require("./routes/productRoutes");

const app = expresa();
const Port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes);

app.get("/", (req, res) => res.send("Annejunnie Backend Running"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
