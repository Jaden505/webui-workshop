import { fileURLToPath } from 'url';
import config from './config.js';

import InformationController from './lib/controllers/InformationController.js';
import InformationService from './lib/services/InformationService.js';
import { HttpServer } from '@aliceo2/web-ui';

const informationService = new InformationService();
const informationController = new InformationController(informationService);

const http = new HttpServer(config.http, config.jwt, config.oAuth);

http.get('/info:name', informationController.retrieveInformationHandler.bind(informationController), {public: true});

const __dirname = fileURLToPath(new URL('.', import.meta.url));
http.addStaticPath(`${__dirname}/public`);

export default http;
