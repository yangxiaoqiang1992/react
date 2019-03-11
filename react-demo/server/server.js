// import api from '../src/api/api'
var express = require('express')
var app = express()
app.use('/static',express.static('src/static'))  //使用静态资源

app.all('*',function(req,res,next){
      res.header("Access-Control-Allow-Credentials", true)
      res.header("Access-Control-Allow-Origin", "*")
      res.header("Access-Control-Allow-Headers", "X-Requested-With")
      res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
      res.header("X-Powered-By", ' 3.2.1')
      res.header("Content-Type", "application/json;charset=utf-8")
      next()
})
app.get('/',function(req,res){
    // console.log(req)
    // console.log(res)
    res.send('hello')
})
app.post('/login',function(req,res){
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