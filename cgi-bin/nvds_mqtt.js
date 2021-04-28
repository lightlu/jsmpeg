#!/usr/bin/env node

const fs = require('fs');
var env;

fs.readFile('/root/jsmpeg/env.json', 'utf-8',function read(err, json_string) {
    if (err) {
        throw err;
    }
    try {
        env = JSON.parse(json_string)
        //console.log("Customer address is:", customer.address)
    } catch(err) {
        //console.log('Error parsing JSON string:', err)
    }
});

fs.readFile('/root/jsmpeg/nvds_mqtt.html', 'utf-8',function read(err, data) {
    if (err) {
        throw err;
    }
    var result = data.replace(/\$\{ws_relay_port_dst\}/g, env.ws_relay_port_dst);
    console.log('');
    console.log(result);
});
