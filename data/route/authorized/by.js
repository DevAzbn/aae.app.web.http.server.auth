'use strict';

function _(app, azbn) {
	
	app.log.info(__filename);
	
	return function(req, res) {
		
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
		*/
		res.send(req.session.passport.user);
		
	};
}

module.exports = _;