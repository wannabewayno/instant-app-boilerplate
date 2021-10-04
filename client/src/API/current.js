import Request from '../Services/Request';
import config from '../config';
const req = new Request(config.API_BASE_ENDPOINT);

const getCurrent = params => req.GET('/v2/current', params);

export default getCurrent;
