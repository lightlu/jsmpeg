#!/usr/bin/env node

var ll = '-118.270293, 34.039737';
ll = '-74.0060, 40.7128';
const fs = require('fs');
fs.readFile('/root/jsmpeg/azure_maps_demo.html', 'utf-8',function read(err, data) {
    if (err) {
        throw err;
    }
    var result = data.replace(/latitude_and_longitude/g, ll);
    console.log('');
    console.log(result);
});
