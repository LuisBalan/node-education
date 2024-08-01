const { describe } = require('yargs');

const argv = require('yargs')
.options({'b': {
    alias: 'basis',
    type: 'number',
    demandOption: 'true',
    describe: 'is the basis of the multiplication table'
},
'l': {
    alias: 'list',
    type: 'boolean',
    default: 'false',
    describe: 'shows the table calculated',
}
}).check((argv, options) => {
    if (isNaN(argv.b)){
        throw Error('b must be a number')
    }
    return true
})
.argv;

module.exports = argv;