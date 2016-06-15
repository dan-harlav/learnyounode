var fs = require('fs');

module.exports = function(dirPath, extension, callback) {
    var extension = '.' + extension;
    fs.readdir(dirPath, function(err, content) {
        if (err) {
            return callback(err);
        }
        var result = content.filter(function(index) {
            return (index.indexOf(extension, index.length - extension.length) != -1);
        });
        return callback(err, result);
    });
}
