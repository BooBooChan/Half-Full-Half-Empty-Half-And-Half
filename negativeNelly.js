var http = require("http");
var port = 7500;
function handleRequest(request,response){
	response.end(Path Hit: request.url);
	var negativeAttitudes = [{reason: "I don't function well."},{reason: "I'm stupid as a toddler."},{reason: "I can't do anything on my own."}];
	response(negativeAttitudes[Math.floor(Math.random() * 2)].reason);
};
var server = http.createServer(handleRequest);
server.listen(PORT, function(){
	console.log("Server listening on: http://localhost:%s", PORT);
	console.log("This is why I'm a loser. = (")

});