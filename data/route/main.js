/*
обработчик запроса
*/

function _(app, azbn) {
	
	azbn.mdl('express').set('views', azbn.mdl('config').path.pug);
	azbn.mdl('express').set('view engine', 'pug');
	
	azbn.mdl('express').get('/api/v1/', (new require('./api/v1')(app, azbn)));
	azbn.mdl('express').post('/api/v1/', (new require('./api/v1')(app, azbn)));
	
	azbn.mdl('express').get('/', (new require('./index')(app, azbn)));
	azbn.mdl('express').get('/auth/logout/', (new require('./auth/logout')(app, azbn)));
	azbn.mdl('express').get('/auth/by/:service/', (new require('./auth/by')(app, azbn)));
	azbn.mdl('express').get('/authorize/by/:service/', (new require('./authorize/by')(app, azbn)));
	azbn.mdl('express').get('/authorized/by/:service/', (new require('./authorized/by')(app, azbn)));
	
	//azbn.mdl('express').get('/page/start/', (new require('./page/start')(app, azbn)));
	//azbn.mdl('express').get('/page/codefromyandex/', (new require('./page/codefromyandex')(app, azbn)));
	//azbn.mdl('express').put('/', (new require('./route/event/item/put')(app, azbn)));
	//azbn.mdl('express').delete('/event/:year/:month/:day/', (new require('./route/event/item/delete')(app, azbn)));
	
}

module.exports = _;