// Simple middleware that loggs something
exports.myLogger = function (req, res, next) {
    console.log('LOGGED');
    next();
};
