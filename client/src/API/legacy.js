import Request from '../Services/Request';
import config from '../config';
const req = new Request(config.API_BASE_ENDPOINT);

const getLegacy = params => req.GET('/v1/legacy', params);

export default getLegacy;
