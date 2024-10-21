const express = require('express');
const bodyParser = require('body-parser');
const {PrismaClient}  = require('@prisma/client');
const joi = require('joi');

const app = express();
const port = 3000;
const prisma = new PrismaClient();

const swaggerJSON = require('./swagger.json');
const swaggerUI = require('swagger-ui-express');

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerJSON));
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
        res.status(500).json({ error: error.message});
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

app.post('/api/v1/categories', async (req, res) => {
    const createCategory = await prisma.post.create({
        data: {
            title: 'How to be Bob',
            categories: {
                create: [
                    {
                        assignedBy: 'Bob',
                        assignedAt: new Date(),
                        category: {
                            create: {
                                name: 'New Category'
                            },
                        }
                    }
                ]
            }
        }
    });

    res.status(201).json(createCategory);
});

app.post('/api/v1/posts', async (req, res) => {
    const createCategory = await prisma.post.create({
        data: {
            title: 'How to be Bob',
            categories: {
                create: [
                    {
                        assignedBy: 'Bob',
                        assignedAt: new Date(),
                        category: {
                            connect: {
                                id: 1
                            },
                        }
                    }
                ]
            }
        }
    });

    res.status(201).json(createCategory);
});

app.post('/api/v1/posts2', async (req, res) => {
    const createCategory = await prisma.post.create({
        data: {
            title: 'How to be Catalina',
            categories: {
                create: [
                    {
                        assignedBy: 'Catalina',
                        assignedAt: new Date(),
                        category: {
                            connectOrCreate: {
                                where: {
                                    id: 1
                                },
                                create: {
                                    name: 'New Category',
                                    id: 9
                                },
                            }
                        }
                    }
                ]
            }
        }
    });

    res.status(201).json(createCategory);
});

app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));