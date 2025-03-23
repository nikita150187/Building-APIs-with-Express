import express from "express";
const app = express();

const PORT = 3000;
app.use(express.json());

app.get('/',(req, res) =>{
res.send("Welcome developer!");

});

app.get('/users',(req, res) => {
    const users =[
        { id: 1, name: 'John', age: 25},
        { id: 2, name: 'Peter', age: 28},
        { id: 3, name: 'Anna', age: 30},
    ];
    res.json(users);
});

app.post('/users',(req, res) => {
    const newUser = req.body;
    const { id, name, age } = newUser;

   

    res.json({ message: `Hello, ${name}! You are ${age} years old.` });
});

app.listen(PORT, () =>{
    console.log(`server is running on port: ${PORT}`);
    

});