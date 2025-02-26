import express from "express";
import bodyParser from "body-parser";
import ResponseMdl from './models/responseMdl.js'
import dotEnv from 'dotenv';
import log from './utils/log.js';
import db from "./config/db.js";
import validatePayloadMw from "./middlewares/validatePayloadMw.js";
import authorizationMw from "./middlewares/authorizationMw.js";
import routes from "./routes/routes.js";
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from './swagger/swaggerDocs.js';
import onAppStartMw from "./middlewares/onAppStartMw.js";


/*OBJECT*/
dotEnv.config();
const app = express();
const PORT = process.env.PORT || 8080;

/*MIDDLEWARES<*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/adeptAbhi/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/adeptAbhi', onAppStartMw);
app.use('/adeptAbhi', (req, res, next) => {
    log.info('App/Type', req.method);
    log.info('App/Headers', req.headers);
    //log.info('App/Params', req.query);
    log.info('App/URL', req.originalUrl);
    log.info('App/EndPoint', req.path);
    log.info("App/Payload", req.body);
    res.on('finish', () => {
        log.success('App/finish', 'END');
    });
    next();
});

/*Authorization:401*/
app.use('/adeptAbhi', async (req, res, next) => {
    if (!(req.path == '/login' && req.method == 'POST')) {
        var responseMdl = await authorizationMw(req.headers, 18);
        if (!responseMdl.status) {
            res.status(responseMdl.msg == 'unauthorization' ? 401 : 400).json(responseMdl.toJson());
            return;
        }
    }
    next();
});

/*Payload Validate:400*/
app.use('/adeptAbhi', (req, res, next) => {
    var responseMdl = validatePayloadMw(req.method, req.path, req.body);
    if (responseMdl.msg != 'success') {
        responseMdl.status = false;
        res.status(400).json(responseMdl.toJson());
        return;
    }
    next();
});
/*MIDDLEWARES>*/


/*ROUTES*/
app.use('/adeptAbhi', async (req, res, next) => {
    var responseMdl = await routes(req);
    if (req.path == '/logout') {
        res.status(401).json(responseMdl.toJson());
        return;
    }
    res.status(200).json(responseMdl.toJson());
    next();


})

/*GLOBAL: ERROR HANDLING:500*/
app.use((err, req, res, next) => {
    log.error("App", 'Error:' + err.stack);
    res.status(500).send(new ResponseMdl({ msg: err.stack }).toJson());
});

/*LISTENER*/
db.query('SELECT 1')
    .then(() => {
        log.success('App/Listen', 'DB Connected');
        app.listen(PORT, () => {
            log.success('App/Listen', `Server running at http://localhost:${PORT}`);
        });
    }).catch((error) => {
        log.error('App/Listen', 'DB Connection failed:' + error);
    });