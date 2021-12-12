const app = require('express')();
const PORT = 8088;

app.listen(
    PORT,
    () => console.log("it's alive on http://localhost:"+ PORT)
)

app.get('/pokemon', (req,res) => {
    let pokemon = []
    for(let i=0;i <= 9;i++) {
        pokemon.push(i)
    }




    res.status(200).send({
        tshirt: pokemon
    })
})
