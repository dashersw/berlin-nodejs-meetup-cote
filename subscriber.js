var cote = require('cote');

var subscriber = new cote.Subscriber({
    name: 'Time Subscriber',
    key: 'sdf',
    // namespace: 'time'
});

subscriber.on('timex', (data) => {
    console.log(`time is ${data.time}`);
});
