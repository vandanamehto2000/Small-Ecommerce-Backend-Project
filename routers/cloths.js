const { Router } = require('express')
const knex = require('../connection/knex_connection')

module.exports = (Router) => {

    // get cloths data
    Router.get('/cloths', (req, res) => {
        knex.select('*').from('cloths')
        .then((data) => {
            var wholeData = {
                count: data.length,
                rows: data
            }
            console.log(wholeData)
            res.send(wholeData)
        })
        .catch((err) => {
            console.log(err)
            res.send(err)
        })
    })


    // get cloths data by product_id
    .get('/cloths/:product_id', (req, res) => {
        var product_id = req.params.product_id;
        knex.select('*').from('cloths')
        .where('cloths.product_id', product_id)
        .then((data) => {
            console.log(data)
            res.send(data)
        })
        .catch((err) => {
            console.log(err)
            res.send(err)
        })
    })


    // get cloths data by product_name
    .get('/search_data/cloths/:search', (req, res) => {
        var search = req.params.search
        knex('cloths')
        .where('product_name', 'like', "%" +search+ "%")
        .then((result) => {
            console.log(result)
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
            res.send(err)
        })
    })
    
    
    // add the product in the cloth
    .post('/addCloths', (req, res) => {
        var clothsDetails = {
            gender: req.body.gender,
            product_name: req.body.product_name,
            color: req.body.color,
            type: req.body.type,
            quality: req.body.quality,
            size: req.body.size,
            price: req.body.price,
            discounted_price: req.body.discounted_price
        }
        knex('cloths').insert(clothsDetails)
        .then((data) => {
            console.log(data)
            res.send('posted data')
        })
        .catch((err) => {
            console.log(err)
            res.send(err)
        })
    })


    // update the cloths data by product_id
    .put('/update/cloths/:product_id', (req, res) => {
        var product_id = req.params.product_id;
        knex('cloths')
        .where('cloths.product_id', product_id)
        .update({
            gender: req.body.gender,
            product_name: req.body.product_name,
            color: req.body.color,
            type: req.body.type,
            quality: req.body.quality,
            size: req.body.size,
            price: req.body.price,
            discounted_price: req.body.discounted_price

        })
        .then((data) => {
            console.log(data)
            res.send('data updated...')
        })
        .catch((err) => {
            console.log(err)
            res.send(err)
        })
    })


    // delete the cloths data by product_id
    .delete('/delete/:product_id', (req, res) => {
        var product_id = req.params.product_id;
        knex('cloths')
        .where('cloths.product_id', product_id)
        .delete()
        .then((data) => {
            console.log(data)
            res.send('data has deleted...')
        })
        .catch((err) => {
            console.log(err)
        })
    })
}