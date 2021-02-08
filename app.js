var Twitter = require('twitter');
var secrets = require('./secrets')
 
var client = new Twitter({
  consumer_key: secrets.consumer_key,
  consumer_secret: secrets.consumer_secret,
  access_token_key: secrets.access_token_key,
  access_token_secret: secrets.access_token_secret
});
 
function Mhenga(callback)
{
	// Node Js spawn function used to run the Mhenga.swh script
	const spawn = require("child_process").spawn;
	let options = {shell: true};
	const swahiliProcess = spawn('swahili',["C:/Users/HP/Documents/Code/GitHub/MHENGA/mhenga.swh"],options);
	let output = '';
	// Save the response to a variable
	swahiliProcess.stdout.on('data', (chunk) => {
		output += chunk.toString();
	});
	swahiliProcess.on('exit', () => {
		callback(output);
	});

}

//Function used to post the tweet
function tweeter(tweet_post)
{
	client.post('statuses/update', {status: tweet_post}, function(error, tweet, response){
			if(error){
				console.log(tweet);
				console.log("Error Posting Tweet");
			}
			else{
				console.log("Tweet: " + tweet_post + "\n");
				console.log(tweet);
				console.log("Tweet Posted!");
			}
		})
}

// function streamer()
// {
// 	var stream = client.stream('statuses/filter', {track: '@whyweru methali'});
// 	stream.on('data', function(event) {
// 		console.log(event && event.text);
		
// 		// Get a methali from the mhenga function
// 		Mhenga(function(output) {
// 			client.post('statuses/update', {status: output, in_reply_to_status_id: event.id}, function(error, tweet, response){
// 				if(error){
// 					console.log(tweet);
// 					console.log("Error Posting Tweet");
// 				}
// 				else{
// 					console.log("Tweet: " + output + "\n");
// 					console.log(tweet);
// 					console.log("Tweet Posted!");
// 				}
// 			})
// 		});
// 		  });
	
// 	stream.on('error', function(error) {
// 		throw error;
// 	});
// }


var hourInterval = 6
// Post a tweet every 6 - 8 hours
  setInterval(function () {
	  //Show the Tweet post time
	var posttime = new Date();
	console.log('Posting tweet at ' + posttime + "\n");
	// Create a random posting time
	hourInterval = (Math.random() * (8.5 - 6.0) + 6.0).toFixed(1)

	try {
		// Function execution
		Mhenga(function(output) {
		tweeter(output)
		// console.log(output)
	  });
	  }
	  catch (e) {
		  console.log("Trying different tweet")
		  // Sleep for a while to change the time
		  setTimeout(Mhenga(function(output)
		  {
			tweeter(output)
			// console.log(output)
		  }), 3000);
	  }
	  finally {
		console.log("Completed");
	  }

 }, hourInterval * 60 * 60 * 1000);