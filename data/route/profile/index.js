'use strict';

function _(app, azbn) {
	
	app.log.info(__filename);
	
	return function(req, res) {
		
		app.clearRequireCache(require);
		
		var _p_data = {
			groups : req.session.profile_data.groups,
			accesses : {},
		}
		
		if(req.session.profile_data.groups.length) {
			
			for(var i = 0; i < req.session.profile_data.groups.length; i++) {
				
				(function(group){
					
					var group_data = app.loadJSON('../data/json/groups/' + group);
					
					if(group_data.accesses && group_data.accesses.length) {
						
						for(var j = 0; j < group_data.accesses.length; j++) {
							
							(function(access_uid){
								
								var access_data = app.loadJSON('../data/json/accesses/' + access_uid);
								
								if(access_data.title && access_data.title != '') {
									
									_p_data.accesses[access_uid] = access_data;
									
								}
								
							})(group_data.accesses[j]);
							
						}
						
					}
					
				})(req.session.profile_data.groups[i]);
				
			}
			
		}
		
		res.render('profile/index', {
			html : {
				head : {
					title : 'Личный кабинет ' + req.session.profile.name,
				},
			},
			profile : req.session.profile,
			profile_data : _p_data,
			data : {
				
			},
		});
		
	};
}

module.exports = _;