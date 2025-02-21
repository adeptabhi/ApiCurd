import ResponseMdl from "../models/responseMdl.js";
import requiredPayloadMw from "./requiredPayloadMw.js";

const deletePayloadMw = (payload, endPoint) => {
    var responseMdl = new ResponseMdl;
    switch (endPoint) {
        case '/student':
            responseMdl.msg = requiredPayloadMw(['id'], payload);
            break;
        default:
            responseMdl.msg = 'Url Not Found';
            break;
    }
    return responseMdl;
}

export default deletePayloadMw;