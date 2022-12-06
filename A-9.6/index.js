const express = require("express");

const app = express();
app.use(express.json());

app.get("/6days-ahead", (req, res) => {

    const daysToBeAdded = 6
    let date = new Date();
    date.setDate(date.getDate() + daysToBeAdded);
    console.log(date);
    res.send(date);
});

app.get("/6weeks-ahead", (req, res) => {

    const weeksToBeAdded = 6
    let date = new Date();
    date.setDate(date.getDate() + weeksToBeAdded*7);
    console.log(date);
    res.send(date);
});

app.get("/187-days-behind", (req, res) => {
    
    const daysToBeSubtracted = 187;
    const customDate = "12-jan-2019"
    let date = new Date(customDate);
    date.setDate(date.getDate() - daysToBeSubtracted);
    console.log(date);
    res.send(date);
});

const port = 3000;
app.listen(port, () => {
    console.log("Server started at port:", port)
})