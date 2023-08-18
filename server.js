const express = require("express")

const app = express();

//declare route
app.get('/',(req,res)=>{
    res.send('put set api to client')
})
app.listen(3000,()=>{
    console.log("hello the api on is running on port ");
})
