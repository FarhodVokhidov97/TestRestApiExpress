import  express  from "express";
import bodyParser from "body-parser";
import ServerlessHttp from "serverless-http";


const app = express();
const port = 8080;
app.use(bodyParser.json())
const data = [
    {name: 'Farhod', surname:'Vohidov'},
    {name: 'Odil', surname:'Norqulov'}
]

app.get('/getAllusers',(req,res)=>{
    res.json(data)
})
app.post('/addnewusers',(req,res)=>{
    data.push(req.body);
    res.send('Malumotla qoshildi')
})

export const handler = ServerlessHttp(app)