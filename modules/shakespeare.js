const fs = require('fs');
const path = require('path');
const playFolder = __dirname+'/plays/';

var Shakespeare = {
  getRandomSnip: function(msg) {
    //console.log('getRandomSnip function triggered');
    // Returns a random integer between min (included) and max (excluded)
    // Using Math.round() will give you a non-uniform distribution!
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }

    fs.readdir(playFolder, (err, files) => {
      if (err) {
        return console.log(err);
      }

      var numberOfPlays = files.length;
      //console.log("playcount: "+numberOfPlays);

      var playID = getRandomInt(0,numberOfPlays);
      //console.log("chosen play: "+playID);

      while (!files[playID].includes('.json')) {
        var playID = getRandomInt(0,numberOfPlays);
        console.log('Reading file: '+files[playID]+'...');
      }

      fs.readFile(playFolder+files[playID], 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }
        //console.log(data);
        var playObj = JSON.parse(data);
        console.log("Play title: "+playObj.title);

        var sceneCount = playObj.scenes.length;
        //console.log(sceneCount);

        var sceneID = getRandomInt(0,sceneCount-1);
        //console.log(sceneID);

        playLine = "From *"+playObj.title+"*, "+playObj.scenes[sceneID].scene;
        var lineCount = playObj.scenes[sceneID].lines.length;

        if(lineCount < 5) {
          //console.log(playObj.scenes[sceneID].lines);
          var lineStr
        } else {
          var lineStart = getRandomInt(0,lineCount - 5);
          playLine += " lines "+lineStart+" through "+(lineStart+5);
          var lineStr = '';
          for(i=0;i<5;i++) {
            lineStr += playObj.scenes[sceneID].lines[lineStart+i];
          }

          //console.log(playLine+'\n'+lineStr);
          msg.say(lineStr+'\n'+playLine);

        }


      });

    });
  }
}

module.exports = Shakespeare;
