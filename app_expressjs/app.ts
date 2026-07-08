import "dotenv-safe/config";
console.log(process.env.DB_NAME);
console.log(process.env.DB_USER);
console.log(process.env.DB_PASS);
console.log(process.env.DB_HOST);

import express  from "express";
import clientsRouter from "./router/clients.js"
import db from "./db.js"
 
const app = express();

app.use(express.urlencoded({extended: true}))
app.use(clientsRouter);
app.set('view engine', 'pug');
app.set('views', './views');

db.sync().then(() =>{
    console.log("Conectado com o Banco: " + process.env.DB_NAME)
}).then(() =>{
    app.listen(process.env.PORT, () =>{
    console.log("Servidor criado...")
    })
});

