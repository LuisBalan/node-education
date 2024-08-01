const { type } = require('os');
const { createFile } = require('./helpers/multiply');
const { describe } = require('yargs');
const argv = require('yargs')
                .options({'b': {
                    alias: 'basis',
                    type: 'number',
                },
                'l': {
                    alias: 'list',
                    type: 'boolean',
                    default: 'false',
                    describe: 'is --l or --list are entered the multiplication result will be prompted',
                }
            }).check((argv, options) => {
                    if (isNaN(argv.b)){
                        throw Error('b must be a number')
                    }
                    return true
                })
                .argv;


// const basis = Number(process.argv[2].substring(8));
const { b, l } = argv;
createFile(b, l)
.then( fileName => console.log(`${fileName} sucessfully created!`))
.catch(err => console.log(err))

// console.log(process.argv)
console.log(argv)
console.log('basis: yargs', argv.b)
console.log('list: yargs', argv.l)
// console.log('limit yargs: ', argv.limit)
// console.log('number yargs', argv.number)