var cote = require('cote');

var client = new cote.Requester({
    name: 'Time Client',
    key: 'sdf',
    // namespace: 'time'
});

var id = 0;

setInterval(() => {
    var request = {
        type: 'time',
        id: id++
    };

    client.send(request, (time) => {
        console.log(`time is ${time}`);
    });
}, 1000);

