import express from 'express';
import fs from 'node:fs';

const app = express();

app.use(express.json());

app.get('/api/dictionary', async function (req, res) {
    fs.readFile('terms.json', {encoding: 'utf-8'}, function(err,data){
        if (!err) {
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.write(data);
            res.end();
        } else {
            console.log(err);
        }
    });
});

app.listen(3001, '0.0.0.0');