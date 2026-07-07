import Express = require("express");
import clientsRouter = require("./router/clients");

const app = Express();

app.use(clientsRouter);
app.set('view engine', 'pug');
app.set('views', './views');

app.listen(3000, () =>{
    console.log("Servidor criado...")
});