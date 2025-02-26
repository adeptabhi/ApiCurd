import ResponseMdl from "../models/responseMdl.js";
import requiredPayloadMw from "./requiredPayloadMw.js";

const getPayloadMw = (payload, endPoint) => {
    var responseMdl = new ResponseMdl;
    switch (endPoint) {
        case "/student":
            responseMdl.msg = requiredPayloadMw(['id'], payload);
            break;
        case "/students":
            responseMdl.msg = requiredPayloadMw([], payload);
            break;
        case "/login":
            responseMdl.msg = requiredPayloadMw([], payload);
            break;

        default:
            responseMdl.msg = 'Url Not Found';
            break;
    }

    if (responseMdl.msg.toString().toLowerCase().includes("missing")) {
        responseMdl.msg += ' in params'
    }
    return responseMdl;
}

export default getPayloadMw;