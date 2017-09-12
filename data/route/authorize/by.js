'use strict';

function _(app, azbn) {
	
	app.log.info(__filename);
	
	return function(req, res) {
		
		switch(req.params.service) {
			
			case 'yandex' : {
				
				if(req.query.code) {
					
					//azbn.echo('Get code: ' + req.query.code);
					//res.send('ok: ' + req.query.code);
					
					var _app = app.loadJSON('../config/services/' + req.params.service);
					
					azbn.mdl('web/http').r('POST', 'https://oauth.yandex.ru/token', {
						grant_type : 'authorization_code',
						code : req.query.code,
						client_id : _app.app.id,
						client_secret : _app.app.secret,
					}, function(error, response, body){
						
						//console.log(body);
						
						if(error) {
							
							res.send(error);
							
						} else {
							
							req.session.authorized = {
								by : req.params.service,
							};
							req.session.access = JSON.parse(body);
							
							azbn.mdl('web/http').r('POST', 'https://login.yandex.ru/info?format=json&with_openid_identity=1&oauth_token=' + req.session.access.access_token, {
								
							}, function(_error, _response, _body){
								
								if(_error) {
									
									res.send(_error);
									
								} else {
									
									var _account = JSON.parse(_body);
									
									/*
									{
									  "first_name": "Alexander",
									  "last_name": "Zybin",
									  "display_name": "alexander.zybin",
									  "emails": [
										"alexander.zybin@yandex.ru"
									  ],
									  "default_email": "alexander.zybin@yandex.ru",
									  "real_name": "Alexander Zybin",
									  "is_avatar_empty": false,
									  "birthday": "1985-10-19",
									  "default_avatar_id": "28439/99074513-1536784464",
									  "openid_identities": [
										"http://alexander-zybin.ya.ru/",
										"http://openid.yandex.ru/alexander-zybin/"
									  ],
									  "login": "alexander.zybin",
									  "sex": "male",
									  "id": "99074513"
									}
									*/
									req.session.authorized.account = _account;
									
									app.saveJSON('../config/accounts/' + req.params.service + '/' + _account.login, _account);
									
								}
								
							});
							
							
							
							res.redirect(301, '/authorized/by/' + req.params.service + '/');
							
						}
						
						//res.redirect(301, '/');
						
					});
					
				}
				
			}
			break;
			
			default : {
				
			}
			break;
			
		}
		
	};
}

module.exports = _;