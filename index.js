const express = require('express');
const path = require('path');
const exphbs = require("express-handlebars");
const PORT = process.env.PORT || 5000;

express()

    .use(express.static(path.join(__dirname, 'public'))) //declaramos estático el contenido de una carpeta public

    .set('views', path.join(__dirname, 'views')) //declaramos estático el contenido de una carpeta views

    .engine("handlebars", exphbs.engine({
        defaultLayout: "main",
        layoutsDir: `${__dirname}/views/mainLayout`,
    })) //para el motor de plantilla handlebars
    
    .set("view engine", "handlebars") //configuración de renderizado

    .get('/', (req, res) => res.render('index')) //ruta

    .listen(PORT, () => console.log(`Listening on ${PORT}`)); //puerto
