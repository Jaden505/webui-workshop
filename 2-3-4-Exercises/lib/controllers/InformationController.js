import { InvalidInputError, updateAndSendExpressResponseFromNativeError } from "@aliceo2/web-ui";

class InformationController {
    constructor(informationService) {
        this._informationService = informationService;
    }
    
    retrieveInformationHandler = (req, res) => {
        const name = req.params.name;
        if (!name || !name.trim()) updateAndSendExpressResponseFromNativeError(res, new InvalidInputError('Name is required'));

        try {
            const information = this._informationService.getInformationByUser(name);
            res.json(information);
        } catch (error) {
            console.error(error);
            updateAndSendExpressResponseFromNativeError(res, error);
        }
    }
}

export default InformationController;
