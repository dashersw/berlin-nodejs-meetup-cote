var cote = require('cote');

var publisher = new cote.Publisher({
    name: 'Time Publisher',
    key: 'sdf',
    // namespace: 'time',
    broadcasts: ['timex']
});

setInterval(() => {
    publisher.publish('timex', {time: new Date()});
}, 1000);
