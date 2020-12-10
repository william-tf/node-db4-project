const express = require('express')
const Recipe = require('./recipe-modal.js')
const router = express.Router()

router.get('/', (req, res) => {
    Recipe.getRecipes()
    .then(recipes => {
        res.status(200).json(recipes)
    })
    .catch(err => res.status(500).json({message: err.message}))
})
router.get('/:id/shoppinglist', (req, res) => {
    console.log(req.body)
    const {id} = req.params
    Recipe.getShoppingList(id)
    .then(ing => {
        res.status(200).json(ing)
    })
    .catch(err => res.status(500).json({message: err.message}))
})
router.get('/:id/instructions', (req, res) => {
    console.log(req.body)
    const {id} = req.params
    Recipe.getInstructions(id)
    .then(instruct => {
        res.status(200).json(instruct)
    })
    .catch(err => res.status(500).json({message: err.message}))
})

module.exports = router