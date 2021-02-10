# MHENGA
An implementation of Swahili and Node JS to create a Twitter Bot that posts Swahili sayings

![alt text](https://github.com/FelixWaweru/MHENGA/blob/main/Images/khanga.jpg) 

## The Origin
Have you ever wanted to become a software developer but were limited by your fluency in English? Well, if you’re a native Swahili speaker I have some good news for you and it is called Swahili-lang.  
<br><br>
However, before we delve deeper into that, let us talk a bit more about the Swahili language; also known as Kiswahili.
<br><br> 
Swahili is a Bantu language spoken by tens of millions primarily in Kenya, Uganda and Tanzania (East Africa). Similar to many other languages, it has multiple sayings and proverbs that act as a form of oral history about the culture and its people, otherwise known as “Methali”.
<br><br>
Thanks to multiple films such as the 1994 smash hit film, The Lion King, Swahili has become an internationally recognized language. Among many other Swahili words, the phrase “Hakuna Matata” is a catch phrase that is still used to this day by friendly tourists and local vendors hoping to attract friendly tourists.
<br><br>
Swahili-lang is a programming language created by a small team of Kenyan developers. Built on Node JS, Swahili-lang makes use of the Swahili language within a JavaScript syntax and it offers a platform that allows native speakers of the language to easily read and write code. One example of this is the renaming of the if, else function as kama, au; a literal translation of the if, else statements.
<br><br>
In celebration of this year’s Black History Month, I wanted to undertake a project that would allow me to share part of my African culture with more people online. Black History Month being an annual celebration remembering African-American history and the African diaspora, I decided to create a Twitter bot that shares Swahili proverbs and their translations as tweets.
<br><br>
In the spirit of staying authentic to my roots, I chose to create the bot using Swahili-lang and a little bit of JavaScript to help with the tweet posting.
<br><br>

## Getting The Data
![alt text](https://github.com/FelixWaweru/MHENGA/blob/main/Images/largepreview.png) 
In order for our bot to be able to consistently tweet sayings, we would need a source to borrow from. For this project, I sourced most of the sayings from a Swahili blog that had a large collection of sayings and their translations.
<br><br>
I supplemented the sayings that we already had by borrowing more from the book “More Swahili Proverbs from East Africa” by Leonidas Kalugila. It contained multiple Swahili sayings and included their English translations as well; perfect for our needs.
<br><br>
![alt text](https://github.com/FelixWaweru/MHENGA/blob/main/Images/Screenshot%20(170).png) 
<br><br>
After digitizing the book’s contents and cleaning up the collected data, I had to reformat the information into an easily readable list for my code. For the purposes of this project, I decided to structure the sayings into a list. Each list element would contain the saying in Swahili, and the English translation of the saying.
Our list containing the sayings and translations.
<br><br>

## Developing The Bot
This project makes use of two npm packages. Swahili-lang will be used to write a swahili script that will be used to generate the sayings and Twitter will be used to communicate with the Twitter API and will allow for our sayings to be posted as tweets.
<br><br>
To install the Swahili-lang package in Node, you can use the command:<br><br>
npm install swahili-lang<br><br>
As for the Twitter package, you can use the command:<br><br>
npm install twitter<br><br>

## The Swahili-lang Saying Generator
The first file is the mhenga.swh file that will be used to return a randomized Swahili saying along with its English translation. The Swahili-lang file consists of two main functions. The PataMethali function and the NambariYoyote function.
<br><br>
PataMethali; the function below, gets a saying from the list of sayings we have stored within the mamethali list. The NambariYoyote function is a random number generator that is assigned to the variable nambari.
The PataMethali function in the mhenga.swh file.
<br><br>
NambariYoyote, as shown below is the second function in the mhenga.swh file. Since Swahili-lang does not have a random number generator yet, I first had to come up with a way of generating random numbers that would be fed to the PataMethali function.
<br><br>
For this project, I chose to implement the Linear Congruential Generator as our random number generator. It is a simple implementation that takes in a seed value and passes it through the formula (a*seed+c)%m. This then returns a pseudo-randomized number that you can then use.
<br><br>
The values of a, c and m can be any number but I decided to go with the Numerical Recipes recommended values of which I sourced from the Wikipedia page. In order to create a seed value, I implemented the system time in a simple formula that will give us a semi-randomly generated seed value.
<br><br>
Finally, to further randomize the number generation, I passed the formula above through a loop that iteratively updates the seed value in the formula as shown below. Once the value is converted from a decimal into a whole number, it is passed to the PataMethali function.
<br><br>


## The Node JS Tweet Poster
The second file in this project is the app.js file that will take the Swahili sayings from the mhenga.swh file and post it on Twitter using a Node Twitter package. First we import the Twitter package and the file containing my Twitter API keys.
<br><br>
The app.js file consists of two main functions. The tweeter function and the Mhenga function.
The Mhenga function is used to run the mhenga.swh file and then saves the output as a variable that is then passed to tweeter. Once the tweeter function gets a saying from the Mhenga function, it posts a tweet containing the data it received.
<br><br>
At the end of the script we have a try catch function that we use to run the functions above and to resolve any errors that might arise as the app runs and once all the code is in place our app is ready to go.
<br><br>

## The Result
With this code you should be able to create a Twitter bot of your own using Swahili-lang and a little bit of JavaScript. After running the bot script, the app will randomly select a saying and post it on Twitter along with its English translation.
<br><br>
![alt text](https://github.com/FelixWaweru/MHENGA/blob/main/Images/Screenshot%20(172).png)
<br><br>
If you’re interested in polishing up your Swahili or if you would want to learn some new Swahili words, I will be running the app on my Twitter page @whyweru.
<br><br>
The tweets will be continuously posted for the entire month of February in celebration of Black History Month so feel free to follow my Twitter page if you’re interested in this project.
<br><br>
In conclusion, despite being relatively new and simple, Swahili-lang is a highly capable programming language that showcases the African continent’s potential and the contributions that are still being made towards Black history. Hopefully this project is the seed that inspires a new generation of African developers to learn and create without the boundaries of language.
<br><br>


