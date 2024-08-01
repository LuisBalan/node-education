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
},
'u': {
    alias: 'until',
    type: 'number',
    demandOption: 'true',
    describe: 'Bottom limit of the table'
}
}).check((argv, options) => {
    if (isNaN(argv.b)){
        throw Error('b must be a number')
    }

    if (argv.u === undefined){
        throw Error('u param is missing')
    }
    return true
}).argv;

module.exports = argv;