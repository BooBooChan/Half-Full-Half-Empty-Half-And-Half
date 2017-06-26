var http = require("http");
var port = 7000;
function handleRequest(request,response){
	response.end(Path Hit: request.url);
	var positiveAttitudes = [{reason: "I listen well to the user."},{reason: "I can be helpful to user."},{reason: "I am vital to full-stack development."}];
	response(positiveAttitudes[Math.floor(Math.random() * 2)].reason);
};
var server = http.createServer(handleRequest);
server.listen(PORT, function(){
	console.log("Server listening on: http://localhost:%s", PORT);
	console.log("This is why I'm a winner. = )")

});