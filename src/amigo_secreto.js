import express from 'express'
import ejs from 'ejs'
import path from 'path';
import {fileURLToPath} from 'url'
import dotenv from 'dotenv';
import route_app from './routes/route.js'

dotenv.config();
// VARIABLES CONSTANTES
const app = express();
const puerto = process.env.PORT || 8060

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const publicPath = path.join(__dirname, 'public');

// RUTAS DE VISTAS Y ARCHIVOS ESTATICOS
app.set("views", path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);

//MIDDLEWARES
app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

//RUTA
app.use(route_app);

// ARCHIVOS ESTÁTICOS
app.use(express.static(publicPath));
app.use(express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")));
app.use(express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")));
app.use(express.static(path.join(__dirname, "../node_modules/jquery/dist")));

app.listen(puerto, '0.0.0.0', () => {
    console.log(`http://localhost:${puerto}`)
})