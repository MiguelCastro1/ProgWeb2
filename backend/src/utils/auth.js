const verify_auth = (req, res, next) => {
    if(req.session.uid)
        next();
    
    res.status(401).send({message: "Sem autorização"})
}

export default verify_auth;