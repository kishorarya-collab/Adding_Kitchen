const express = require("express")
const app = express()
const path = require("path")
const port = 3000

require("./db/connect")
const Register = require("./db/connect")

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.set("view engine", "ejs")
app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.render('home')
})


app.get('/registration',(req,res)=>{
    res.render('registration')
})

app.get('/userdata',(req,res)=>{
    Register.find({},function(err,registers){
        res.render('userdata',{
            data:registers
        })
    })
})

app.post('/registration', async (req, res) => {
    try {
            const dets = new Register({
                // image:req.file.upimage,
                ownername: req.body.ownername,
                address: req.body.address,
                kitchenname: req.body.kitchenname,
                email: req.body.email,
                Fssaino: req.body.Fssaino,
                phone: req.body.phone,
                preptime: req.body.preptime,
                food: req.body.food,
                breakfastfrom: req.body.breakfastfrom,
                lunchfrom: req.body.lunchfrom,
                highteafrom: req.body.highteafrom,
                dinnerfrom: req.body.dinnerfrom,
                breakfastto: req.body.breakfastto,
                lunchto: req.body.lunchto,
                highteagto: req.body.highteagto,
                dinnerto: req.body.dinnerto
            })

            const registered = await dets.save();
            res.render('userdata')
    
    }
    catch (error) {
        res.status(400).send(error);
    }
})



app.listen(port, () => {
    console.log(`server is running at ${port}`);
})