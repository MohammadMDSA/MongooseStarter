require('dotenv-extended').load();
const builder = require('botbuilder');
const { Prompts, Message, UniversalBot, ChatConnector } = builder;
const restify = require('restify');

const server = restify.createServer();
server.listen(process.env.PORT, () => {
	console.log(`${server.name} listening to ${server.url}`);
});

let connector = new ChatConnector({
	appId: process.env.MICROSOFT_APP_ID,
	appPassword: process.env.MICROSOFT_APP_PASSWORD
});
server.post('api/messages', connector.listen());

let bot = new UniversalBot(connector, (session) => {
	// Bot code goes here...
});