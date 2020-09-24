exports.validateCreateJobForm = (req, res, next) => {
    console.log("middleware.validateCreateJobForm");
    const {position, company, location, salary} = req.body;
    if(!position || !company || !location || !salary) {
        res.status(400).json({message: 'Content can not be empty!'});
        return;
    } else {
        next();
    }
}

exports.validateJobId = (req, res, next) => {
    if(!parseInt(req.params.id, 10)) {
        res.status(400).json({message: 'An ID is needed for update.'});
        return;
    } else {
        next();
    }
}