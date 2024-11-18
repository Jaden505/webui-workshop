import { NotFoundError } from '@aliceo2/web-ui';

class InformationService {
    constructor() {
        this._information = {
            Bob: 'Bob is a builder',
            Alice: 'Alice is a designer',
            Charlie: 'Charlie is a coder'
        };
    }

    getInformationByUser(name) {
        if (this._information[name]) {
            return this._information[name];
        } else {
            throw new NotFoundError(`User ${name} not found`);
        }
    }
}

export default InformationService;
