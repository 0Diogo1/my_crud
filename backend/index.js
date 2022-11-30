const express = require('express')
const cors = require('cors');
const port = 5000
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:false}))
//config json
app.use(bodyParser.json())

//config cors
app.use(cors({credentials:true, origin:"http://localhost:3000"}))

//import routes
const studentRoute = require('./routes/StudentRoutes')

//routes
app.use('/student', studentRoute)

app.listen(port, () =>{
    console.log(`Servidor on na porta ${port}`)
})


