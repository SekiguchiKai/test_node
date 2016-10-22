# JankenServer-Node.js-version-

====

##Overview
This is the application which enables people to play the Janken game online.

## Description
This is the Janken game with Server.
User of this game will fight with Server which automatically choices the hands of rock-paper-scissors.


## Requirement
* HTML5

* Node.js -3.10.9   
http://nodejs.jp/nodejs.org_ja/docs/v0.10/

* ejs -3.10.9   
http://www.embeddedjs.com/

## Usage
The usage of this application as follows.

1. You should start the local server.
In this case, I use the Apache/2.4.18 (Unix) which is preinstalled on Mac (my OSX version is 10.11.4).
To start the Appache local server, you should hit the command```sudo apachectl start``` at terminal.

2. You should start this application by hitting the command ```node webServer.js```.
  When you hit the ```node webServer.js``` command, you should be in ```JankenServer-Node.js-version- directory```.
  
3. After hitting the command ```node webServer.js``` in JankenServer-Node.js-version- directory, you will see the following  sentence ```Server running at http://localhost:8080/```in terminal screen.
This is the singal of starting this application.

4. Visitig the http://localhost:8080 in browser, you can start JankenGame.

5. The fight screen is displayed, please choice the hands of rock-paper-scissors and click the botton "これで決定!".

6. After clicking the botton "これで決定!", you will see the result of the game in screen.

## Install
```git clone [this repository]``` 


## Licence
[MIT](https://github.com/tcnksm/tool/blob/master/LICENCE)


