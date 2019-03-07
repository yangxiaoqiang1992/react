var express = require('express')
var app = express()
app.get('/',function(req,res){
    console.log(req)
    console.log(res)
    res.send('hello')
})
app.listen(8080,(error)=>{
    if(error){

    }else{
        console.log('the server is started in 8080')
    }
})