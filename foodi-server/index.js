import expres from 'express';

const app = expres();

app.get("/" , (req ,res) => {
   res.send("Hello World Form Docker");
});

app.listen(5100 ,() => {
   console.log("App is listing on : 5100");
})