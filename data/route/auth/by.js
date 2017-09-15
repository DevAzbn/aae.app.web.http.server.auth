'use strict';

function _(app, azbn) {
	
	app.log.info(__filename);
	
	return function(req, res) {
		
		return azbn.mdl('passport').authenticate(req.params.provider);
		
	};
}

module.exports = _;