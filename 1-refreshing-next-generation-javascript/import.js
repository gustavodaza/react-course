import person from './export.js'

// name exports
import {smth} from './export.js' //import exactly the export defined
import {smth as Smth} from './export.js' //import using alias
import * as bundled from './export.js' //import everything using alias

console.log(person)
