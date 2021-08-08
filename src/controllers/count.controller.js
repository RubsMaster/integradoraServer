const countController = {}

const { count, countDocuments, db } = require('../models/count')
const Counter = require('../models/count')

countController.getCount = async (req, res) => {
    const query = await Counter.find().countDocuments();
    res.json(query);
    console.log("Conteo actual: ", query)
}

countController.setCount = async (req, res) => {
    console.log(req.body);
    const newCount = new Counter(req.body)
    await newCount.save()
    res.send("guardado")
}

module.exports = countController;