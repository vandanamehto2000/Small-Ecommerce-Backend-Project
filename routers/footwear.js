const knex = require('../connection/knex_connection')

module.exports = (Router) => {

    // get footwear data
    Router.get('/footwear', (req, res) => {
        knex.select('*').from('footwear')
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


    // get footwear data by product_id
    .get('/footwear/:product_id', (req, res) => {
        var product_id = req.params.product_id;
        knex.select('*').from('footwear')
        .where('footwear.product_id', product_id)
        .then((data) => {
            console.log(data)
            res.send(data)
        })
        .catch((err) => {
            console.log(err)
            res.send(err)
        })
    })


    // get footwear data by types
    .get('/search_data/footwear/:search', (req, res) => {
        var search = req.params.search
        knex('footwear')
        .where('types', 'like', "%" +search+ "%")
        .then((result) => {
            console.log(result)
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
            res.send(err)
        })
    })
    

    // add the product in the  footwear
    .post('/Addfootwear', (req, res) => {
        var footwearDetails = {
            types: req.body.types,
            brand: req.body.brand,
            colour: req.body.colour,
            size: req.body.size,
            price: req.body.price,
            discount_price: req.body.discount_price
        }
        knex('footwear').insert(footwearDetails)
        .then((data) => {
            console.log(data)
            res.send('data posted...')
        })
        .catch((err) => {
            console.log(err)
            res.send(err)
        })
    })


    // update the footwear data by product_id
    .put('/update/footwear/:product_id', (req, res) => {
        var product_id = req.params.product_id;
        knex('footwear')
        .where('footwear.product_id', product_id)
        .update({
            types: req.body.types,
            colour: req.body.colour,
            size: req.body.size,
            price: req.body.price,
            discount_price: req.body.discount_price
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


    // delete the footwear data by product_id
    .delete('/delete/footwear/:product_id', (req, res) => {
        var product_id = req.params.product_id
        knex('footwear')
        .where('footwear.product_id', product_id)
        .delete()
        .then((data) => {
            console.log(data)
            res.send('data has deleted...')
        })
        .catch((err) => {
            console.log(err)
            res.send(err)
        })
    })
}
