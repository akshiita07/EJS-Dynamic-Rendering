//1. npm init
//2. npm i express
//3. npm install ejs
// in package.json type:module

import express from 'express';
import ejs from 'ejs';
const app = express();
const port = 3000;

//JS object to send
const data={
    title:"EJS Tags",
    sec:new Date().getSeconds(),
    items:["C","Python","Java"],
    htmlContent:"<em>This is em html text,</em>"
    //also add footer
}

app.get('/', (req, res) => {
    res.render("index.ejs",data);
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})