var filesStored = './FilesStored/';
const fs = require('fs');
var files   = [];
var path = require('path'); 

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.getfiles = function (req, res) {
	fs.readdir(filesStored, (err, files) => {
		if(err) {
			res.json({code : 404, status : "Failed", error : err});
		} else {
				files.forEach(file => {
				});
			res.json({code : 200, status : "Success", data : files})
			}
	});
};


exports.downloadfile = function (req, res, next) {
	console.log(req.body);
	var filename = req.body.filename;
	var filepath = path.join(__dirname,'.././FilesStored/')+ filename;
	res.sendFile(filepath);
}