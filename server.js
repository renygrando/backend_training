const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const sites = require("./data")

server.use(express.static("public"))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false, 
    noCache: true
})

server.get("/", function(req, res){
    const data = {
        avatar_url: "https://github.com/renygrando/rocketseat-launchbase/blob/master/html-css/assets/logo_rocketseat.jpg?raw=true",
        name: "Rocketseat",
        description: "As melhores tecnologias em programação, direto ao ponto e do jeito certo.",
        sub_description: "HTML | CSS | Javascript | ReactJs | AngularJs"
    }
    return res.render("about", { about: data})
})

server.get("/courses", function(req, res){

    return res.render("courses", { items: sites })
})

server.get("/courses/:id", function(req, res) {
    const id = req.params.id;
    
    const site = sites.find(function(site){
        return site.id == id
    })
    if(!site){
        return res.send("Site não encontrado")
    }
    return res.render("course", { items: site })
  })

server.use(function(req, res) {
    res.status(404).render("not-found");
  });

server.listen(5000, function() {
    console.log("server is running")
})