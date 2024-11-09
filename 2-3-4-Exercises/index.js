import config from './config.js';

import InformationController from './lib/controllers/InformationController.js';
import InformationService from './lib/services/InformationService.js';
import { HttpServer } from '@aliceo2/web-ui';


const http = new HttpServer(config.http, config.jwt, config.oAuth);
http.addStaticPath(new URL('./public', import.meta.url).pathname);

const informationService = new InformationService();
const informationController = new InformationController(informationService);
http.get('/info:name', informationController.retrieveInformationHandler.bind(informationController));

export default http;
