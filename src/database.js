const mongoose = require('mongoose')
require('dotenv').config({ path: 'variables.env'});

mongoose.connect('mongodb+srv://root:toor@acs.r8zwo.mongodb.net/acs1', {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

.then(db => console.log('DB connected'))
.catch(err => console.error(err))