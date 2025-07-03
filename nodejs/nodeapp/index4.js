import express from 'express';

const app = express()

app.listen(9999,() => {
    console.log("Server started on port 9999");
});

// app.get("/", (req, res) => {
//     res.send("Hello world");
// });

// app.get("/products", (req, res) => {
    // res.send("Product list");
    // res.json({"id":1, name: "Product 1", price: 99});   /*in json style*/
//     res.status(201).json({"id":1, name: "Product 1", price: 99});   /*added code 201- can check in postman*/
// });

// app.get("/ab*cd", (req, res) => {
//     res.send("Hello!");
// });

// localhost:9999/name
// app.get("/name", (req, res) => {
//     res.send("Good Morning");
// });

// app.get("/:name", (req, res) => {
//     res.send(req.params.name);
// });

// localhost:9999/name/prem
// app.get("/name/:name", (req, res) => {
//     res.send(req.params.name);
// });

// localhost:9999/prem/21
// app.get("/:name/:age", (req, res) => {
//     res.send(req.params.name+req.params.age);
// });

// localhost:9999/name/prem/age/21
// app.get("/name/:name/age/:age", (req, res) => {
//     res.send(req.params.name+req.params.age);
// });

// localhost:9999/
// app.get("/",(req,res) => {
//     res.send(req.headers.authorization);
// })

// localhost:9999/?name=Prem&age=21
// app.get("/",(req,res) => {
//     res.send(req.query.name+req.query.age);
// })

app.get("/",(req,res) => {
    res.send("Get request received");
})

app.post("/",(req,res) => {
    res.send("post request received");
})

app.delete("/",(req,res) => {
    res.send("delete request received");
})

app.patch("/",(req,res) => {
    res.send("Patch request received");
})