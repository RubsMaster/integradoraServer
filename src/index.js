require('./database')
const app = require('./app')

app.listen(app.get('port'))
console.log('server listening on port 4000')
