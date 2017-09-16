'use strict';

function _(app, azbn) {
	
	app.log.info(__filename);
	
	return function(req, res) {
		
		if(req.session.profile && req.session.passport) {
			
			if(req.session.profile.provided) {
				
			} else {
				
				req.session.profile.provided = {};
				
			}
			
			if(req.session.profile.provided[req.session.passport.user.provider]) {
				
			} else {
				
				req.session.profile.provided[req.session.passport.user.provider] = [];
				
			}
			
			req.session.profile.provided[req.session.passport.user.provider].push(req.session.passport);
			
			app.saveJSON('../data/json/passport/' + req.session.passport.user.provider + '/' + req.session.passport.user.id, {
				provider : req.session.passport.user.provider,
				id : req.session.passport.user.id,
				profile : req.session.profile.id,
			});
			
		} else {
			
			req.session.profile = {
				id : azbn.randstr(),
				provided : {},
			};
			
			if(req.session.passport) {
				
				if(req.session.profile.provided[req.session.passport.user.provider]) {
					
				} else {
					
					req.session.profile.provided[req.session.passport.user.provider] = [];
					
				}
				
				var providing = app.loadJSON('../data/json/passport/' + req.session.passport.user.provider + '/' + req.session.passport.user.id);
				
				var _profile = app.loadJSON('../data/json/profiles/' + providing.profile);
				
				req.session.profile = _profile;
				
				if(req.session.profile.provided[req.session.passport.user.provider].length) {
					
					for(var i = 0; i < req.session.profile.provided[req.session.passport.user.provider].length; i++) {
						
						var _provider = req.session.profile.provided[req.session.passport.user.provider][i];
						
						if(1) {
							
						}
						
					}
					
				}
				
				req.session.profile.provided[req.session.passport.user.provider].push(req.session.passport);
				
				app.saveJSON('../data/json/passport/' + req.session.passport.user.provider + '/' + req.session.passport.user.id, {
					provider : req.session.passport.user.provider,
					id : req.session.passport.user.id,
					profile : req.session.profile.id,
				});
				
			} else {
				
				req.session.profile = false;
				
			}
			
		}
		
		if(req.session.profile) {
			app.saveJSON('../data/json/profiles/' + req.session.profile.id, req.session.profile);
		}
		
		//req.session.save();
		
		//res.send(req.session.profile);
		res.redirect(307, '/profile/');
		
		/*
		{
		  "passport": {
			"user": {
			  "provider": "yandex",
			  "id": "244177037",
			  "username": "devazbn",
			  "displayName": "devazbn",
			  "name": {
				"familyName": "Alexander",
				"givenName": "Zybin"
			  },
			  "gender": null,
			  "emails": [
				{
				  "value": "devazbn@yandex.ru"
				}
			  ],
			  "_raw": "{\"first_name\": \"Alexander\", \"last_name\": \"Zybin\", \"display_name\": \"devazbn\", \"emails\": [\"devazbn@yandex.ru\"], \"default_email\": \"devazbn@yandex.ru\", \"real_name\": \"Alexander Zybin\", \"is_avatar_empty\": true, \"birthday\": null, \"default_avatar_id\": \"0/0-0\", \"login\": \"devazbn\", \"sex\": null, \"id\": \"244177037\"}",
			  "_json": {
				"first_name": "Alexander",
				"last_name": "Zybin",
				"display_name": "devazbn",
				"emails": [
				  "devazbn@yandex.ru"
				],
				"default_email": "devazbn@yandex.ru",
				"real_name": "Alexander Zybin",
				"is_avatar_empty": true,
				"birthday": null,
				"default_avatar_id": "0/0-0",
				"login": "devazbn",
				"sex": null,
				"id": "244177037"
			  }
			}
		  }
		}
		
		{
		  "passport": {
			"user": {
			  "id": "114538027082913858929",
			  "displayName": "Alexander Zybin",
			  "name": {
				"familyName": "Zybin",
				"givenName": "Alexander"
			  },
			  "emails": [
				{
				  "value": "alexander.zybin@gmail.com",
				  "type": "account"
				}
			  ],
			  "photos": [
				{
				  "value": "https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg?sz=50"
				}
			  ],
			  "gender": "male",
			  "provider": "google",
			  "_raw": "{\n \"kind\": \"plus#person\",\n \"etag\": \"\\\"Sh4n9u6EtD24TM0RmWv7jTXojqc/w2OtJKobO7s0gvGmP4ByLnXFmlM\\\"\",\n \"gender\": \"male\",\n \"emails\": [\n  {\n   \"value\": \"alexander.zybin@gmail.com\",\n   \"type\": \"account\"\n  }\n ],\n \"objectType\": \"person\",\n \"id\": \"114538027082913858929\",\n \"displayName\": \"Alexander Zybin\",\n \"name\": {\n  \"familyName\": \"Zybin\",\n  \"givenName\": \"Alexander\"\n },\n \"url\": \"https://plus.google.com/114538027082913858929\",\n \"image\": {\n  \"url\": \"https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg?sz=50\",\n  \"isDefault\": true\n },\n \"isPlusUser\": true,\n \"language\": \"ru\",\n \"ageRange\": {\n  \"min\": 21\n },\n \"circledByCount\": 22,\n \"verified\": false\n}\n",
			  "_json": {
				"kind": "plus#person",
				"etag": "\"Sh4n9u6EtD24TM0RmWv7jTXojqc/w2OtJKobO7s0gvGmP4ByLnXFmlM\"",
				"gender": "male",
				"emails": [
				  {
					"value": "alexander.zybin@gmail.com",
					"type": "account"
				  }
				],
				"objectType": "person",
				"id": "114538027082913858929",
				"displayName": "Alexander Zybin",
				"name": {
				  "familyName": "Zybin",
				  "givenName": "Alexander"
				},
				"url": "https://plus.google.com/114538027082913858929",
				"image": {
				  "url": "https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg?sz=50",
				  "isDefault": true
				},
				"isPlusUser": true,
				"language": "ru",
				"ageRange": {
				  "min": 21
				},
				"circledByCount": 22,
				"verified": false
			  }
			}
		  }
		}
		
		*/
		
	};
}

module.exports = _;