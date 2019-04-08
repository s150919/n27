class Auto {
    constructor() {
        this.Raeder;
        this.Sitze;
    }
}

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.set('views', 'Training')

const server = app.listen(process.env.PORT || 3000, () => {
    console.log('Server lauscht auf Port %s', server.address().port)    
})

// Wenn localhost:3000/klasse-objekt-ejs-trainieren aufgerufen wird ...

app.get('/klasse-objekt-ejs-trainieren',(req, res, next) => {   

    // ... wird klasse-objekt-ejs-trainieren.ejs gerendert:

    res.render('klasse-objekt-ejs-trainieren', {             
    })
})

let auto = new Auto()
auto.Raeder = 4
auto.Sitze = 1

let auto2 = new Auto()

auto2.Raeder = 7
auto2.Sitze = auto.Sitze

console.log(auto)

