import  express  from "express";

const app = express();

app.get('/',(req,res)=>{
    res.json({
        message:"backend"
    })
})

app.listen(3000);