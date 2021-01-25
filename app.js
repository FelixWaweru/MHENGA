var Twitter = require('twitter');
var Swahili = require('swahili-lang');

var swahiliImport = Swahili.impoti("./hesabu.swh")

swahiliImport.PataMethali(1)
 
// var client = new Twitter({
//   consumer_key: '',
//   consumer_secret: '',
//   access_token_key: '',
//   access_token_secret: ''
// });
 
// const spawn = require("child_process").spawn;
// let options = {shell: true};
// const pythonProcess = spawn('python',["C:/Users/HP/Documents/Code/GitHub/NodePractice/test.py"],options);
// const swahiliProcess = spawn('swahili',["C:/Users/HP/Documents/Code/GitHub/NodePractice/mhenga.swh"],options);
// swahiliProcess.stdin.setEncoding('utf-8');
// swahiliProcess.stdin.write('1\n');
// swahiliProcess.stdout.pipe(process.stdout);
// swahiliProcess.stdin.end();

//Function used to see the specified user timeline
// var params = {screen_name: 'whyweru'};
// client.get('statuses/user_timeline', params, function(error, tweets, response) {
//   if (!error) {
//     console.log(tweets);
//   }
// });

// //Function used to post the tweet
// function tweeter(tweet_post)
// {
// 	client.post('statuses/update', {status: tweet_post}, function(error, tweet, response){
// 			if(!error){
// 				console.log(tweet);
// 			}
// 			else{
// 				console.log(response);
// 			}
// 		})
// }