var chalk = require("chalk")
var readlineSync= require("readline-sync")
var tl = require("terminal-link")
var emoji = require("node-emoji")
var log = console.log

log("~~~~~~~~~~~~~~~~~")
log(chalk.blueBright.bold(" TMKOC TRIVIA "))
log("~~~~~~~~~~~~~~~~~\n")

var userName=readlineSync.question("State your name : \n")
log(chalk.greenBright("Welcome to the Trivia ")+chalk.red.underline(userName))
var moreEpisodes = tl('','https://www.sonyliv.com/shows/taarak-mehta-ka-ooltah-chashmah-1700000084')

log(chalk.bold.cyan("\nSeries Info: TMKOC or Taarak Mehta ka Ooltah Chashmah is one of the longest running Indian Hindi Language television sitcoms. \n Click on the link to watch the episodes :"+moreEpisodes))

log(chalk.blue.bgRed.underline("\nGame Rules :\n"))
log(chalk.yellowBright("1. This quiz consists of 10 multiple choice questions."))
log(chalk.yellowBright("2. For each correctly answered question, you will be awarded 4 points."))
log(chalk.yellowBright("3. For each incorrectly answered question, you will be deducted 2 points."))
log(chalk.yellowBright("4. For each answer ,you will have to give the option letter corresponding to the correct option of each question.\n"))

var highScores=[{
  name:"Shekhar",
  pS:"40"
},{
  name:"Rajveer",
  pS:"34"
},{
  name:"Vimarsh",
  pS:"30"
}]

log(chalk.greenBright("\n HALL OF FAME"))
for(i=0;i<highScores.length;i++){
  log(chalk.cyanBright(highScores[i].name+"         "+highScores[i].pS))
}


var response=confirm("Are you ready? ")
var score=0;
var correctAnswered=0;

function evaluation(questionAsked,answerGiven){
  questionAsked = chalk.magentaBright(questionAsked)
  var userAnswer = (readlineSync.question(questionAsked));
  if(userAnswer.toUpperCase()===answerGiven.toUpperCase()){
    log(chalk.green("Yipppeee!!! "+userAnswer+" is the right answer "+emoji.get(":smile:")))
    score+=4;
  }else{
    log(chalk.red("Unfortunately your answer is incorrect "+emoji.get(":pensive:")))
    score-=2;
    log(chalk.red(answerGiven+ " is the correct answer"))
  }
  log("Total points scored: ",score)
  log("----------------------")
}

var questionList=[
  {
    q:"\nWho is known for being a param mitra or a fire brigade? \na) Iyer\nb) Mehta\nc) Bhide\nd) Sodhi\n",
    a:"b"
  },{
    q:"\nWhat group is in TMKOC's Gokuldham Society? \na) Shiv Sena\nb) Congress\nc) Tapu Sena\nd) There is no group in the society at all\n",
    a:"c"
  },{
    q:"\nWho is known for being the best at cooking and is known as the Garba Queen? \na) Anjali\nb) Babita\nc) Komal\nd) Daya\n",
    a:"d"
  },{
    q:"\nMost evenings, the group gets together at a shop to discuss everything under the sun. What is the name of the shop? \na) All in one General Store \nb) Abdul Miyan Store\nc) Aao Khaao Store\nd) General Store\n",
    a:"a"
  },
  {
    q:"\nWho is known for being very discipline and strict and is also multi-talented? \na) Popatlal\nb) Sodhi\nc) Mehta\nd) Bhide\n",
    a:"d"
  },{
    q:"\nWhat is the name of the bhojnalaya where Bagha and Natu Kaka have food?\na) Gujarati Bhojnalya\nb) Padmavati Bhojnalya\nc) Padmini Bhojnalaya\nd) Savarna Bhojnalaya\n",
    a:"b"
  },{
    q:"\nWho is known for being a huge foodie?\na) Mehta\nb) Sodhi\nc) Haathi\nd) Popatlal\n",
    a:"c"
  },{
    q:"\nWhat is Krishnan Iyer's profession?\na) Scientist\nb) Businessman\nc) Reporter\nd) Engineer\n",
    a:"a"
  },{
    q:"\nWhat is the name of the company where Popatlal works as a reporter?\na) Express Mail\nb) Toofan Express\nc) Aandhi Express\nd) Toofan Mail\n",
    a:"b"
  },{
    q:"\nJethalal's secret crush?\na) Bavri\nb) Daya\nc) Roshan\nd) Babita\n",
    a:"d"

  }
]

if(response===true){
  for(var i=0;i<questionList.length;i++){
    var x=i+1;
    log("Question Number: "+ x)
    evaluation(questionList[i].q,questionList[i].a)
  }
}else{
  log("Hope you find the time to play the game.")
}

log(chalk.red.bgYellow.underline("Total points scored by "+userName+": ")+score)
for(i=0;i<highScores.length;i++){
  if(score>highScores[i].pS){
    correctAnswered++;
  }
}
if(correctAnswered==3||correctAnswered==2||correctAnswered==1){
  log(chalk.yellowBright("Congratulations you are among the high Scorers "+emoji.get(":smiley:")))
}

log("\n**********THE END*************")