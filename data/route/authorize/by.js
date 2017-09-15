'use strict';

function _(app, azbn) {
	
	app.log.info(__filename);
	
	return function(req, res) {
		
		if(req.params.provider) {
			
			return azbn.mdl('passport').authenticate(req.params.provider, {
				failureRedirect : '/error',
				successRedirect : '/authorized/by/' + req.params.provider + '/',
			});
			
		} else {
			
			res.sendStatus(404);
			
		}
		
	};
}

module.exports = _;