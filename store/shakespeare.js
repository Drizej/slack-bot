const request = require('request')

var Shakespeare = [
  {
    getPlay: function() {
      request('http://www.opensourceshakespeare.org/views/plays/play_view.php?WorkID=allswell&Act=1&Scene=2&Scope=scene&displaytype=print', function (error, response, body) {
        if (!error && response.statusCode == 200) {
          return body; // return the web page.
        }
      });
    },
    plays: {
      title:"All's Well That Ends Well",
      acts:[
        {
          title:"Act I",
          scenes: [
            {
              title:"SCENE II. Paris. The KING's palace.",
              lines:[]
            }
          ]
        }
      ]
    }
  }
];

Shakespeare.plays[0].acts[0].scenes[0].lines[235] = "*King of France.*  The Florentines and Senoys are by the ears;";
Shakespeare.plays[0].acts[0].scenes[0].lines[236] = "Have fought with equal fortune and continue";
Shakespeare.plays[0].acts[0].scenes[0].lines[237] = "A braving war.";
Shakespeare.plays[0].acts[0].scenes[0].lines[238] = "*First Lord.* So 'tis reported, sir.";

module.exports = Shakespeare;
