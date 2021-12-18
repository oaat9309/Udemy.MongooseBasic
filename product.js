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
        required: true,
        maxlength: 20
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: [String],
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    }
})

const Product = mongoose.model('Product', productSchema)

// const bike = new Product({
//     name: 'Tire Pump', price: 19.50, categories: ['Cycling', 'Safety']
// })

// bike.save()
//     .then(data => {
//         console.log('it worked')
//         console.log(data)
//     })
//     .catch(err => {
//         console.log('error warning')
//         console.log(err.errors.name.properties.message)
//     })

Product.findOneAndUpdate({name: 'Mountain Bike'}, {name: 'Tire Pump'}, {price: 12.50})
    .then(data => {
        console.log('it worked')
        console.log(data)
    })
    .catch(err => {
        console.log('error warning')
        console.log(err.errors.name.properties.message)
    })