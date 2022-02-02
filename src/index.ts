import express from 'express';
import routes from './routes';

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => res.status(200).send("It's alive!"));

if(process.env.NODE_ENV !== 'test') { 
    //En caso de ser un test, el puerto se asignará a 0 (minimo disponible)
    app.listen( port,() => console.log(`Server running on port ${port}!`) );
}
app.use('/', routes);

export default app;