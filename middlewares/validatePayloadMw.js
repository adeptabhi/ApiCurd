import ResponseMdl from "../models/responseMdl.js";
import deletePayloadMw from "./deletePayloadMw.js";
import getPayloadMw from "./getPayloadMw.js";
import postPayloadMw from "./postPayloadMw.js";
import putPayloadMw from "./putPayloadMw.js";


const validatePayloadMw = (type, endPoint, payload) => {
    var responseMdl = new ResponseMdl({ msg: 'Url Not Found' });
    switch (type) {
        case 'GET':
            responseMdl = getPayloadMw(payload, endPoint);
            break;
        case 'POST':
            responseMdl = postPayloadMw(payload, endPoint);
            break;
        case 'PUT':
            responseMdl = putPayloadMw(payload, endPoint);
            break;
        case 'DELETE':
            responseMdl = deletePayloadMw(payload, endPoint);
            break;

    }
    return responseMdl;
}

export default validatePayloadMw;