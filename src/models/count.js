const { Schema, model } = require('mongoose');


const counter = new Schema({
    count: {type: Number, required: true}
}, {
    timestamps: true,
    versionKey: false
})

module.exports = model("Count", counter)