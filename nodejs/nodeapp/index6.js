import express from 'express';

const app = express();

app.listen(9999, () => {
    console.log("Server started on port 9999");
});

app.use(express.json()); // Middleware to parse JSON body

app.post("/", (req, res) => {
    res.send(req.body);
})