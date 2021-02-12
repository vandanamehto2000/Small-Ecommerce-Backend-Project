const knex = require('../connection/knex_connection')

module.exports = (Router) => {

    // get headphones data
    Router.get('/headphones', (req, res) => {
        knex.select('*').from('headphones')
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


    // get headphones data by product_id
    .get('/headphones/:product_id', (req, res) => {
        var product_id = req.params.product_id;
        knex.select('*').from('headphones')
        .where('headphones.product_id', product_id)
        .then((data) => {
            console.log(data)
            res.send(data)
        })
        .catch((err) => {
            console.log(err)
            res.send(err)
        })
    })


    // get headphones data by brand
    .get('/search_data/headphones/:search', (req, res) => {
        var search = req.params.search
        knex('headphones')
        .where('brand', 'like', "%" +search+ "%")
        .then((result) => {
            var wholeData = {
                count: result.length,
                rows: result
            }
            console.log(wholeData)
            res.send(wholeData)
        })
        .catch((err) => {
            console.log(err)
            res.send(err)
        })
    })


    // add the product in the  headphones
    .post('/addHeadphones', (req, res) => {
        var printerDetails = {
            brand: req.body.brand,
            type: req.body.type,
            modelName: req.body.modelName,
            color: req.body.color,
            connectivity: req.body.connectivity,
            price: req.body.price
        }
        knex('headphones').insert(printerDetails)
        .then((result) => {
            console.log(result)
            res.send('data posted...')
        })
        .catch((err) => {
            console.log(err)
            res.send(err)
        })
    })


    // update headphones data by modelName
    .put('/update/:modelName', (req, res) => {
        var modelName = req.params.modelName;
        knex('headphones')
        .where('headphones.modelName', modelName)
        .update({
            type: req.body.type,
            color: req.body.color,
            connectivity: req.body.connectivity,
            price: req.body.price
        })
        .then((data) => {
            console.log(data)
            res.send('data updated.....')
        })
        .catch((err) => {
            console.log(err)
        })
    })


    // delete headphones data by modelName
    .delete('/delete/:modelName', (req, res) => {
        var modelName = req.params.modelName;
        knex('headphones')
        .where('headphones.modelName', modelName)
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