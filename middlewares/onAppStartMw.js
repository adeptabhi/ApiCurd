const onAppStartMw = (req, res, next) => {
    req.body['userId'] = req.headers.userid;
    //For Swagger
    if (req.headers.authorizations != null) {
        req.headers.authorization = req.headers.authorizations;
    }

    if (req.method == 'GET') {
        req.body = { ...req.body, ...req.query };
    }
    next();
}
export default onAppStartMw;