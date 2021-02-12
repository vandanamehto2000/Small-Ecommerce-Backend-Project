
const knex = require('./knex_connection')

// create a table for laptop
knex.schema.hasTable('laptop').then((exists) => {
    if(!exists){
        return knex.schema.createTable('laptop', (table) => {
            table.increments('product_id').primary()
            table.string('brand') 
            table.string('model')
            table.string('weight')
            table.string('price')
            table.string('RAM')
            table.string('hard_disk')
            table.string('colour')
            table.string('operating_system')
            table.string('touchpad')
        })
        .catch((err) => {
            console.log(err)
        })
    }
    return console.log('table has created...')
})


// create a table for phone
knex.schema.hasTable('phone').then((exists) => {
    if(!exists){
        return knex.schema.createTable('phone', (table) => {
            table.increments('product_id').primary()
            table.string('brand')  
            table.string('model') 
            table.string('batteryCapacity')
            table.string('colours')
            table.string('screenSize')
            table.string('RAM')
            table.string('internalStorage')
            table.string('rearCamera')
            table.string('frontCamera')
            table.string('price')
        })
        .catch((err) => {
            console.log(err)
        })
    }
    return console.log('table has created...')
})


// create a table for headphones
knex.schema.hasTable('headphones').then((exists) => {
    if(!exists){
        return knex.schema.createTable('headphones', (table) => {
            table.increments('product_id').primary()
            table.string('brand')
            table.string('type')
            table.string('modelName')
            table.string('color')
            table.string('connectivity')
            table.string('price')

        })
        .catch((err) => {
            console.log(err)
        })
    }
    return console.log('table has created...')
})


// create a tabble for footwear
knex.schema.hasTable('footwear').then((exists) => {
    if(!exists) {
        return knex.schema.createTable('footwear', (table) => {
            table.increments('product_id').primary()
            table.string('types')
            table.string('brand')
            table.string('colour')
            table.string('size')
            table.string('price')
            table.string('discount_price')
        })
        .catch((err) => {
            console.log(err)
        })
    }
    return console.log('table has created...')
})


// create a table for cloths
knex.schema.hasTable('cloths').then((exists) => {
    if(!exists){
        return knex.schema.createTable('cloths', (table) => {
            table.increments('product_id').primary()
            table.string('gender')
            table.string('product_name')
            table.string('color')
            table.string('type')
            table.string('quality')
            table.string('size')
            table.string('price')
            table.string('discounted_price')
        })
        .catch((err) => {
            console.log(err)
        })
    }
    return console.log('table has created....')
})