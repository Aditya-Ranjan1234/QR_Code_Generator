import express from "express";
import bodyParser from "body-parser";
import qr from "qr-image";
import fs from "fs";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(express.static('styles'));

const express = require("express"); const app = express(); app.get("/", (req, res) => { res.send("Express on Vercel"); }); const PORT = process.env.PORT || 5000; app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`); });

let qrURL = "";

function generateQRCode() {
  if (qrURL) {
    const qr_png = qr.imageSync(qrURL, { type: "png" });
    fs.writeFileSync("public/qr_img.png", qr_png);

    fs.writeFile("public/URL.txt", qrURL, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  }
}

app.get("/", (req, res) => {
  res.render("index.ejs", { qrURL: qrURL });
});

app.get("/qr_img.png", (req, res) => {
  res.sendFile(`${__dirname}/public/qr_img.png`);
});

app.post("/submit", (req, res) => {
  qrURL = req.body.URL;
  generateQRCode();
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
