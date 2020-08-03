const express = require ("express");
let app =express();

app.use(express.json());

var port = 4000;
app.listen(port,()=>{
    console.log(`app listening to port ${port}`);
});