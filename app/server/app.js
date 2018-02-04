import path from 'path';
import express from 'express';
import cors from 'cors';

import router from './router';

const app = express();

//express.static determines the root directory from which all static assets/files will be served.
const assets = express.static(path.join(__dirname, '../'));

app.use(cors[]);
app.use(assets);

app.get('*', router);

export default app;