import express from 'express';
import routes from './src/routes';

const app = express();
const port = 3000;

app.get('/', (req, res) => res.send("It's alive!"));

app.listen( port,() => console.log(`Server running on port ${port}!`) );
app.use('/', routes)