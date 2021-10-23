const express = require('express')
const app = express();
const port = 5000;
const cors = require('cors')

app.use(cors())
/* for reciving data */
app.use(express.json())

const users = [
    {id : 0,name: 'afzal',address: 'sharighat', email: 'afzal@gmail.com'},
    {id : 1,name: 'rudro',address: 'foridput', email: 'rudro@gmail.com'},
    {id : 2,name: 'sumon',address: 'jaflong', email: 'sumon@gmail.com'},
]

/* server site */
app.get('/',(req,res)=>{
    res.send('Welcome to Home page of the server site program')
    console.log('hello world from server site')
})
app.get('/users',(req,res)=>{
    res.send(users)
    console.log('hello world from server site')
})
// app.get('/users/:id',(req,res)=>{
//     const userId = req.params
//     const requestedUser = users[userId];
//     res.send(requestedUser)
//     console.log('hello world from server site')
// })

/* reciving data from client side */
app.post('/users',(req,res)=>{
    console.log(req.body)
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    res.json(newUser)
})

app.listen(port,()=>{
    console.log('listening to the port ', port)
})

