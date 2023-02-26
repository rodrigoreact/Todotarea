const { Router } = require("express");
const { where } = require("sequelize");

const router = Router();

const Todo = require('../models/todo.models');



//Rutas
// Ruta get, obtener datos
router.get('/api/v1/todo', async (req, res) => {
    try {
        
        const object = await Todo.findAll({ 
            attributes: ["id", "title", "description", "status"],
            order: ["id"]
        })
        res.send(object)

    } catch (error) {
        res.status(400).json(error)
    }
})

// Ruta post enviar datos
router.post('/api/v1/todo', async (req, res) => {
    try {

        const object = req.body;
        await Todo.create(object)
        res.status(201).json();

    } catch (error) {
        res.status(400).json(error)
    }
})


// Ruta delete
router.delete('/api/v1/todo/:id', async(req, res) => {
    try {

        const { id } = req.params;
        await Todo.destroy({
            where: { id }
        })
        res.status(204).send()

    } catch (error) {
        res.status(400).json(error);
    }
})

//Ruta put
router.put('/api/v1/todo/:id', async(req, res) => {
    try {

        const { id } = req.params;
        const data = req.body;
        await Todo.update(data, {where: {id}})
        res.status(204).send()
        
    } catch (error) {
        res.status(400).json(error);
    }
})


module.exports = router;