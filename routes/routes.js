const router = require('express').Router();
const apiModel = require('../models/apiModel')

router.get('/:page', async (req, res) => {
    try {
       const page = req.params.page;
       response = await apiModel.all(page)
       res.status(200).json({response})
    } catch (err) {
        res.status(500).json({err:err})
    }
});

router.get('/character/infos/:name', async (req, res) => {
    try {
        const name = req.params.name
        response = await apiModel.chareacterInfos(name)
        res.status(200).json({response})
    } catch (err) {
        res.status(500).json({err:err})
    }
});

router.get('/character/:name', async (req, res) => {
    try {
        const name = req.params.name
        response = await apiModel.chareacterByName(name)
        res.status(200).json({response})
    } catch (err) {
        res.status(500).json({err:err})
    }
});

router.get('/character/:name/:gender', async (req, res) => {
    try {
        const name = req.params.name
        const gender = req.params.gender
        response = await apiModel.chareacterByNameAndGender(name, gender)
        res.status(200).json({response})
    } catch (err) {
        res.status(500).json({err:err})
    }
});




module.exports = router; 