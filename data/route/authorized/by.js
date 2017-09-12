'use strict';

function _(app, azbn) {
	
	app.log.info(__filename);
	
	return function(req, res) {
		
		if(req.params.service && req.params.service != '') {
			/*
			res.send({
				params : req.params,//from url
				query : req.query,//_get
				body : req.body,//_post
				session : {
					access : req.session.access,
				}
			});
			*/
			var _service = app.loadJSON('../config/services/' + req.params.service);
			
			res.render('authorized/by/' + req.params.service, {
				html : {
					head : {
						title : 'Авторизованы с помощью ' + _service.app.title,
					},
				},
				data : {
					service : _service,
					authorized : req.session.authorized,
					accesses : [
						{
							title : 'Тестовый сайт на Wordpress #1',
						}
					],
				},
			});
			
		} else {
			
			res.sendStatus(404);
			
		}
		
	};
}

module.exports = _;