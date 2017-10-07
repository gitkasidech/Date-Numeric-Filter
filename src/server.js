import express from 'express'
import bodyParser from 'body-parser'
const app = express();

import {server} from './configs'
const route = require('./route/router')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(async (req, res, next) => {
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST');
    res.header('Access-Control-Allow-Headers', 'appid, X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
    if ('OPTIONS' == req.method) {
        res.sendStatus(200);  //200 is OK
    } else {
        next();
    }
});

route.setRoute(app); //go to route 

app.set('port', server.port || 7321); //set port is 4444

app.listen(app.get('port'), async () => {
    console.log('-----------------------------------------------------\r\n');
    console.log('Server Start, listening on port: ' + app.get('port') + '\r\n');
    console.log('-----------------------------------------------------');
});