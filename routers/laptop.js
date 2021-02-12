const knex = require('../connection/knex_connection')

module.exports = (Router) => {

    // get laptop data
    Router.get('/laptop', (req, res) => {
        knex.select('*').from('laptop')
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


    // get laptop list by product_id
    .get('/laptop/:product_id', (req, res) => {
        var product_id = req.params.product_id
        knex.select('*').from('laptop')
        .where('laptop.product_id', product_id)
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


    // get laptop data by brand
    .get('/search_data/laptop/:search', (req, res) => {
        var search = req.params.search
        knex('laptop')
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


    // add the product in the laptop
    .post('/addLaptops', (req, res) => {
        var laptopDetails = {
            brand:req.body.brand,
            model: req.body.model,
            weight: req.body.weight,
            price: req.body.price,
            RAM: req.body.RAM,
            hard_disk: req.body.hard_disk,
            colour: req.body.colour,
            operating_system: req.body.operating_system,
            touchpad: req.body.touchpad
        }
        knex('laptop').insert(laptopDetails)
        .then((data) => {
            console.log(data)
            res.send('data posted...')
        })
        .catch((err) => {
            console.log(err)
        })
    })


    // update the laptop by model
    .put('/update/:model', (req, res) => {
        var model = req.params.model
        knex('laptop')
        .where('laptop.model', model)
        .update({
            brand:req.body.brand,
            model: req.body.model,
            weight: req.body.weight,
            price: req.body.price,
            RAM: req.body.RAM,
            hard_disk: req.body.hard_disk,
            colour: req.body.colour,
            operating_system: req.body.operating_system,
            touchpad: req.body.touchpad
        })
        .then((data) => {
            console.log(data)
            res.send('data updated...')
        })
        .catch((err) => {
            res.send(err)
        })
    })


    // delete the laptop by model
    .delete('/delete/:model', (req, res) => {
        var model = req.params.model
        knex('laptop')
        .where('laptop.model', model)
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