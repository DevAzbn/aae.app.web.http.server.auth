'use strict';

function _(app, azbn) {
	
	app.log.info(__filename);
	
	return function(req, res) {
		
		if(req.params.service) {
			
			var _service = app.loadJSON('../config/services/' + req.params.service);
			
			if(_service && _service.auth_url) {
				
				res.redirect(301, _service.auth_url);
				
			} else {
				
				res.sendStatus(404);
				
			}
			
		} else {
			
			res.sendStatus(404);
			
		}
		
	};
}

module.exports = _;