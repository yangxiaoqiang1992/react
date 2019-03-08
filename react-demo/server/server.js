// import api from '../src/api/api'
var express = require('express')
var app = express()

app.get('/',function(req,res){
    // console.log(req)
    // console.log(res)
    res.send('hello')
})
app.get('/login',function(req,res){
    debugger
    res.json({
        status:'200',
        data:'ok'
    })
    res.send("success")
})
app.listen(8090,(error)=>{
    if(error){

    }else{
        console.log('the server is started in 8090')
    }
})