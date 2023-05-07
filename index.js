const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
// middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('User Management server is running')
})

const users = [
    { id: 1, name: 'Johurul', email: 'johurul@gmail.com' },
    { id: 2, name: 'Jahin', email: 'Jahin@gmail.com' },
    { id: 3, name: 'Simu', email: 'Simu@gmail.com' }
]

app.get('/users', (req, res) => {
    res.send(users);
})

app.post('/users', (req, res) =>{
    console.log('post api hitting');
    console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length+1;
    users.push(newUser);
    res.send(newUser);
})

app.listen(port, () => {
    console.log(`Server is running on PORT: ${port}`);
})
