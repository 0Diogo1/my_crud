const mongoose = require('mongoose');

async function main() {
    await mongoose.connect('mongodb://localhost:27017/mycrud')
    console.log('Conexão com bd estabelecida')
}

main().catch(err => console.log(err))

module.exports = mongoose