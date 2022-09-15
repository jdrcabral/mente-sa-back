export class NotFoundError {

    code = 'not_found';
    message = 'Not found';

    constructor(message?: string) {
        if (message) this.message = message
    }
}