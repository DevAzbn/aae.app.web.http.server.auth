'use strict';

function _(app, azbn) {
	
	app.log.info(__filename);
	
	return function(req, res) {
		
		res.send(req.session.profile);
		
	};
}

module.exports = _;