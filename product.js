const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/shopApp')
    .then(() => {
    console.log('connection open')
    })
    .catch(err => {
    console.log('error appeared!')
    console.log(err.errors)
    })

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number
    }
})

const Product = mongoose.model('Product', productSchema)

const bike = new Product({
    name: 'Mountain Bike', price: 599
})

bike.save()
    .then(data => {
        console.log('it worked')
        console.log(data)
    })
    .catch(err => {
        console.log('error warning')
        console.log(err.errors)
    })