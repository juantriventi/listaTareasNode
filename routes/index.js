module.exports = (app) => {
   
let entries = [];
app.locals.entries = entries;

app.get("/" , (req, res) =>{
    res.render("index", {
        title:"inicio" 
    });
});

app.get("/new-entry" , (req, res) =>{
    res.render("new-entry", {
        title:"nueva entrada" 
    });
});

app.post("/new-entry", (req, res) => {
    if (!req.body.title || !req.body.body) {
        res.send(400).send ("Las entradas deben tener titulo y descripción")
    }


let newEntry = {
    title: req.body.title,
    content: req.body.body,
    published: new Date()
}

entries.push(newEntry);

res.redirect("/");

});

};