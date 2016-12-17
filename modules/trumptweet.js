const fs = require('fs');
const tweetFile = __dirname+'/tweets.txt';


var TrumpTweets = {
  getRandomSnip: function(msg) {
    function get_line(filename, line_no, callback, msg) {
      var stream = fs.createReadStream(filename, {
        flags: 'r',
        encoding: 'utf-8',
        fd: null,
        mode: 0666,
        bufferSize: 64 * 1024
      });

      var fileData = '';
      stream.on('data', function(data){
        fileData += data;
        // The next lines should be improved
        var lines = fileData.split("\n");

        if(lines.length >= +line_no){
          stream.destroy();
          callback(null, msg.say(':trump_: '+lines[+line_no]));
        }
      });

      stream.on('error', function(){
        callback('Error', null);
      });

      stream.on('end', function(){
        callback('File end reached without finding line', null);
      });

  }

  //console.log('getRandomSnip function triggered');
  // Returns a random integer between min (included) and max (excluded)
  // Using Math.round() will give you a non-uniform distribution!
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  var i;
  var count = 0;
  fs.createReadStream(tweetFile)
    .on('data', function(chunk) {
      for (i=0; i < chunk.length; ++i)
        if (chunk[i] == 10) count++;
    })
    .on('end', function() {
      lineNum = getRandomInt(1, count);

      get_line(tweetFile, lineNum, function(err, line){
        console.log(line);
      }, msg);
    });
  }
}





module.exports = TrumpTweets;
