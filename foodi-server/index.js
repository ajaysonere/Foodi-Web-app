import expres from 'express';
import cors from 'cors';
import connection from './config/dbconfig.js';

const app = expres();

const PORT = 5100;


// middleware 

app.use(cors());
app.use(expres.json());


app.get("/" , (req ,res) => {
   res.send("Hello World Form Docker");
});


app.listen(PORT ,() => {
   connection();
   console.log("App is listing on : 5100");
});