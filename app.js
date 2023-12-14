const _ = require('lodash')

const items = [11,[2,[3,[4]]]]

const newItems = _.flatMapDeep(items)
console.log(newItems);