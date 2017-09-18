'use strict';

function _(app, azbn) {
	
	app.log.info(__filename);
	
	return function(req, res) {
		
		if(req && req.session && req.session.authorized && req.session.authorized.by) {
			
			res.redirect(307, '/authorized/by/' + req.session.authorized.by + '/');
			
		} else {
			
			res.render('index', {
				html : {
					head : {
						title : 'Выберите сервис для подключения',
					},
				},
				profile : req.session.profile || {},
				profile_data : req.session.profile_data || {},
				data : {
					services : [
						{
							uid : 'yandex',
							title : 'Yandex',
						},
						{
							uid : 'google',
							title : 'Google',
						},
						{
							uid : 'github',
							title : 'Github',
						},
						{
							uid : 'twitter',
							title : 'Twitter',
						},
						{
							uid : 'facebook',
							title : 'Facebook',
						},
						{
							uid : 'vkontakte',
							title : 'VKontakte',
						}
					],
				},
			});
			
		}
		
	};
}

//app.loadJSON('../config/yandex-app'),

module.exports = _;