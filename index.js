const express = require('express');

const router = require('express').Router()
const app = express();

const users = [
    {
        name: "irwan",
        email: "email2@gmail.com",
        password: "1234"
    },
]


router.post("/user", function(req, res) {

    const userBody = {
        name : req.body.name,
        email : req.body.email,
        password : req.body.password
    }
    users.push(userBody)
    console.log(users)
    res.send({message : "user berhasil ditambahkan"})  
})

router.post("/user/login", function(req, res) {
    const cekEmail = users.filter((user) => user.email == req.body.email)
    console.log(cekEmail)

    if(cekEmail.length == 0) {
        return res.status(401).send("data user tidak tersedia")
    }

    const cekPassword = cekEmail[0].password == req.body.password

    if(!cekPassword) {
        return res.status(401).send("password salah")
    }

    res.sendStatus(200)

})

app.use(express.json());
app.use(router);

module.exports = app.listen(8080, () => {
    console.log('Http server start on port 8080')
})