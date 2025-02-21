import log from "../utils/log.js";

const requiredPayloadMw = (fields, payload) => {
    try {
        let missingFields = [];
        for (const field of fields) {
            if (payload[field] === undefined || payload[field] === null) {
                missingFields.push(field);
            }
        }
        if (missingFields.length > 0) {
            return `Missing required fields:${missingFields.join(", ")}`;
        }
    } catch (error) {
        log.error('requirePayload', error)
        return error;
    }
    return 'success';
};

export default requiredPayloadMw;