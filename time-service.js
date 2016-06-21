var cote = require('cote');

var timeService = new cote.Responder({
    name: 'Time Service',
    key: 'sdf',
    // namespace: 'time',
    respondsTo: ['time']
});

timeService.on('time', (req, cb) => {
    console.log(`new request with id ${req.id}`);
    cb(new Date());
});
