exports.hasJobApiPrivileges = (req, res, next) => {
    console.log("middleware.hasJobApiPrivileges");
    next();
}