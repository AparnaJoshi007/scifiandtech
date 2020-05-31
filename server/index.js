import express from 'express';
import serverless from 'serverless-http';
import bodyParser from 'body-parser';

const app = express();
const router = express.Router();
app.use(bodyParser.json());
app.use('/.netlify/functions/server', router);  // path must route to lambda

router.post('/api/add-subscriber', (req, res) => {
    const email = req.body.email
    const name = req.body.name;

    res.status(200).send(`${email} and ${name} are added`);
});

module.exports.handler = serverless(app);