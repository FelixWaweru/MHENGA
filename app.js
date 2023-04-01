var Twitter = require('twitter');
var cron = require('node-cron');
require('dotenv').config();

const consumer_key = process.env.consumer_key;
const consumer_secret = process.env.consumer_secret;
const access_token_key = process.env.access_token_key;
const access_token_secret = process.env.access_token_secret;
 
var client = new Twitter({
  consumer_key,
  consumer_secret,
  access_token_key,
  access_token_secret,
});

const prompt = '@whyweru methali';
 
function Mhenga(callback)
{
	// Node Js spawn function used to run the Mhenga.swh script
	const spawn = require("child_process").spawn;
	let options = {shell: true};
	const swahiliProcess = spawn('swahili',["./mhenga.swh"],options);
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

// Listens for mentions of the twitter profile
function streamer()
{
	var stream = client.stream('statuses/filter', {track: prompt});
	stream.on('data', function(event) {
		console.log(event && event.text);
		
		// Get a methali from the mhenga function
		Mhenga(function(output) {
			client.post('statuses/update', {status: output, in_reply_to_status_id: event.id}, function(error, tweet, response){
				if(error){
					console.log(tweet);
					console.log("Error Posting Tweet");
				}
				else{
					console.log("Tweet: " + output + "\n");
					console.log(tweet);
					console.log("Tweet Posted!");
				}
			})
		});
		  });
	
	stream.on('error', function(error) {
		throw error;
	});
}


// Post a tweet every 6 hours
cron.schedule('0 0 */6 * * *', () => {
    try {
        // Function execution
        Mhenga(function(output) {
            tweeter(output)
            console.log(output)
        });
    } catch (e) {
        console.log("Trying different tweet")
        // Sleep for a while to change the time
        setTimeout(Mhenga(function(output) {
            tweeter(output)
            console.log(output)
        }), 3000);
    } finally {
        console.log("Completed");
    }
});