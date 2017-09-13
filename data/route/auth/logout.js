'use strict';

function _(app, azbn) {
	
	app.log.info(__filename);
	
	return function(req, res) {
		
		req.session.destroy(function(err) {
			res.redirect(307, '/');
		});
		
		//res.redirect(307, '/');
		
	};
}

module.exports = _;