'use strict';

function _(app, azbn) {
	
	app.log.info(__filename);
	
	return function(req, res) {
		
		app.clearRequireCache(require);
		
		if(req.params.service && req.params.service != '' && req.session.authorized && req.session.authorized.by && req.session.authorized.by == req.params.service) {
			
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
			var _account_bounds = app.loadJSON('../data/json/account_bounds/' + req.params.service + '/' + req.session.authorized.account.email);
			
			var groups = [];
			var accesses = [];
			
			if(_account_bounds.groups) {
				
				for(var i = 0; i < _account_bounds.groups.length; i++) {
					//groups.push(_account_bounds.groups[i]);
					
					var _gid = _account_bounds.groups[i];
					
					(function(gid){
						
						var _group = app.loadJSON('../data/json/groups/' + gid);
						
						if(_group.accesses) {
							
							for(var j = 0; j < _group.accesses.length; j++) {
								
								var _access = _group.accesses[j];
								
								(function(access){
									
									var _access_data = app.loadJSON('../data/json/accesses/' + access);
									
									accesses.push(_access_data);
									
								})(_access);
								
							}
							
						}
						
					})(_gid);
					
				}
				
			}
			
			res.render('authorized/by/' + req.params.service, {
				html : {
					head : {
						title : 'Авторизованы с помощью ' + _service.app.title,
					},
				},
				session : req.session.authorized,
				data : {
					service : _service,
					authorized : req.session.authorized,
					accesses : accesses,
				},
			});
			
		} else {
			
			res.redirect(307, '/');
			
		}
		
	};
}

module.exports = _;