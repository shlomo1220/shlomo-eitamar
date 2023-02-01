const express = require("express");
const path = require("path");
const http = require("http");

const {routesInit} = require("./routes/configRoutes")
// require("./db/mongoConnect")

// app -> מכיל את כל היכולות של האקספרס
const app = express();

// נותן את האפשרות לשלוח באדי מצד לקוח בבקשות 
// POST AND PUT
app.use(express.json());
// מגדיר את תקיית פאבליק כתקייה סטטית שמה שנמצא בה 
// יהיה חשוף לצד לקוח כגון תמונות
app.use(express.static(path.join(__dirname,"public")));
// פונקציה שמגדירה את כל הראוטים הזמינים באפליקציית
// צד שרת שלנו
routesInit(app);


// השרת מקבל את היכולות של האקספרס מהאפ
const server = http.createServer(app);

let port = process.env.PORT || 3001;
server.listen(port);