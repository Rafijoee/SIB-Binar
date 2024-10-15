const express = require('express');
const bodyParser = require('body-parser');
const {PrismaClient}  = require('@prisma/client');


const app = express();
const port = 3000;
const prisma = new PrismaClient();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/v1/users', async (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ error: 'Name is required' });
    }

    try {
        let user = await prisma.user.create({
            data: {
                name: name, 
            }
        });

        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


app.get('/api/v1/users', async (req, res) => {
    let users = await prisma.user.findMany({
        orderBy: {
            id: 'asc'
        }
    });

    return res.json(users);
});

app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));