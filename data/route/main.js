/*
обработчик запроса
*/

function _(app, azbn) {
	
	var strategy = {
		yandex : require('passport-yandex').Strategy,
	};
	
	azbn.mdl('express').set('views', azbn.mdl('config').path.pug);
	azbn.mdl('express').set('view engine', 'pug');
	
	
	
	
	azbn.mdl('passport').serializeUser(function(user, done) {
		done(null, user);
	});
	
	azbn.mdl('passport').deserializeUser(function(obj, done) {
		done(null, obj);
	});
	
	azbn.mdl('passport').use(new strategy.yandex({
			clientID : 'cf695d3af88d4e28909bb738976d50c1',
			clientSecret : '7faa7012dace4c4dafc37bd59f31b790',
			callbackURL : 'http://localhost:17003/authorize/by/yandex/'
		},
		function(accessToken, refreshToken, profile, done) {
			
			console.dir(arguments);
			
			done(err, profile);
			
		}
	));
	
	azbn.mdl('express').get('/passport/by/yandex/',
		azbn.mdl('passport').authenticate('yandex'),
		function(req, res){
			
			console.dir(arguments);
			
		}
	);
	
	azbn.mdl('express').get('/authorize/by/yandex/',
		azbn.mdl('passport').authenticate('yandex', {
			failureRedirect : '/',
			successRedirect : '/robots.txt',
		}),
		function(req, res) {
			
			console.dir(arguments);
			
		}
	);
	
	/*
	
	azbn.mdl('passport').serializeUser(function(user, done) {
		
		app.saveJSON('../data/json/passport/' + user._id, user);
		
		done(null, user._id);
		
	});
	
	azbn.mdl('passport').deserializeUser(function(id, done) {
		
		var user = app.loadJSON('../data/json/passport/' + id);
		
		done(err, user);
		
	});
	
	*/
	
	azbn.mdl('express').get('/api/v1/', (new require('./api/v1')(app, azbn)));
	azbn.mdl('express').post('/api/v1/', (new require('./api/v1')(app, azbn)));
	
	azbn.mdl('express').get('/', (new require('./index')(app, azbn)));
	/*
	azbn.mdl('express').get('/auth/logout/', (new require('./auth/logout')(app, azbn)));
	azbn.mdl('express').get('/auth/by/:service/', (new require('./auth/by')(app, azbn)));
	azbn.mdl('express').get('/authorize/by/:service/', (new require('./authorize/by')(app, azbn)));
	azbn.mdl('express').get('/authorized/by/:service/', (new require('./authorized/by')(app, azbn)));
	*/
	
	
	
	
	//azbn.mdl('express').get('/page/start/', (new require('./page/start')(app, azbn)));
	//azbn.mdl('express').get('/page/codefromyandex/', (new require('./page/codefromyandex')(app, azbn)));
	//azbn.mdl('express').put('/', (new require('./route/event/item/put')(app, azbn)));
	//azbn.mdl('express').delete('/event/:year/:month/:day/', (new require('./route/event/item/delete')(app, azbn)));
	
}

module.exports = _;