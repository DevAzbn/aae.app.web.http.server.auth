'use strict';

function _(app, azbn) {
	
	app.log.info(__filename);
	
	return function(req, res) {
		
		res.render('index', {
			html : {
				head : {
					title : 'Выберите сервис для подключения',
				},
			},
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
						uid : 'vk',
						title : 'VK.com',
					},
				],
			},
		});
		
	};
}

//app.loadJSON('../config/yandex-app'),

module.exports = _;