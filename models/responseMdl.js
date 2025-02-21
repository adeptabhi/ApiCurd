class ResponseMdl {
    constructor({ status = true, msg = 'success', data = [] } = {}) {
        this.status = status,
            this.msg = msg;
        this.data = Array.isArray(data)
            ? data
            : typeof data === 'object' && data !== null
                ? [data]
                : [{ 'value': data }];
    }

    toJson() {
        return {
            "status": this.status,
            "msg": this.msg,
            "data": this.data,
        };
    }
}

export default ResponseMdl;
