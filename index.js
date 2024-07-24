const express = require("express");
const app = express();
const path = require("path");
const ejsMate = require("ejs-mate");

app.use(express.static("public"));
app.use(express.static(path.join(__dirname,"/public/asset")));
app.use(express.static(path.join(__dirname,"/public/css")));
app.use(express.static(path.join(__dirname,"/public/js")));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.engine('ejs',ejsMate);

app.get("/",(req,res) => {
    res.render("listings/home.ejs");
})
app.get("/portfolio",(req,res) => {
    res.render("listings/home.ejs");
});
app.get("/about",(req,res) => {
    res.render("listings/about.ejs");
});
app.get("/skills",(req,res) => {
    res.render("listings/skills.ejs");
});
app.get("/education",(req,res) => {
    res.render("listings/education.ejs");
});
app.get("/projects",(req,res) => {
    res.render("listings/projects.ejs");
});
app.get("/certificate",(req,res) => {
    res.render("listings/certificate.ejs");
});
app.get("/contactme",(req,res) => {
    res.render("listings/contactme.ejs");
});
app.listen(8080,() => {
    console.log("Server is listening on port 8080");
});

