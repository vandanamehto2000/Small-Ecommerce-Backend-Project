const { update } = require('../connection/knex_connection')
const knex = require('../connection/knex_connection')

module.exports = (Router) => {

    // get wholedata of phone
    Router.get('/phone', (req, res) => {
        knex.select('*').from('phone')
        .then((data) => {
            var wholedata = {
                count: data.length,
                rows: data
            }
            console.log(wholedata)
            res.send(wholedata)
        })
        .catch((err) => {
            console.log(err)
        })
    })


    // get phone data by product_id
    .get('/phone/:product_id', (req, res) => {
        var product_id = req.params.product_id
        knex.select('*').from('phone')
        .where('phone.product_id', product_id)
        .then((data) => {
            console.log(data)
            res.send(data)
        })
        .catch((err) => {
            console.log(err)
            res.send(err)
        })
    })


    // get phone data by brand
    .get('/search_data/phone/:search', (req, res) => {
        var search = req.params.search
        knex('phone')
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
    .post('/AddphoneDetails', (req, res) => {
        var phoneDetails = {
            brand: req.body.brand,
            model: req.body.model,
            batteryCapacity: req.body.batteryCapacity,
            colours: req.body.colours,
            screenSize: req.body.screenSize,
            RAM: req.body.RAM,
            internalStorage: req.body.internalStorage,
            rearCamera: req.body.rearCamera,
            frontCamera: req.body.frontCamera,
            price: req.body.price
        }
        knex('phone').insert(phoneDetails)
        .then((data) => {
            console.log(data)
            res.send('data posted...')
        })
        .catch((err) => {
            console.log(err)
            res.send(err)
        })
    })


    // update the data by model
    .put('/update/:model', (req, res) => {
        var model = req.params.model
        knex('phone')
        .where('phone.model', model)
        .update({
            batteryCapacity: req.body.batteryCapacity,
            colours: req.body.colours,
            screenSize: req.body.screenSize,
            RAM: req.body.RAM,
            internalStorage: req.body.internalStorage,
            rearCamera: req.body.rearCamera,
            frontCamera: req.body.frontCamera,
            price: req.body.price
        })
        .then((data) => {
            console.log(data)
            res.send('data updated...')
        })
        .catch((err) => {
            res.send(err)
        })
    })


    // deleted the data by model
    .delete('/delete/:model', (req, res) => {
        var model = req.params.model
        knex('phone')
        .where('phone.model', model)
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