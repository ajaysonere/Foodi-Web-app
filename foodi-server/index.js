import expres from 'express';
import cors from 'cors';
import connection from './config/dbconfig.js';
import menuRouter from './routers/menuRouters.js';

const app = expres();

const PORT = 5100;


// middleware 

app.use(cors());
app.use(expres.json());

// routers
app.use("/api/v1" , menuRouter);



app.listen(PORT ,() => {
   connection();
   console.log("App is listing on : 5100");
});